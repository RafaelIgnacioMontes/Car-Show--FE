import { useState, useEffect } from 'react'
import axios from 'axios'
import Comment from './Comment'
import CommentForm from './CommentForm'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Car = ({ carList, navigate }) => {
  return (
    <div>
      <h1 className="Title"> Car Collection </h1>

      {carList.map((cars) => (
        <div className="Car-Card">
          <Link to="/CarDetails/:car_id">
            <img src={cars.image} alt="car image" />
          </Link>
          <div>{/* <CommentForm /> */}</div>
        </div>
      ))}
    </div>
  )
}

export default Car
