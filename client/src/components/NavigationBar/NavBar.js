import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 80px;
  font-size: 17px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 3px solid white;
  font-family: "Lato", sans-serif;

  .nav-bar a {
    text-decoration: none;
  }
  .nav-links {
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .nav-links a {
    color: white;
  }
  .nav-buttons {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .login {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    transition: background-color 0.3s;
    cursor: pointer;
    background-color: white;

    font-size: 18px;
    font-weight: 700;
  }
  .login a {
    color: #397769;
  }
  .signup {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    transition: background-color 0.5s;
    cursor: pointer;
    color: white;
    background-color: #76c3b1;

    font-size: 18px;
    font-weight: 700;
  }
  .signup a {
    color: white;
    text-decoration: none;
  }
  .login:hover {
    color: white;
    background-color: #76c3b1;
  }

  .signup:hover {
    color: #76c3b1;
    background-color: white;
  }
`;
export default function NavBar({ user }) {
  return (
    <Container>
      <div className="app-header">Welcome to Proactive!</div>

      <div className="nav-links">
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/exercises">
          Exercises
        </NavLink>
        <NavLink className="link" to="/trackers">
          Tracker
        </NavLink>
      </div>

      <div className="nav-buttons">
        {user ? (
          <NavLink className="link" to="/logout">
            Logout
          </NavLink>
        ) : (
          <>
            <div className="login">
              <NavLink className="link" to="/login">
                Login
              </NavLink>
            </div>

            <div className="signup">
              <NavLink className="link" to="/signup">
                SignUp
              </NavLink>
            </div>
          </>
        )}
      </div>
    </Container>
  );
}
