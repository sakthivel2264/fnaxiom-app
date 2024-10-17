import Login from '@/components/Login'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='bg-hero-bg bg-cover bg-center min-h-screen'>
      <Navbar/>
      <Login/>
    </div>
  )
}

export default page