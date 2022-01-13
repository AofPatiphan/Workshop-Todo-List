import React from 'react';
import LoginForm from '../components/LoginForm';
import AuthContextProvider from '../contexts/AuthContext';

function Login() {
    return (
        <>
            <AuthContextProvider>
                <LoginForm />
            </AuthContextProvider>
        </>
    );
}

export default Login;
