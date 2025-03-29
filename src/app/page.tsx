import React from 'react'
import Navbar from '@/section/Navbar'
import Hero from '@/section/Hero'
import LogoTicker from '@/section/LogoTicker'
import Introduction from '@/section/Introduction'
import Features from '@/section/Features'
import Intregrations from '@/section/Intregrations'

const page = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <LogoTicker/>
      <Introduction/>
      <Features/>
      <Intregrations/>
    </>
  )
}

export default page