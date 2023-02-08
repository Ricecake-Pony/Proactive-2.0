import React, {useState, useEffect} from 'react';
import './App.css';
import Login from './Login';
import Logout from './Logout';
import SignUp from './Signup';
import Home from './Home';
import NavBar from './NavBar';
import {Route, Routes, useNavigate } from 'react-router-dom';
import ExerciseContainer from './ExerciseContainer';
import TrackerContainer from './TrackerContainer';


function App() {
  const [user, setUser] = useState(null)
  console.log(user)
  const [exercises, setExercises] = useState([])
  const [steps, setSteps] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    async function fetchData(){
      const response = await fetch('/me');
      const userAwait = await response.json();
      console.log(userAwait)
      if (userAwait.error) setUser(null) 
      else
      {
        setUser(user)
        navigate("/")
      };
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
    <div className="appBackground">
      <div className="App">
        <header className="appHeader"> 
        Welcome to Proactive!
        </header>
        <NavBar className="appLinks" user={user} setUser={setUser}/>
          <Routes >
            <Route exact path="/" element={<Home user={user} setUser ={setUser}/>}/>
            <Route exact path="/login" element={<Login  user= {user} onLogin= {setUser} />}/>
            <Route exact path="/logout" element={<Logout  user= {user} onLogout= {setUser} />}/>
            <Route exact path="/signup" element={<SignUp user= {user} onSignUp={setUser} />}/>
            <Route exact path="/exercises" element={<ExerciseContainer exercises= {exercises}/>}/>
            { user? <Route exact path="/trackers" element={<TrackerContainer exercises= {exercises} />}/> : <Route exact path="/login" element={<Login  user= {user} onLogin= {setUser} />}/> }
            <Route path="*" element={<Login  user= {user} onLogin= {setUser} />}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
