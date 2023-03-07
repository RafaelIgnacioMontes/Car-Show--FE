import axios from 'axios'
import { useState, useEffect } from 'react'
import Car from './Car'

const User = ({ user, token }) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  const [userCarList, setUserCarList] = useState([])

  const getAllCars = async () => {
    const cars = await axios.get(
      `http://localhost:3001/cars/user/${user.id}`,
      config
    )

    setUserCarList(cars.data)
  }
  useEffect(() => {
    getAllCars()
  }, [])
  console.log(token)
  return (
    <div>
      <h1>Test</h1>
      <div>
        {userCarList.map((cars) => (
          <div className="Car-Card">
            <img src={cars.image} alt="car image" />
            <p className="make">Make:{cars.make}</p>
            <p className="model">Model:{cars.model}</p>
            <p className="year">Year Built:{cars.year}</p>
            <p className="vin">VIN: {cars.vin}</p>
            <p className="color">Color: {cars.color}</p>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default User
import axios from 'axios'
import { useState, useEffect } from 'react'
import Car from './Car'
// import { useParams } from ''

const User = ({ user }) => {
  const [userCarList, setUserCarList] = useState([])

  const getAllCars = async ({ user }) => {
    // let userId = useParams()
    const cars = await axios.get(`http://localhost:3001/cars/user/${user.Id}`)
    setUserCarList(cars.data)
    console.log(user.id)
  }
  useEffect(() => {
    getAllCars()
  }, [])

  return (
    <div>
      <h1>Test</h1>
      <div> 
         {userCarList.map((cars) => (
          <div className="Car-Card">
            <img src={cars.image} alt="car image" />
            <p className="make">Make:{cars.make}</p>
            <p className="model">Model:{cars.model}</p>
            <p className="year">Year Built:{cars.year}</p>
            <p className="vin">VIN: {cars.vin}</p>
            <p className="color">Color: {cars.color}</p>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default User
