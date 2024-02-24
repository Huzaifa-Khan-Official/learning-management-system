import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Admissionform from '../Pages/Admissionform'

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/admissionform' element={<Admissionform />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}