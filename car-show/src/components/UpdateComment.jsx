import { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Client from '../services/api'

const UpdateComment = ({ comment, commentsId, getCarDetails, clicky }) => {
  console.log(comment)

  const [updateComment, setUpdateComment] = useState({
    content: comment.content
  })

  const handleChangeUpdate = (event) => {
    setUpdateComment({
      ...updateComment,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmitUpdate = async (event) => {
    event.preventDefault()
    await Client.put(
      `http://localhost:3001/comment/update/${comment.Id}`,
      updateComment
    )
    getCarDetails()
    clicky()
  }

  return (
    <div className="comment-form-container">
      <form onSubmit={handleSubmitUpdate} className="comment-form">
        <label htmlFor="content">Update Your Comment</label>
        <textarea
          type="text"
          id="content"
          cols="80"
          rows="2"
          placeholder={comment.content}
          onChange={handleChangeUpdate}
          // value={updateComment.content}
        />
        <div class="center-submit">
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateComment
