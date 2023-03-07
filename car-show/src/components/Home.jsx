// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
import Car from './Car'
import Comment from './Comment'

const Home = ({ carList, handleClick }) => {
  return (
    <div>
      <Car carList={carList} handleClick={handleClick} />
    </div>
  )
}

export default Home
