import { useState, useEffect } from 'react'
import axios from 'axios'

const Car = () => {
  const [carList, setCarList] = useState([])
  const getAllCars = async () => {
    let response = await axios.get('http://localhost:3001/cars/all')
    setCarList(response.data)
  }
  // const [comments, setComments] = useState([])

  // const getAllComments = async (comments) => {
  //   const response = await axios.get('http://localhost:3001/comment/all')
  //   setComments(response.data)
  //   console.log(response)
  // }

  useEffect(() => {
    getAllCars()
  }, [])
  return (
    <div>
      <h1 className="Title"> Car Collection </h1>
      <div>
        {carList.map((response) => (
          <div className="Car-Card">
            <img src={response.image} alt="car pic" />
            <p className="make">Make:{response.make}</p>
            <p className="model">Model:{response.model}</p>
            <p className="year">Year Built:{response.year}</p>
            <p className="vin">VIN: {response.vin}</p>
            <p className="color">Color: {response.color}</p>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Car
