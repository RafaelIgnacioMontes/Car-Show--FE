import Header from './components/Header'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './components/Home'
import Register from './components/Register'
import About from './components/About'
import SignIn from './components/SignIn'
import { CheckSession } from './services/Auth'

function App() {
  const [user, setUser] = useState(null)
  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    // toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div>
      <Header user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/register/" element={<Register />} />
          <Route path="/signIn/" element={<SignIn setUser={setUser} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
