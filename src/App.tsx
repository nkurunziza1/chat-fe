import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SigmUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import './App.css'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './contexts/AuthContext'

const App:React.FC = () => {
  const {authUser} = useAuthContext();
  return (
    <div className=' transition-all ease-in-out duration-300'>
      <Routes>
        <Route path='/login' element={authUser ? <Navigate to={'/'} /> : <Login /> } />
        <Route path='/signup' element={authUser ? <Navigate to={'/'}/> : <SigmUp />} />
        <Route path='/*' element={authUser ? <Home /> : <Navigate to={'/login'}/>}  />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App