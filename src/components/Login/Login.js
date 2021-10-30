import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Login = () => {
    // const [isLogin, setIsLogin] = useState(false);
    const {
        signInUsingGoogle,
        signInUsingGitHub,
        signInUsingFacebook,
    } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    // Handle Google Login
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then((result)=>{
            history.push(redirect_uri)
        })
    }

    return (
        <div className="container mt-5  p-5 bg-light text-center">
            <div>
            <button className="btn btn-dark text-center mt-2" onClick={handleGoogleLogin}>
            <FontAwesomeIcon
            icon={faGoogle}
            size="2x"
            className="text-danger"
          /> <span className="text-center p-3">Google Login</span> </button>
            </div>
            
        </div>
    );
};

export default Login;