import { Link } from 'react-router-dom'

const Car = ({ carList }) => {
  return (
    <div className="generalpage">
      <h1 className="Title"> Car Collection </h1>
      <div className="column1">
        {carList.map(
          (cars, index) =>
            index % 2 == 0 && (
              <div className="Car-Card">
                <Link to={`/CarDetails/${cars.id}`}>
                  <img src={cars.image} alt="car image" />
                </Link>
                <p className="make">
                  {cars.make} {cars.model}
                </p>
              </div>
            )
        )}
      </div>
      <div className="column2">
        {carList.map(
          (cars, index) =>
            index % 2 != 0 && (
              <div className="Car-Card">
                <Link to={`/CarDetails/${cars.id}`}>
                  <img src={cars.image} alt="car image" />
                </Link>
                <p className="make">
                  {cars.make} {cars.model}
                </p>
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default Car
