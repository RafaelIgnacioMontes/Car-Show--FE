
import { useEffect } from "react"
const User = ({ user, userCarList, getUsersCars }) => {

  useEffect(() => {
    getUsersCars()
  }, [])
  return (
    <div>
      <h1>Test</h1>
      <div>
        {userCarList.map((cars) => (
          <div className="User-Car-Card">
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
