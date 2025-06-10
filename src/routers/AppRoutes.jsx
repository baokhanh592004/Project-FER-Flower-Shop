import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layouts from '../layouts/Layouts'
import Orchids from '../pages/Orchids'
import About from '../pages/About' 
import App from '../App'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layouts />}>
        {/* You can use App or Orchids here */}
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}
