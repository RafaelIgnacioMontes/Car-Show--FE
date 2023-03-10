import { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Client from '../services/api'

const UpdateComment = ({ commentId, getCarDetails, content, clicky }) => {

  const [updateComment, setUpdateComment] = useState({
    content: content
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
      `http://localhost:3001/comment/update/${commentId}`,
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
          placeholder={content}
          onChange={handleChangeUpdate}
          value={updateComment.content}
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
