import React from 'react'
import LoginAndRegister from './components/loginAndRegister'
import { Toaster } from "react-hot-toast"
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/' element={<LoginAndRegister/>} />
      </Routes>

      <Toaster />
    </div>
  )
}

export default App