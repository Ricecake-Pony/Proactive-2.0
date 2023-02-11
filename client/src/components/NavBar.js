import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar({ user }) {
  return (
    <div className="nav-bar">
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
    </div>
  );
}
