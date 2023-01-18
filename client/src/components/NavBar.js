import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function NavBar ({user}) {
    return(
        <>
            <NavLink className="home" to="/"> Home </NavLink>
            <NavLink className="exercises" to="/exercises"> Exercises </NavLink>
            <NavLink className="tracker" to="/trackers"> Tracker </NavLink>
            {
                user?
                <NavLink className= "logout" to="/logout">Logout</NavLink>
                :
                <>
                    <NavLink className="login" to="/login"> Login </NavLink>
                    <NavLink className= "signup" to="/signup">SignUp</NavLink>
                </>

            }
            {/* <p onClick={} > className= "logout" to="/lo"> LogOut </p> */}
            {/* Conditional login to logout rendering */}
        </>
    )
}