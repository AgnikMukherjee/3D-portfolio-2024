import { useEffect, useState } from 'react'
import { motion } from "motion/react";
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis()

function Navigation() {

  const handleClick = (e, id) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target && lenis) {
      lenis.scrollTo(target, { offset: -80 }) // adjust -80 to your navbar height
    }
  }

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home" onClick={(e) => handleClick(e, '#home')}>Home</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about" onClick={(e) => handleClick(e, '#about')}>About</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work" onClick={(e) => handleClick(e, '#work')}>Work</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact" onClick={(e) => handleClick(e, '#contact')}>Contact</a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
      <div className='mx-auto c-space max-w-7xl'>
        <div className='flex items-center justify-between py-2'>
          <a href='/' className='text-xl font-bold transition-colors text-neutral-400 hover:text-white' >Agnik</a>


          <button onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">
            <img src="assets/menu.svg" alt="" className='w-6 h-6' />
          </button>

          <nav className="hidden sm:flex">
            <Navigation />
          </nav>

        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}

    </div>
  )
}

export default Navbar