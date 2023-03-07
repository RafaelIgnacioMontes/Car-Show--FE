import { useState } from 'react'
import axios from 'axios'

const BASE_URL = `http://localhost:3001/`

const CommentForm = (props) => {
  const initialState = {
    content: ''
  }

  const [formState, setFormState] = useState(initialState)
  const [comment, setComment] = useState()

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
    setComment(formState.comment)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${BASE_URL}comment/newcomment`, formState)
    setFormState(initialState)
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
          Add Comment
        </button>
      </form>
    </div>
  )
}

export default CommentForm
