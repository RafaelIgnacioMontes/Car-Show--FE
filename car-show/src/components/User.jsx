import axios from 'axios'
import { useEffect, useState, useParams } from 'react'
import CarForm from './CarForm'

const User = ({ user, userCarList, getUsersCars }) => {

  const [addingCar, setAddingCar] = useState(false)

  useEffect(() => {
    getUsersCars()
  }, [])

  const addCar = () => {
    setAddingCar((current) => !current)
  }

  userCarList.map((cars) => {

    const handleDelete = async () => {
      await axios.delete(
        `http://localhost:3001/cars/delete/${cars.id}`
        )
        getUsersCars()
      }
      return (
        <div>
      <h1>Your Collection</h1>
      <div>
          <div className="User-Car-Card">
            <img src={cars.image} alt="car image" />
            <p className="make">Make: {cars.make}</p>
            <p className="model">Model: {cars.model}</p>
            <p className="year">Year Built: {cars.year}</p>
            <p className="vin">VIN: {cars.vin}</p>
            <p className="color">Color: {cars.color}</p>
            <button className='delete'onClick={()=>handleDelete(cars.id)}>Delete</button>
          </div>
      </div>
      <section> 
        <button onClick={addCar} className='add-car'>Add Car</button>
        {addingCar && <CarForm user={user} getUsersCars={getUsersCars} userCarList={userCarList}/>}
        </section>
    </div>
  )
})
}

export default User
