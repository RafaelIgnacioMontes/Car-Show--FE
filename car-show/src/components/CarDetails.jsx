import { useEffect, useState } from 'react'

const CarDetails = ({ carDetails }) => {
  useEffect(() => {
    // getCarDetails()
  }, [])
  return (
    <>
      <h1>This Car</h1>
      <div className="carcard">{carDetails.make}</div>
    </>
  )
}

export default CarDetails
