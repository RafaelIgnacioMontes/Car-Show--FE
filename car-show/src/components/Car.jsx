import { Link } from 'react-router-dom'

const Car = ({ carList, navigate, handleClick }) => {
  return (
    <div>
      <h1 className="Title"> Car Collection </h1>

      {carList.map((cars) => (
        <div className="Car-Card" key={cars.id}>
          <Link to={`/${cars.id}/CarDetails`}>
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
