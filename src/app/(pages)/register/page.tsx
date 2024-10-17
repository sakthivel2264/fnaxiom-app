import Navbar from '@/components/Navbar'
import Register from '@/components/Register'
import React from 'react'

const page = () => {
  return (
    <div className='bg-hero-bg bg-cover bg-center min-h-screen'>
      <Navbar/>
      <Register/>
    </div>
  )
}

export default page