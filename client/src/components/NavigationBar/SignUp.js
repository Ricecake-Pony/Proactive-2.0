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
  .pass-conf  {
    display: flex;
    flex-direction: row;
    width: 110%;
  }
`;

function SignUp({ onSignUp }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
        passwordConfirmation,
      }),
    }).then(async (r) => {
      setIsLoading(true);
      let response = await r.json();
      console.log(response);

      if (response?.error) {
        setErrors(response.error);
      }
      if (response?.username) {
        console.log(response);
      }
      navigate("/login")
    });
  }

  return (
    <Container onSubmit={handleSubmit}>
      <div className="signup-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
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
        />
        <br />
        <div className="pass-conf">
          <label htmlFor="password_confirmation">Password Confirmation:</label>
          <br />
          <input
            class="password-confirmation"
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <br />
        </div>
        {errors.map((error) => (
          <div style={{ color: "red" }} key={error}>
            {error}
          </div>
        ))}
      </div>
      <button
        type="submit"
        disabled={password !== passwordConfirmation || !username}>
        {isLoading ? "Loading..." : "Sign Up"}
      </button>
    </Container>
  );
}

export default SignUp;

// Added disabled on 103 for true password verification and || to verify that if the username is also not filled out that they will not have ability to sign up.



// tatertot@gmail.com
// Potato
// Potato!1
//  https://cdn.vox-cdn.com/thumbor/DEM_zpQv4871Uh8gEkM5tGMqPZM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9064347/tater_tots_closeup.jpg