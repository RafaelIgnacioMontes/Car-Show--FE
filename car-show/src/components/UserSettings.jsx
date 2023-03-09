import { Link } from 'react-router-dom'

const UserSettings = ({ user }) => {
  return (
    <main>
      <h1>User Settings</h1>
      <Link to="/updatePassword">
        <h2>Change Password</h2>
      </Link>
    </main>
  )
}

export default UserSettings
