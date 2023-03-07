import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CarDetails = () => {
  const { id } = useParams()
  const [carDetails, setCarDetails] = useState()
  const [loaded, setLoaded] = useState(false)
  const getCarDetails = async (props) => {
    const carDeets = await axios.get(`http://localhost:3001/cars/car/${id}`)
    setCarDetails(carDeets.data)
  }
  useEffect(() => {
    getCarDetails()
  }, [])
  if (loaded)
    return (
      <>
        <h1>This Car</h1>
        <div className="carcard"></div>
      </>
    )
}

export default CarDetails
