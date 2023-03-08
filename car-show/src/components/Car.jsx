import { Link } from 'react-router-dom'

const Car = ({ carList }) => {
  return (
    <div>
      <h1 className="Title"> Car Collection </h1>

      {carList.map((cars) => (
        <div className="Car-Card">
          <Link to={`/CarDetails/${cars.id}`}>
            <img src={cars.image} alt="car image" />
          </Link>
          <p className="make">
            {cars.make} {cars.model}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Car