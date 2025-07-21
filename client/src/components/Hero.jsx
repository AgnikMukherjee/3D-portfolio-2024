import React from 'react'
import HeroText from '../secondary-components/Herotext'
import ParallaxBackground from '../secondary-components/ParallaxBackground'

const Hero = () => {
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
        <HeroText/>
        <ParallaxBackground/>
    </section>
  )
}

export default Hero