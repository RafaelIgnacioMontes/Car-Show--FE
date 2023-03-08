import { useEffect, useState } from 'react'
import CarForm from './CarForm'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const User = ({ user, userCarList, getUsersCars }) => {
  let navigate = useNavigate()

  const [addingCar, setAddingCar] = useState(false)

  const addCar = () => {
    setAddingCar((current) => !current)
  }

  console.log(userCarList)

  const deleteCar = async (e) => {
    e.preventDefault()
    const response = await axios.delete(
      `http://localhost:3001/cars/delete/${userCarList.id}`
    )
    navigate('/User')
  }

  useEffect(() => {
    getUsersCars()
    deleteCar()
  }, [])

  return (
    <div>
      <h1>Your Collection</h1>
      <div>
        {userCarList.map((cars) => (
          <div className="User-Car-Card" key={cars.id}>
            <img src={cars.image} alt="car image" />
            <p className="make">Make: {cars.make}</p>
            <p className="model">Model: {cars.model}</p>
            <p className="year">Year Built: {cars.year}</p>
            <p className="vin">VIN: {cars.vin}</p>
            <p className="color">Color: {cars.color}</p>
            <button onClick={() => deleteCar()}>Delete</button>
          </div>
        ))}
      </div>
      <section>
        <button onClick={addCar} className="add-car">
          Add Car
        </button>
        {addingCar && (
          <CarForm
            user={user}
            getUsersCars={getUsersCars}
            userCarList={userCarList}
          />
        )}
      </section>
    </div>
  )
}

export default User
