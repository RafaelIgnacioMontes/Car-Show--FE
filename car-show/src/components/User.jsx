import { useEffect, useState } from 'react'
import CarForm from './CarForm'
import axios from 'axios'
import { Link } from 'react-router-dom'

const User = ({ user, userCarList, getUsersCars}) => {

  const [addingCar, setAddingCar] = useState(false)

  useEffect(() => {
    getUsersCars()
  }, [])

  const addCar = () => {
    setAddingCar((current) => !current)
  }
  
  return (
    <div>
      <h1>Your Collection</h1>
      <div>
        {userCarList.map((cars) => (
          <div className="User-Car-Card">
            <img src={cars.image} alt="car image" />
            <p className="make">Make: {cars.make}</p>
            <p className="model">Model: {cars.model}</p>
            <p className="year">Year Built: {cars.year}</p>
            <p className="vin">VIN: {cars.vin}</p>
            <p className="color">Color: {cars.color}</p>
          </div>
        ))}
      </div>
      <section> 
        <button onClick={addCar} className='add-car'>Add Car</button>
        {addingCar && <CarForm user={user} getUsersCars={getUsersCars} userCarList={userCarList}/>}
        </section>
    </div>
  )
}

export default User
