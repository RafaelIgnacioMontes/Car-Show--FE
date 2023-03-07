import { Link } from 'react-router-dom'

const Car = ({ carList, navigate, handleClick }) => {
  return (
    <div>
      <h1 className="Title"> Car Collection </h1>

      {carList.map((cars) => (
        <div className="Car-Card">
          <Link to={`/${cars.id}/CarDetails`}>
            <img src={cars.image} alt="car image" />
          </Link>
          <p className="make">
            {cars.make} {cars.model}
          </p>
          {/* <p className="model">{cars.model}</p> */}
          {/* <p className="year">Year Built:{cars.year}</p>
          <p className="vin">VIN: {cars.vin}</p>
          <p className="color">Color: {cars.color}</p>
          <p className='comments'>{cars.comments}</p> */}
          <div></div>
        </div>
      ))}
    </div>
  )
}

export default Car
