import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
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

  const updateComment = async (e, commentId) => {
    e.preventDefault()
     await axios.delete(
      `http://localhost:3001/update/${commentId}`
    )
    navigate('/')
  }

  // console.log(carDetails.comments)

  useEffect(() => {
    if (user){

  
    getCarDetails()
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    )}
    const publicOptions = (
        <div></div>
      )

  if (isLoaded) {
    return (
      <>
        <h1>This Car</h1>
        <div className="carcard">
          < img src={carDetails?.image} alt={carDetails?.model}></img>
          <button onClick={(e) => deleteCar(e)}>Delete</button>
          <p>{carDetails?.make}</p>
          <p>{carDetails?.model}</p>
          <p>{carDetails?.year}</p>
          <p>{carDetails?.color}</p>
          <p>{carDetails?.vin}</p>
          <div>
           
            {carDetails?.comments?.map((comment) => (
              <div>
                {/* <button onClick={(e)=> updateComment(e)}>Update Comment </button> */}
                {comment.car.userName}: {comment.content}
                {user?.id === comment?.userId && (
                <div>
                <button>delete</button>


                <Link to={`/update/${comment._id}/updateComment`}>
                    <button className='addReview-btn'>Add Review</button>
                </Link>

                <button onClick={() => {updateComment()}}>Update</button>
                
                
                </div>
              )}
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
