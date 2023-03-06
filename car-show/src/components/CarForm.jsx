import { useState } from 'react'
import axios from 'axios'
import Home from './Home'

const BASE_URL = `http://localhost:3001/`

const CarForm = (props) => {
  const initialState = {
    make: '',
    model: '',
    year: '',
    vin: '',
    image: '',
    color: ''
  }

  const [formState, setFormState] = useState(initialState)
  const [car, setCar] = useState()

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
    setCar(formState.car)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${BASE_URL}cars/newcar`, formState)
    setFormState(initialState)
  }

  return (
    <div className="car-form-container">
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
        <textarea
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
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default CarForm
