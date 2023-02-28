import React, { useState, useEffect } from "react";
import Login from "./NavigationBar/Login.js";
import Logout from "./NavigationBar/Logout.js";
import SignUp from "./NavigationBar/SignUp.js";
import Home from "./Homepage/Home.js";
import NavBar from "./NavigationBar/NavBar.js";
import { Route, Routes, useNavigate } from "react-router-dom";
import ExerciseContainer from "./Excercises/ExerciseContainer";
import TrackerContainer from "./Tracker/TrackerContainer.js";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

const Container = styled.div`
  color: white;
  flex-wrap: wrap;
  width: 100vw;
  .App {
    text-align: center;
  }
  .app-header {
    width: 20%;
    background-color: transparent;
  }
`;

function App() {
  const [user, setUser] = useState(null);
  const [exercises, setExercises] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/me");
      const userAwait = await response.json();
      console.log(userAwait);
      if (userAwait.error) setUser(null);
      else {
        setUser(user);
        navigate("/");
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    fetch("/exercises")
      .then((r) => r.json())
      .then((exercisesData) => setExercises(exercisesData));
  }, []);

  return (
    <Container>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
            background-color: #1a1d1e;
            font-family: lato;
          }
        `}
      />
      <div className="App">
        <NavBar className="appLinks" user={user} setUser={setUser} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home user={user} setUser={setUser} />}
          />
          <Route
            exact
            path="/login"
            element={<Login user={user} onLogin={setUser} />}
          />
          <Route
            exact
            path="/logout"
            element={<Logout user={user} onLogout={setUser} />}
          />
          <Route
            exact
            path="/signup"
            element={<SignUp user={user} onSignUp={setUser} />}
          />
          <Route
            exact
            path="/exercises"
            element={<ExerciseContainer exercises={exercises} />}
          />
          {user ? (
            <Route
              exact
              path="/trackers"
              element={<TrackerContainer exercises={exercises} />}
            />
          ) : (
            <Route
              exact
              path="/login"
              element={<Login user={user} onLogin={setUser} />}
            />
          )}
          <Route path="*" element={<Login user={user} onLogin={setUser} />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
