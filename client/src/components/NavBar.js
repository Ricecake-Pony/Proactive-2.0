import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar () {
    return(
        <>
            <NavLink className="login" to="/login"> Login </NavLink>
            <NavLink className="home" to="/"> Home </NavLink>
            <NavLink className="exercises" to="/exercises"> Exercises </NavLink>
            <NavLink className="tracker" to="/trackers"> Tracker </NavLink>
            <NavLink className= "signup" to="/signup">SignUp</NavLink>
        </>
    )
}