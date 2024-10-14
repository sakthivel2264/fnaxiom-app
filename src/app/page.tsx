import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='bg-hero-bg'>
      <Navbar/>
      <HeroSection/>
    </div>
  )
}

export default page