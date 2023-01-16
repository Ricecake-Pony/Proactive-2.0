import React, {useState, useEffect} from 'react';
import './App.css';
import Login from './Login';
// import Logout from './Logout';
import SignUp from './Signup';
import Home from './Home';
import NavBar from './NavBar';
import {Route, Routes} from 'react-router-dom';
import ExerciseContainer from './ExerciseContainer';
import TrackerContainer from './TrackerContainer';


function App() {
  const [user, setUser] = useState(null)
  const [exercises, setExercises] = useState([])
  

  useEffect(() => {
    async function fetchData(){
      const response = await fetch('/me');
      const user = await response.json();
      setUser(user);
    }
    fetchData();
  }, []);

  useEffect(() => {
    function fetchExercises(){
      fetch("/exercises")
      .then((r) => r.json())
      .then((exercisesData) => setExercises(exercisesData));
    }
    fetchExercises();
  }, []);

  return (
    <div className="App">
      <header className="App-header"> 
      Welcome to Proactive!
      </header>
      <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route exact path="/" element={<Home user={user} setUser ={setUser}/>}/>
          <Route exact path="/login" element={<Login  user= {user} onLogin= {setUser} />}/>
          <Route exact path="/signup" element={<SignUp user= {user} onSignUp={setUser} />}/>
          <Route exact path="/exercises" element={<ExerciseContainer exercises= {exercises}/>}/>
          <Route exact path="/trackers" element={<TrackerContainer />}/>
        </Routes>
    </div>
  );
}

export default App;
