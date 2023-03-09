import { Link } from 'react-router-dom'

const Car = ({ carList }) => {
  return (
    <div className='car'>
      <h1 className="Title"> Car Collection </h1>
      <div className='generalPage'>
      <div className='Car-Card'>
      <div className="column1">
        {carList.map(
          (cars, index) =>
          index % 2 == 0 && (
            <div>
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
            <div className="Car-Card2">
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
    </div>
  </div>
  )
}

export default Car
