import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}