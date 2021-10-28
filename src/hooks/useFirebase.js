import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, FacebookAuthProvider,signInWithEmailAndPassword, createUserWithEmailAndPassword,sendEmailVerification, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    // Sign In Using Email and Password
    const processLogin = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user = result.user;
          setUser(user)
          console.log(user);
        })
        .catch(error => {
          console.log(error.message);
        })
      }

      // Create user
      const createNewUser = (email , password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user)
          sendEmailVerification(auth.currentUser)
          .then(result =>{
            console.log(result);
          })
        })
        .catch(error =>{
          console.log(error.message);
        })
       
      }
    //Sign In With Google
    const signInUsingGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
        .finally(() => setIsLoading(false))
        // .then(result => {
        //     console.log(result.user);
        //     setUser(result.user);
        // })
        // .catch(error => {
        //     setError(error.message)
        // })
    }

    // Sign In With Github
    const signInUsingGitHub = () =>{
        return signInWithPopup(auth, gitHubProvider)
        .finally(() => setIsLoading(false))
    }
    // Sign In with Facebook
    const signInUsingFacebook = () =>{
       return signInWithPopup(auth, facebookProvider)
        
    }

    const logout = () => {
        signOut(auth)
        .then(() =>{
            setUser({});
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
              setUser({})
            }
            setIsLoading(false)
        })
    }, []);

    return {
        user,
        error,
        signInUsingGoogle,
        signInUsingGitHub,
        signInUsingFacebook,
        processLogin,
        createNewUser,
        isLoading,
        logout
    }
}

export default useFirebase;