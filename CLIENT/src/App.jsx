import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Upload from './components/Upload'
import SecureUpload from './components/SecureUpload'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/secure-upload' element={<SecureUpload/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App