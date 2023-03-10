import Car from './Car'
import { useEffect } from 'react'

const Home = ({ carList, getAllCars }) => {
  useEffect(() => {
    getAllCars()
  }, [])

  return (
    <div>
      <Car carList={carList} />
      <div className="cool-car-logo">
        <img src="https://www.freepnglogos.com/uploads/zent-logo-png-car-22.png" />
      </div>
    </div>
  )
}

export default Home
