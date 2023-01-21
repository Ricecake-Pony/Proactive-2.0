import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar ({user}) {
    return(
        <>
            <NavLink className="homeLink" to="/"> Home </NavLink>
            <NavLink className="exercisesLink" to="/exercises"> Exercises </NavLink>
            <NavLink className="trackerLink" to="/trackers"> Tracker </NavLink>
            {
                user?
                <NavLink className= "logoutLink" to="/logout">Logout</NavLink>
                :
                <>
                    <NavLink className="loginLink" to="/login"> Login </NavLink>
                    <NavLink className= "signupLink" to="/signup">SignUp</NavLink>
                </>
            }
        </>
    )
}