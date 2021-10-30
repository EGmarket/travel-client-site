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
        <div className="container mt-5  p-5 bg-light text-center">
            <div>
            <button className="btn btn-info" onClick={handleGoogleLogin}>Google Login</button>
            </div>
            
        </div>
    );
};

export default Login;