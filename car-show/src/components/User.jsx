import { useEffect } from 'react'
import CarForm from './CarForm'
const User = ({ user, userCarList, getUsersCars }) => {
  
  useEffect(() => {
    getUsersCars()
  }, [])

  return (
    <div>
      <h1>Your Collection</h1>
      <div>
        {userCarList.map((cars) => (
          <div className="User-Car-Card">
            <img src={cars.image} alt="car image" />
            <p className="make">Make:{cars.make}</p>
            <p className="model">Model:{cars.model}</p>
            <p className="year">Year Built:{cars.year}</p>
            <p className="vin">VIN: {cars.vin}</p>
            <p className="color">Color: {cars.color}</p>
          </div>
        ))}
      </div>
      <section> 
        <h3>Add a Car</h3>
        <CarForm user={user}/>
        </section>
    </div>
  )
}

export default User
