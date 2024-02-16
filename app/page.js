import React from 'react'
import styles from './page.module.scss'
import MoneyChartSection from '@/components/MoneyChartSection/MoneyChartSection'
import FeaturesSection from '@/components/FeaturesSection/FeaturesSection'
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection'
import GetStartedSection from '@/components/GetStartedSection/GetStartedSection'
import HeroSection from '@/components/HeroSection/HeroSection'

const page = () => {
  return (
    <main>
      {/* <h2 style={{margin: '3rem 0', textAlign: 'center'}}>Home</h2> */}
      <HeroSection />
      <MoneyChartSection />
      <FeaturesSection />
      <TestimonialsSection />
      <GetStartedSection />
    </main>
  )
}

export default page