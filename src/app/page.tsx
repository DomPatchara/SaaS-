import React from 'react'
import Navbar from '@/section/Navbar'
import Hero from '@/section/Hero'
import LogoTicker from '@/section/LogoTicker'
import Introduction from '@/section/Introduction'
import Features from '@/section/Features'
import Integrations from '@/section/Integrations'
import Faqs from '@/section/Faqs'
import CallToAction from '@/section/CallToAction'
import Footer from '@/section/Footer'

const page = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <LogoTicker/>
      <Introduction/>
      <Features/>
      <Integrations/>
      <Faqs/>
      <CallToAction/>
      <Footer/>
    </>
  )
}

export default page