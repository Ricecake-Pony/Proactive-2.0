import { React, useState } from "react";
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

  .login-form {
    width: 40%;
  }
  .login-form input {
    margin-bottom: 20px;
  }
`;
export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then(async (r) => {
      let response = await r.json();
      console.log(response);
      if (response?.error) {
        setErrors(response.error);
      } if (response?.username) {
        console.log(response);
      }
    });
  }

  return (
    <Container onSubmit={handleSubmit}>
      <div className="login-form">
        <label htmlFor="username">Username: </label>
        <input
          className="username"
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password: </label>

        <input
          className="password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        {errors.length > 0 && (
          <div >
            {errors.map((error) => (
              <div style={{ color: "red" }} key={error}>{error}</div>
            ))}
          </div>
        )}

        <button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
        <br />
      </div>
    </Container>
  );
}
