import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CommentForm from './CommentForm'
import UpdateComment from './UpdateComment'
import Client from '../services/api'
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
  console.log(carDetails)
  const deleteComment = async (e, commentId) => {
    e.preventDefault()
    await Client.delete(`http://localhost:3001/comment/delete/${commentId}`)
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
      <div className="wholepage">
        <h1 className="detailsheader">
          {carDetails.make} {carDetails.model}
        </h1>
        <div className="thecar">
          <img
            src={carDetails?.image}
            alt={'car'}
            className="picture"
          ></img>
          <div className="fontbackground">
            <p>Owner: {carDetails?.owner?.userName}</p>
          </div>
          <div className="fontbackground">
            <p>Make: {carDetails?.make}</p>
          </div>
          <div className="fontbackground">
            <p>Model: {carDetails?.model}</p>
          </div>
          <div className="fontbackground">
            <p>Year: {carDetails?.year}</p>
          </div>
          <div className="fontbackground">
            <p>Color: {carDetails?.color}</p>
          </div>
          <div className="fontbackground">
            <p>VIN: {carDetails?.vin}</p>
          </div>
          <div class="commentsedit">
            <h3 class="commentTxt">Comments</h3>
            {carDetails.comments.map((comment) => (
              <div class="commentSection">
                {comment.car.userName}:{comment.content}
                {user?.id === comment?.userId && (
                  <div>
                    <button class="commentDelete-btn" onClick={(e) => deleteComment(e, comment.id)}>
                      Delete
                    </button>
                    <button class="updateComment-btn" onClick={() => clicky()}>Update</button>
                  </div>
                )}
                <div>
                  <div></div>
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
