import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CommentForm from './CommentForm'
import UpdateComment from './UpdateComment'

const CarDetails = ({ user }) => {
  let { id } = useParams()
  const [showResults, setShowResults] = useState(false)
  const clicky = () => {
    setShowResults((current) => !current)
  }
  const [carDetails, setCarDetails] = useState()
  const [isLoaded, setIsLoaded] = useState(false)
  const [updating, setUpdating] = useState(false)

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
          <img src={carDetails?.image} alt={'car image'}></img>
          <p>Make: {carDetails?.make}</p>
          <p>Model: {carDetails?.model}</p>
          <p>Year: {carDetails?.year}</p>
          <p>Color: {carDetails?.color}</p>
          <p>VIN: {carDetails?.vin}</p>
          <div>
            <h5>Comments</h5>
            {carDetails.comments.map((comment) => (
              <div>
                {comment.car.userName}:{comment.content}
                {user?.id === comment?.userId && (
                  <div>
                  <button onClick={(e) => deleteComment(e, comment.id)}>
                    Delete
                  </button>
                  <button onClick={()=> clicky()}>Update</button>
                  </div>
                )}
                <div>
                  {showResults && (
                    <UpdateComment
                    comment={comment}
                    getCarDetails={getCarDetails}
                    clicky={clicky}
                    />
                    )}
                </div>
              </div>
            ))}
          </div>
          <div>{user ? userOptions : publicOptions}</div>
        </div>
      </div>
    )
  }
}

export default CarDetails
