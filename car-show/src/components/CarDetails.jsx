import { useEffect, useState } from 'react'

const CarDetails = ({ carDetails }) => {
  useEffect(() => {
    // getCarDetails()
  }, [])
  return (
    <>
      <h1>This Car</h1>
      <div className="carcard"></div>
    </>
  )
}

export default CarDetails
