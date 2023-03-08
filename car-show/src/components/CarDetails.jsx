import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import CommentForm from './CommentForm'

const CarDetails = ({ user, userCarList }) => {
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

  const deleteCar = async (e) => {
    e.preventDefault()
     await axios.delete(
      `http://localhost:3001/cars/delete/${id}`
    )
    navigate('/')
  }

  const deleteComment = async (e) => {
    e.preventDefault()
     await axios.delete(
      `http://localhost:3001/delete/${carDetails.comments.id}`
    )
    navigate('/')
  }

  // console.log(carDetails.comments)

  useEffect(() => {
    if (user){

  
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
      <>
        <h1>This Car</h1>
      <div>
        <h1>{carDetails.make} {carDetails.model}</h1>
        <div className="carcard">
          < img src={carDetails?.image} alt={carDetails?.model}></img>
          <button onClick={(e) => deleteCar(e)}>Delete</button>
          <p>{carDetails?.make}</p>
          <p>{carDetails?.model}</p>
          <p>{carDetails?.year}</p>
          <p>{carDetails?.color}</p>
          <p>{carDetails?.vin}</p>
          <img src={carDetails.image} alt={'car image'}></img>
          <button onClick={() => deleteCar()}>Delete</button>
          <p>Make: {carDetails.make}</p>
          <p>Model: {carDetails.model}</p>
          <p>Year: {carDetails.year}</p>
          <p>Color: {carDetails.color}</p>
          <p>VIN: {carDetails.vin}</p>
          <div>
            <CommentForm
              carDetails={carDetails}
              user={user}
              getCarDetails={getCarDetails}
            />
            {carDetails?.comments?.map((comment) => (
              <div>

                {/* <button onClick={(e)=> deleteComment(e)}>Delete </button> */}
                {comment.car.userName}: {comment.content}

        
              </div>
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
      </>
    )
  }
}

export default CarDetails
