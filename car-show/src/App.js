import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import About from './components/About'
import SignIn from './components/SignIn'
import { CheckSession } from './services/Auth'
import User from './components/User'
import axios from 'axios'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)

    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const [carList, setCarList] = useState([])

  const [comments, setComments] = useState([])

  const getAllCars = async () => {
    const response = await axios.get('http://localhost:3001/cars/all')
    setCarList(response.data)
    console.log(response)
  }
  const getAllComments = async (comments) => {
    const response = await axios.get('http://localhost:3001/comment/all')
    setComments(response.data)
    // console.log(response)
  }

  console.log(carList)
  useEffect(() => {
    getAllCars()
    getAllComments()
  }, [])

  return (
    <div>
      <Header user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                carList={carList}
                comments={comments}
                getAllCars={getAllCars}
                getAllComments={getAllComments}
                user={user}
              />
            }
          />
          <Route path="/User" element={<User user={user} />} />

          <Route path="/register/" element={<Register />} />
          <Route path="/signIn/" element={<SignIn setUser={setUser} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
