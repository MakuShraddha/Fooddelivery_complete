import React from 'react'
import Navbar from './vendorDashboard/Component/Component/components/Navbar'
import Home from './vendorDashboard/pages/Home'
import Login from './vendorDashboard/pages/Login'
import Register from './vendorDashboard/pages/Register'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>
  )
}
export default App
