import { useState, useEffect } from 'react'
import axios from 'axios'

const Car = (response) => {
  const [carList, setCarList] = useState([])
  const [comments, setComments] = useState([])
  const getAllCars = async () => {
    const response = await axios.get('http://localhost:3001/cars/all')
    setCarList(response.data)
    console.log(response)
  }
  const getAllComments = async (comments) => {
    const response = await axios.get('http://localhost:3001/comment/all')
    setComments(response.data.comments)
  }

  useEffect(() => {
    getAllCars()
  }, [])
  return (
    <div>
      <h1 className="Title"> Car Collection </h1>

      {carList.map((cars) => (
        <div className="Car-Card">
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
  )
}

export default Car
