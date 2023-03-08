import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const BASE_URL = `http://localhost:3001/`

const CommentForm = ({ carDetails, user, getCarDetails }) => {
  let { id } = useParams()
  let userId = user.id

  console.log(userId)
  const initialState = {
    userId,
    content: ''
  }
  console.log(id)
  const [formState, setFormState] = useState(initialState)
  const [comment, setComment] = useState()

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
    setComment(formState.comment)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(
      `${BASE_URL}comment/newcomment/${carDetails.id}`,
      formState
    )
    setFormState(initialState)
    getCarDetails()
  }

  return (
    <div className="comment-form-container">
      <form onSubmit={handleSubmit} className="comment-form">
        <label htmlFor="content">Comments</label>
        <textarea
          type="text"
          id="content"
          cols="30"
          rows="8"
          onChange={handleChange}
          value={formState.content}
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default CommentForm
