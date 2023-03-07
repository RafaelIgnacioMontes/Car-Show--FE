import { useState, useEffect } from 'react'
import axios from 'axios'
import CommentForm from './CommentForm'

const Comment = ({ carList }) => {
  // const [comments, setComments] = useState([])
  // const getAllCommentsForCar = async () => {
  //   const response = await axios.get(`http://localhost:3001/comment/all/${}`)
  //   console.log(response.data.content)
  //   setComments(response.data.content)
  // }

  // useEffect(() => {
  //   getAllCommentsForCar()
  // }, [])

  return (
    <div>
      <section>
        Comments:
      </section>
    </div>

    )
}

export default Comment