import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import About from './components/About'
import SignIn from './components/SignIn'
import { CheckSession } from './components/services/Auth'
import User from './components/User'

function App() {
  let token
  const [user, setUser] = useState(null)
  const handleLogOut = () => {
    setUser(null)

    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession('token')
    setUser(user)
  }
  const getToken = async () => {
    token = await localStorage.getItem('token')
  }
  useEffect(() => {
    getToken()

    if (token) {
      checkToken()
    }
  }, [])
  console.log(token)
  return (
    <div>
      <Header user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          {user && (
            <Route path="/User" element={<User token={token} user={user} />} />
          )}
          <Route path="/register/" element={<Register />} />
          <Route path="/signIn/" element={<SignIn setUser={setUser} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
