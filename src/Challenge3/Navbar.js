import React from 'react'
import { NavLink } from 'react-router-dom'
import'./cha.css'

const Navbar = () => {
  return (
    <div className="nav">
    
      <NavLink to='/'  className="home">  Home  </NavLink>
      
      
      <NavLink to='students'  className="home">  Students  </NavLink>
      <NavLink to='grades'  className="home">  Grades  </NavLink>
      <NavLink to='course'  className="home">  Courses  </NavLink>
      <NavLink to='local'  className="home">  Login  </NavLink>
     
    </div>
  )
}

export default Navbar
