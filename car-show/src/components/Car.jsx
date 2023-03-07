import { useState, useEffect } from 'react'
import axios from 'axios'
import Comment from './Comment'
import CommentForm from './CommentForm'

const Car = ({ carList }) => {
  return (
    <div>
      <h1 className="Title"> Car Collection </h1>

      {carList.map((cars) => (
        <div className="Car-Card">
          <img src={cars.image} alt="car image" />
          <p className="make">Make:{cars.make}</p>
          <p className="model">Model:{cars.model}</p>
          <p className="year">Year Built:{cars.year}</p>
          <p className="vin">VIN: {cars.vin}</p>
          <p className="color">Color: {cars.color}</p>
          <div>{/* <CommentForm /> */}</div>
        </div>
      ))}
    </div>
  )
}

export default Car
