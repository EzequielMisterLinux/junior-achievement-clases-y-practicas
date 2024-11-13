import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeHeader from './pages/HomeHeader'
import HomeEmploye from './pages/HomeEmploye'
import UserPage from './pages/UserPage'

export default function App() {
  return (
    <>
    <HomeHeader/>
    
    <div>
    <Routes>
    <Route path="/employees" element={<HomeEmploye/>}/>
    <Route path="/users" element={<UserPage/>}/>
    </Routes>
    </div>

    </>
  )
}
