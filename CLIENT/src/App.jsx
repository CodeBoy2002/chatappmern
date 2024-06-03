import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/Signup/SignUp'
import { Toaster } from 'react-hot-toast'

import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App