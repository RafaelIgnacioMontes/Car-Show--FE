import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import About from './components/About'
import SignIn from './components/SignIn'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register/" element={<Register />} />
          <Route path="/about/" element={<About />} />
          <Route path="/signIn/" element={<SignIn />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
