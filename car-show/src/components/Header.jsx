import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <p>Welcome {user.email}!</p>
        <Link to="/">Feed</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }
  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )
  return (
    <header>
      <nav>
        <div className="logoHomeAbout">
          <div className="logoTitle">
            <NavLink to="/" className="logo">
              <img
                src="https://i.imgur.com/4EPiWVr.jpeg"
                alt="Car image"
                className="logoImage"
              />
            </NavLink>
            <h1 className="car-show">Car Show</h1>
          </div>
          <div className="homeAbout">
            <div className="homeNav">
              <NavLink to="/" className="homeLink">
                Home
              </NavLink>
            </div>
            <div className="aboutNav">
              <NavLink to="/about" className="aboutLink">
                About
              </NavLink>
            </div>

            <div className="registerNav">
              <NavLink to="/register" className="registerLink">
                Register
              </NavLink>
            </div>

            <div className="registerNav">
              {user ? userOptions : publicOptions}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
