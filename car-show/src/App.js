import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'

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
