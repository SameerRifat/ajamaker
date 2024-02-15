import React from 'react'
import styles from './page.module.scss'
import MoneyChartSection from '@/components/MoneyChartSection/MoneyChartSection'
import FeaturesSection from '@/components/FeaturesSection/FeaturesSection'
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection'

const page = () => {
  return (
    <main>
      <h2 style={{margin: '3rem 0', textAlign: 'center'}}>Home</h2>
      <MoneyChartSection />
      <FeaturesSection />
      <TestimonialsSection />
    </main>
  )
}

export default page