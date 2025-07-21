import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App