import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
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
import CommentForm from './components/CommentForm'
import UpdateComment from './components/UpdateComment'

const App = () => {
  let navigate = useNavigate()

  const [userCarList, setUserCarList] = useState([])

  const [carDetails, setCarDetails] = useState()

  const [user, setUser] = useState(null)

  const [carList, setCarList] = useState([])

  const [comments, setComments] = useState([])

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
  const getUsersCars = async () => {
    const carsss = await axios.get(`http://localhost:3001/cars/user/${user.id}`)
  }

  const getAllCars = async () => {
    const response = await axios.get('http://localhost:3001/cars/all')
    setCarList(response.data)
    console.log(response.data)
  }

  const getAllComments = async () => {
    const response = await axios.get('http://localhost:3001/comment/all')
    setComments(response.data)
  }

  console.log(carList)
  useEffect(() => {
    navigate()
    getAllCars()
    getAllComments()
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

          <Route path="/register/" element={<Register />} />
          <Route path="/signIn/" element={<SignIn setUser={setUser} />} />
          <Route path="/about" element={<About />} />
          <Route path="/CarDetails/:id" element={<CarDetails />} />

          <Route path="/commentForm/" element={<CommentForm />} />
          <Route path="/updateComment/" element={<UpdateComment />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
