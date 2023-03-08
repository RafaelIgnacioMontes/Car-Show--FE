import { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const UpdateComment = ({ comment }) => {
  const { commentId } = useParams()

  let navigate = useNavigate()

  const [updateComment, setUpdateComment] = useState()

  // useEffect(() => {
  //   const getComment = async () => {
  //     const response = await axios.get(
  //       `http://localhost:3001/comment/${commentId}`
  //     )
  //     setUpdateComment(response.data.content)
  //     console.log(response.data.content)
  //   }
  //   getComment()
  // }, [commentId])

  const handleChangeUpdate = (event) => {
    setUpdateComment({
      ...updateComment,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmitUpdate = async (event) => {
    event.preventDefault()
    console.log(event.target)

    await axios.put(
      `http://localhost:3001/comment/update/${commentId}`,
      updateComment
    )
    navigate('/cars')
  }

  return (
    <div className="comment-form-container">
      <form onSubmit={handleSubmitUpdate} className="comment-form">
        <label htmlFor="content">Comments</label>
        <textarea
          type="text"
          id="content"
          cols="30"
          rows="8"
          onChange={handleChangeUpdate}
          // value={updateComment.content}
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default UpdateComment
