import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

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
        <div>
            <button onClick={handleGoogleLogin}>Google Login</button>
        </div>
    );
};

export default Login;