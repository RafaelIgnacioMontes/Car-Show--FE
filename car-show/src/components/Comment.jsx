import { useState, useEffect } from 'react'
import axios from 'axios'

const Comment = (reponse) => {
  const [comments, setComments] = useState([])

  const getAllComments = async () => {
    const response = await axios.get('http://localhost:3001/comment/all')
    setComments(reponse.data.comments)
  }

  return (
    <div></div>
  )
}

export default Comment