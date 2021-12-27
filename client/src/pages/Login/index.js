import React, { useState } from 'react';
import SignUp from '../../components/SignUp';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './style.css';

function Login() {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

      // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
        ...formState,
        [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
        // execute addUser mutation and pass in variable data
        const { data } = await login({
            variables: { ...formState }
        });
        
        Auth.login(data.addUser.token);
        } catch (e) {
        console.error(e);
        }
    };

    return (
        <main>
            <form className='login-form' onSubmit={handleFormSubmit}>
                <h1>Login:</h1>
                <div>
                    <label htmlFor='username'><b>Username:</b></label>
                    <input 
                        type='username' 
                        placeholder='Enter username'
                        name='username'
                        id='username'
                        value={formState.username}
                        onChange={handleChange} 
                    />
                    <label htmlFor='password'><b>Password:</b></label>
                    <input 
                        type='password' 
                        placeholder='Enter password'
                        name='password'
                        id='password'
                        value={formState.password}
                        onChange={handleChange} 
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
            {error && <div>Login failed</div>}
            <SignUp />
        </main>
    );
}

export default Login;