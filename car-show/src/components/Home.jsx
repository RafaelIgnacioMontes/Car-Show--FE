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
