import React from 'react'
import LoginAndRegister from './components/loginAndRegister'
import { Toaster } from "react-hot-toast"
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import { useAuthContext } from './context/AuthContext'
import "./App.css"

const App = () => {

  const { authUser } = useAuthContext()
  // console.log(authUser)

  return (
    <div className='bg-black'>
      <Routes>
        <Route exact path='/home' element={authUser ? <Home /> : <Navigate to="/" />} />
        <Route exact path='/' element={authUser ? <Navigate to="/home" /> : <LoginAndRegister />} />
      </Routes>  

      <Toaster />
    </div>
  )
}

export default App