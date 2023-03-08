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

  if (isLoaded) {
    return (
      <div>
        <h1>This Car</h1>
        <div className="carcard">
          <img src={carDetails.image} alt={'car image'}></img>
          <button onClick={() => deleteCar()}>Delete</button>
          <p>{carDetails.make}</p>
          <p>{carDetails.model}</p>
          <p>{carDetails.year}</p>
          <p>{carDetails.color}</p>
          <p>{carDetails.vin}</p>
          <CommentForm carDetails={carDetails} />
          <div>
            <CommentForm
              carDetails={carDetails}
              user={user}
              getCarDetails={getCarDetails}
            />
            {carDetails.comments.map((comment) => (
              <div>
                {comment.car.userName} :{comment.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default CarDetails
