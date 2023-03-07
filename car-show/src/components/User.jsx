import axios from 'axios'
import { useState, useEffect } from 'react'
import Car from './Car'

import { useParams } from 'react-router-dom'

const User = ({ user, token }) => {
  const [userCarList, setUserCarList] = useState([])

  console.log(user.id)
  const getUsersCars = async () => {
    const cars = await axios.get(`http://localhost:3001/cars/user/${user.id}`)

    setUserCarList(cars.data)
  }

  useEffect(() => {
    getUsersCars()
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
