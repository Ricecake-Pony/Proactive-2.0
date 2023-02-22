import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.form`
  width: 100%;
  height: 100vh;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .signup-form {
    width: 40%;
  }
  .signup-form input {
    margin-bottom: 20px;
  }
  .pass-conf {
    margin-right: 87px;
  }
`;

function SignUp({ onSignUp }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(errors)

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onSignUp(user), navigate("/"));
      } else {
        r.json().then((err) => {
          // console.log(err)
          setErrors(err.errors);
        });
      }
    });
  }

  return (
    <Container onSubmit={handleSubmit}>
      <div className="signup-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          class="password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <br />
        <div className="pass-conf">
          <label htmlFor="password_confirmation">Password Confirmation:</label>
          <input
            class="password-confirmation"
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <br />
        </div>
        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>

        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </div>
    </Container>
  );
}

export default SignUp;
