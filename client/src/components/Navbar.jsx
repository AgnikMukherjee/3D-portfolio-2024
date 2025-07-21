import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <Link className="nav-link" to="#home">
          Home
        </Link>
      </li>
      <li className="nav-li">
        <Link className="nav-link" to="#about">
          About
        </Link>
      </li>
      <li className="nav-li">
        <Link className="nav-link" to="#work">
          Work
        </Link>
      </li>
      <li className="nav-li">
        <Link className="nav-link" to="#contact">
          Contact
        </Link>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
      <div className='mx-auto c-space max-w-7xl'>
        <div className='flex items-center justify-between py-2'>
          <Link to='/' className='text-xl font-bold transition-colors text-neutral-400 hover:text-white' >Agnik</Link>


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