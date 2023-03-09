import Client from '../services/api'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const ChangePasswordForm = ({ user, handleLogOut }) => {
  let navigate = useNavigate()

  let initialState = {
    userName: '',
    email: '',
    oldPassword: '',
    newPassword: ''
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(user.id)
    await Client.put(`http://localhost:3001/auth/update/${user.id}`)
    setFormValues(initialState)
    handleLogOut()
    navigate('/signin')
  }
  return (
    <div className="updatepass col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper-update">
            <label htmlFor="userName">Username</label>
            <input
              onChange={handleChange}
              name="userName"
              type="userName"
              placeholder="Username"
              value={formValues.userName}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="oldPassword">Old Password</label>
            <input
              onChange={handleChange}
              type="oldPassword"
              name="oldPassword"
              value={formValues.oldPassword}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="newPassword">New Password</label>
            <input
              onChange={handleChange}
              type="newPassword"
              name="newPassword"
              value={formValues.newPassword}
              required
            />
          </div>
          <button type="submit">Change Password</button>
        </form>
      </div>
    </div>
  )
}

export default ChangePasswordForm