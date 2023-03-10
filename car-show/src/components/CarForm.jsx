import { useState } from 'react'
import Client from '../services/api'

const BASE_URL = `http://localhost:3001/`

const CarForm = ({ user, getUsersCars, userCarList }) => {

  let userId = user.id

  const initialState = {
    make: '',
    model: '',
    year: '',
    vin: '',
    image: '',
    color: '',
    userId
  }
  
  const [formState, setFormState] = useState(initialState)
  const [car, setCar] = useState()

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
    setCar(formState.car)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.post(`${BASE_URL}cars/newcar`, formState)
    setFormState(initialState)
    getUsersCars()
  }

  return (
    <div className="car-form-container">
      <div className='carForm'>
      <form onSubmit={handleSubmit} className="car-form">
        <label htmlFor="make">Make: </label>
        <input
          type="text"
          id="make"
          onChange={handleChange}
          value={formState.make}
          />
        <label htmlFor="model">Model: </label>
        <input
          type="text"
          id="model"
          onChange={handleChange}
          value={formState.model}
          />
        <label htmlFor="year">Year: </label>
        <input
          type="text"
          id="year"
          onChange={handleChange}
          value={formState.year}
          />
        <label htmlFor="vin">VIN Number: </label>
        <input
          type="text"
          id="vin"
          onChange={handleChange}
          value={formState.vin}
          />
        <label htmlFor="image">
          Image URL: 
        </label>
        <input
          type="text"
          id="image"
          onChange={handleChange}
          value={formState.image}
          />
        <label htmlFor="color">Car Color: </label>
        <input
          type="text"
          id="color"
          onChange={handleChange}
          value={formState.color}
          />
        <button className="carForm-button" type="submit">
          Submit
        </button>
      </form>
      </div>
    </div>
  )
}

export default CarForm
