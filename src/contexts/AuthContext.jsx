import axios from '../config/axios';
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

function AuthContextProvider(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        axios
            .post('/auth/login', { username, password })
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('token', res.data.token); // เก็บค่าไว้ใน local
                navigate('/', { replace: false, state: { username } });
            })
            .catch((err) => {
                console.log(err);
                setError('Invalid username or password');
                setTimeout(() => setError(''), 5000);
            });
    };
    return (
        <AuthContext.Provider
            value={{
                username,
                setUsername,
                password,
                setPassword,
                error,
                setError,
                handleSubmitLogin,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
export default AuthContextProvider;
export { AuthContext };
