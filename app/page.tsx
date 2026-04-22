import { AboutMeBackground } from '@/components/common/AboutMeBackground'
import { ContactSection } from '@/components/common/ContactSection'
import { Experience } from '@/components/common/Experience'
import { Footer } from '@/components/common/Footer'
import HeroSection from '@/components/common/HeroSection'
import { ProjectTestimonial } from '@/components/common/ProjectTestimonial'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full mx-auto'>
      <HeroSection/>
      <AboutMeBackground/>
      <Experience/>
      <ProjectTestimonial/>
      <ContactSection/>
      <Footer/>                  
    </div>
  )
}

export default page
