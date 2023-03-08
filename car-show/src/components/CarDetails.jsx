import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CommentForm from './CommentForm'
import UpdateComment from './UpdateComment'

const CarDetails = ({ user, userCarList }) => {
  let { id } = useParams()
  const [showResults, setShowResults] = useState(false)
  const clicky = () => {
    setShowResults(true)
  }
  const [carDetails, setCarDetails] = useState()
  const [isLoaded, setIsLoaded] = useState(false)

  const getCarDetails = async () => {
    const carDeets = await axios.get(`http://localhost:3001/cars/car/${id}`)
    setCarDetails(carDeets.data)
    setIsLoaded(true)
  }
  const deleteComment = async (e, commentId) => {
    e.preventDefault()
    await axios.delete(`http://localhost:3001/comment/delete/${commentId}`)
    getCarDetails()
  }
  useEffect(() => {
    if (user){

  
    getCarDetails()
  }, [user])

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
    )
  }
  const publicOptions = <div></div>

  if (isLoaded) {
    return (
      <div>
        <h1>
          {carDetails.make} {carDetails.model}
        </h1>
        <div className="carcard">
          < img src={carDetails?.image} alt={carDetails?.model}></img>
          <button onClick={(e) => deleteCar(e)}>Delete</button>
          <p>{carDetails?.make}</p>
          <p>{carDetails?.model}</p>
          <p>{carDetails?.year}</p>
          <p>{carDetails?.color}</p>
          <p>{carDetails?.vin}</p>
          <div>
            <h5>Comments</h5>
            {carDetails.comments.map((comment) => (
              <div>
                {comment.car.userName}:{comment.content}
                {user?.id === comment?.userId && (
                  <button onClick={(e) => deleteComment(e, comment.id)}>
                    Delete
                  </button>
                )}
                <div>
                  {user?.id === comment?.userId && (
                    <UpdateComment
                      comment={comment}
                      getCarDetails={getCarDetails}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div>{user ? userOptions : publicOptions}</div>
        </div>
      </>
    )
  }
}

export default CarDetails
