import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import CommentForm from './CommentForm'

const CarDetails = ({ user }) => {
  let { id } = useParams()
  let navigate = useNavigate()
  const [carDetails, setCarDetails] = useState()
  const [isLoaded, setIsLoaded] = useState(false)

  const getCarDetails = async () => {
    const carDeets = await axios.get(`http://localhost:3001/cars/car/${id}`)
    setCarDetails(carDeets.data)
    setIsLoaded(true)
    console.log(carDeets)
  }

  const deleteCar = async () => {
    const response = await axios.delete(
      `http://localhost:3001/cars/delete/${id}`
    )
    navigate('/')
  }
  useEffect(() => {
    getCarDetails()
  }, [])

  let userOptions
  if (user) {
    userOptions = (
      <div>
      <CommentForm
        carDetails={carDetails}
        user={user}
        getCarDetails={getCarDetails}
        />
      </div>
    )}
    const publicOptions = (
        <div></div>
      )

  if (isLoaded) {
    return (
      <div>
        <h1>{carDetails.make} {carDetails.model}</h1>
        <div className="carcard">
          <img src={carDetails.image} alt={'car image'}></img>
          <button onClick={() => deleteCar()}>Delete</button>
          <p>Make: {carDetails.make}</p>
          <p>Model: {carDetails.model}</p>
          <p>Year: {carDetails.year}</p>
          <p>Color: {carDetails.color}</p>
          <p>VIN: {carDetails.vin}</p>
          <div>
            <h5>Comments</h5>
            {carDetails.comments.map((comment) => (
            <div>
                {comment.car.userName} :{comment.content}
                </div>
            ))}
            </div>
            <div>
          {user ? userOptions: publicOptions}    
          </div>
        </div>
      </div>
    )
  }
}

export default CarDetails
