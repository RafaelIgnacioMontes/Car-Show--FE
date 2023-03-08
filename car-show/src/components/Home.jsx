// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
import Car from './Car'
import { useEffect } from 'react'

const Home = ({ carList, getAllCars }) => {
  useEffect(() => {
    getAllCars()
  }, [])

  return (
    <div>
      <Car carList={carList} />
    </div>
  )
}

export default Home
