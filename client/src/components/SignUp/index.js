import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import "./style.css";

function SignUp() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
      setFormState({
        username: "",
        email: "",
        password: "",
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <form className="signup-form main-container" onSubmit={handleFormSubmit}>
        <h1>SIGN UP:</h1>
        <div className=" flex-container">
          <label htmlFor="username">
            <b>USERNAME:</b>
          </label>
          <input
            type="username"
            placeholder="Enter username"
            name="username"
            id="username"
            value={formState.username}
            onChange={handleChange}
          />
          <label htmlFor="email">
            <b>EMAIL:</b>
          </label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
          <label htmlFor="password">
            <b>PASSWORD:</b>
          </label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <button className="login-sign" type="submit">
          Sign Up
        </button>
      </form>
      {error && <div className="error-warning">SIGN UP FAILED</div>}
    </main>
  );
}

export default SignUp;
