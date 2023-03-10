import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CommentForm from './CommentForm'
import UpdateComment from './UpdateComment'
import Client from '../services/api'
const CarDetails = ({ user }) => {
  let { id } = useParams()

  const [showResults, setShowResults] = useState(null)

  const clicky = (e, commentId) => {
    e.preventDefault()
    if (!commentId) {
      setShowResults(null)
    } else setShowResults(commentId)
  }
  const antiClicky = (e) => {
    e.preventDefault()
    setShowResults(null)
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
    await Client.delete(`http://localhost:3001/comment/delete/${commentId}`)
    getCarDetails()
  }
  // let commentsId = carDetails.comments.map((comment) => comment.id)
  // console.log(commentsId)
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
          <img src={carDetails?.image} alt={'car'} className="picture"></img>
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
          <div className="commentsedit">
            <h3 className="commentTxt">Comments</h3>
            {carDetails.comments.map((comment) => (

              <div className="usercomments">

                {comment.car.userName}: {comment.content}
                {user?.id === comment?.userId && (
                  <div>
                    <button
                      className="commentDelete-btn"
                      onClick={(e) => deleteComment(e, comment.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="updateComment-btn"
                      onClick={(e) => clicky(e, comment.id)}
                    >
                      Update
                    </button>
                    <div>
                      {comment?.id === showResults && (
                        <UpdateComment
                          clicky={clicky}
                          getCarDetails={getCarDetails}
                          comment={comment}
                          antiClicky={antiClicky}
                        />
                      )}
                    </div>
                  </div>
                )}

              </div>
            ))}
            <div></div>
          </div>
          <div>{user ? userOptions : publicOptions}</div>
        </div>
      </div>
    )
  }
}
export default CarDetails
