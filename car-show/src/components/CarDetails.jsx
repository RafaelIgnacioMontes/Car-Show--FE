import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CarDetails = () => {
  let { id } = useParams()
  const [carDetails, setCarDetails] = useState()
  const [isLoaded, setIsLoaded] = useState(false)

  const getCarDetails = async () => {
    const carDeets = await axios.get(`http://localhost:3001/cars/car/${id}`)
    setCarDetails(carDeets.data)
    setIsLoaded(true)
  }
  console.log(id)
  useEffect(() => {
    getCarDetails()
  }, [])

  if (isLoaded) {
    return (
      <>
        <h1>This Car</h1>
        <div className="carcard">
          <img src={carDetails.image}></img>
          <p>{carDetails.make}</p>
          <p>{carDetails.model}</p>
          <p>{carDetails.year}</p>
          <p>{carDetails.color}</p>
          <p>{carDetails.vin}</p>
        </div>
      </>
    )
  }
}

export default CarDetails
