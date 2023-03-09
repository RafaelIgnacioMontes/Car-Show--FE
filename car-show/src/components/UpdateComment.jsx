import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Client from '../services/api'

const UpdateComment = ({ comment, getCarDetails, token }) => {
  console.log(comment)

  const [updateComment, setUpdateComment] = useState({
    content: ''
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
      `http://localhost:3001/comment/update/${comment.id}`,
      updateComment
    )
    getCarDetails()
  }

  return (
    <div className="comment-form-container">
      <form onSubmit={handleSubmitUpdate} className="comment-form">
        <label htmlFor="content">Comments</label>
        <textarea
          type="text"
          id="content"
          cols="80"
          rows="2"
          onChange={handleChangeUpdate}
          value={updateComment.content}
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default UpdateComment
