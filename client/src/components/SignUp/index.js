import React from 'react';
import './style.css';

function SignUp() {
    return (
        <section>
            <form>
                <div>
                    <label for="username"><b>Username:</b></label>
                    <input type="text" placeholder="Enter username" />
                    <label for="email"><b>Email:</b></label>
                    <input type="text" placeholder="Enter email" />
                    <label for="password"><b>Password:</b></label>
                    <input type="password" placeholder="Enter password" />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </section>
    );
}

export default SignUp;