import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';

import { Link } from 'react-router-dom';
const Header = () => {
    const { account, setAccount, setIsLogin, isLogin } =
        useContext(AuthContext);

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        localStorage.clear('token');
        navigate('/login');
        setAccount('');
        setIsLogin(false);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        TodoList App
                    </Link>
                    <div className="collapse navbar-collapse justify-content-end">
                        <div className="navbar-nav">
                            <Link className="nav-link " to="/">
                                Home
                            </Link>
                            <Link className="nav-link" to="/login" style={{}}>
                                {isLogin ? '' : 'Login'}
                            </Link>
                            <Link
                                className="nav-link"
                                to="/register"
                                style={{}}
                            >
                                {isLogin ? '' : 'Register'}
                            </Link>
                            <Link className="nav-link" to="/" style={{}}>
                                {account}
                            </Link>

                            <button
                                type="submit"
                                className="btn "
                                onClick={handleClick}
                            >
                                logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
