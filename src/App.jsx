import Home from './pages/Home'
import Console from './pages/Console'
import {Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Console />} />
    </Routes>

  )
}

export default App
