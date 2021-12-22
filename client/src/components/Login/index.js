import React from 'react';
import './style.css';

function Login() {
    return (
        <section>
            <form>
                <label for="username"><b>Username:</b></label>
                <input type="text" placeholder="Enter username" />
                <label for="password"><b>Password:</b></label>
                <input type="password" placeholder="Enter password" />
                <button type="submit">Login</button>
            </form>
        </section>
    );
}

export default Login;