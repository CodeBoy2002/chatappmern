import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Upload Files using Cloudinary Service</h1>
        <Link to='/'>Home</Link> | <Link to='/upload'>Upload</Link> | <Link to='/secure-upload'>Secure Upload</Link>
        <Outlet/>
    </div>
  )
}

export default Home