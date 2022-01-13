import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function LoginForm() {
    const {
        username,
        setUsername,
        password,
        setPassword,
        error,
        handleSubmitLogin,
    } = useContext(AuthContext);
    return (
        <>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmitLogin}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </>
    );
}

export default LoginForm;
