// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
import Car from './Car'
import Comment from './Comment'

const Home = ({ carList }) => {
  return (
    <div>
      <Car carList={carList} />
    </div>
  )
}

export default Home
