import { Link } from 'react-router-dom'

const UserSettings = ({ user }) => {
  return (
    <div class="userSettings">
    <main>

    <img
            className="about-img"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.IMYfZMOCBtw4qN3LMynzXgHaE8%26pid%3DApi&f=1&ipt=8056f548d0910a0707991fd99f6390c12daa76c0ae12b85f3d0b3e3c30a7c557&ipo=images"
            alt="security"
            ></img>

      <h1>User Registration - Reset Password</h1>
      <Link to="/updatePassword">
        <h2>CLICK HERE!</h2>
      </Link>
    </main>
    </div>
  )
}

export default UserSettings
