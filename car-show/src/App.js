import { Routes, Route, useNavigate } from 'react-router-dom'
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

  const [carList, setCarList] = useState([])

  const [comments, setComments] = useState([])

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
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])
  const getUsersCars = async () => {
    const cars = await axios.get(`http://localhost:3001/cars/user/${user.id}`)

    setUserCarList(cars.data)
  }

  const getAllCars = async () => {
    const response = await axios.get('http://localhost:3001/cars/all')
    setCarList(response.data)
    console.log(response)
  }
  const getAllComments = async () => {
    const response = await axios.get('http://localhost:3001/comment/all')
    setComments(response.data)
    // console.log(response)
  }
  const getCarDetails = async (params) => {
    const response = await axios.get(
      `http://localhost:3001/cars/car/${params.car_id}`
    )
    setCarDetails(response)
    console.log(response)
  }

  console.log(carList)
  useEffect(() => {
    getAllCars()
    getAllComments()
    getCarDetails()
    getUsersCars()
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
