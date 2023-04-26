import React, {useState} from 'react'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import axios from 'axios'


 const AuthPage = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </BrowserRouter>
  )
}


export default AuthPage