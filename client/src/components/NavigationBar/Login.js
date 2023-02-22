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
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user), navigate("/"));
      } else {
        r.json().then((err) => {
          console.log(err);
          setErrors(err.errors);
        });
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
        <button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
        <br />
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </div>
    </Container>
  );
}
