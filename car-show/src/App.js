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
import CarDetails from './components/CarDetails'
import ChangePasswordForm from './components/ChangePasswordForm'
import UserSettings from './components/UserSettings'
import UpdateComment from './components/UpdateComment'
import Client from './services/api'

const App = () => {
  const [userCarList, setUserCarList] = useState([])

  const [user, setUser] = useState(null)

  const [carList, setCarList] = useState([])

  const [comments, setComments] = useState([])

  const [commentsId, setCommentsId] = useState()

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
    if (token) {
      checkToken()
    }
  }, [])

  // const getCommentById = async (id) => {
  //   const commentsId = await axios.get(`http://localhost:3001/comment/${id}`)
  //   setCommentsId(commentsId)
  // }

  const getUsersCars = async () => {
    if (user !== null) {
      const cars = await axios.get(`http://localhost:3001/cars/user/${user.id}`)
      setUserCarList(cars.data)
    }
  }

  const getAllCars = async () => {
    const response = await axios.get('http://localhost:3001/cars/all')
    setCarList(response.data)
  }

  const getAllComments = async () => {
    const response = await axios.get('http://localhost:3001/comment/all')
    setComments(response.data)
  }

  useEffect(() => {
    getUsersCars()
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
                user={user}
              />
            }
          />
          <Route
            path="/User"
            element={
              <User
                user={user}
                userCarList={userCarList}
                getUsersCars={getUsersCars}
              />
            }
          />

          <Route path="/updateComment/" element={<UpdateComment />} />

          <Route path="/register/" element={<Register />} />
          <Route path="/signIn/" element={<SignIn setUser={setUser} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/CarDetails/:id"
            element={
              <CarDetails
                user={user}
                getUsersCars={getUsersCars}
                userCarList={userCarList}
              />
            }
          />
          <Route
            path="/updatePassword"
            element={
              <ChangePasswordForm user={user} handleLogOut={handleLogOut} />
            }
          />
          <Route
            path="/UserSettings"
            element={<UserSettings user={user} handleLogOut={handleLogOut} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
