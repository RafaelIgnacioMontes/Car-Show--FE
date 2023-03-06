import Header from './components/Header'
import './App.css'

import Home from './components/Home'
import Register from './components/Register'
import About from './components/About'
import SignIn from './components/SignIn'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/register/" element={<Register />} />
          <Route path="/signIn/" element={<SignIn />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
