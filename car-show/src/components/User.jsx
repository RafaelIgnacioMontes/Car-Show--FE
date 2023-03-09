import { useEffect, useState } from 'react'
import CarForm from './CarForm'
import Client from '../services/api'

const User = ({ user, userCarList, getUsersCars }) => {
  const [addingCar, setAddingCar] = useState(false)

  const addCar = () => {
    setAddingCar((current) => !current)
  }

  const deleteCar = async (e, carsId) => {
    e.preventDefault()
    await Client.delete(`http://localhost:3001/cars/delete/${carsId}`)
    getUsersCars()
  }

  useEffect(() => {
    getUsersCars()
  }, [user])

  return (

    <div className="yourCollectionContainer">
      <h1>Your Collection</h1>
      <div className="yourCollection">
        {userCarList.map((cars) => (
          <div className="User-Car-Card">
            <img src={cars?.image} alt="car image" />
            <p className="make">Make: {cars?.make}</p>
            <p className="model">Model: {cars?.model}</p>
            <p className="year">Year Built: {cars?.year}</p>
            <p className="vin">VIN: {cars?.vin}</p>
            <p className="color">Color: {cars?.color}</p>

          <div> 
        <button class="deleteCar-btn" onClick={(e) => deleteCar(e, cars.id)}>Delete</button>
        </div> 
          </div>
        ))}
      </div>
      <section>
      <button class="addCar-btn" onClick={addCar} >
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
