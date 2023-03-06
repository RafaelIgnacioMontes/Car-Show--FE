import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Register from './components/Register'

import Home from './components/Home'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
