import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ]

  return (
    <nav className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="text-white text-2xl font-bold tracking-wide hover:text-yellow-300 transition"
          >
            neXetlab
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-white font-semibold text-lg">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="relative px-3 py-2 hover:text-yellow-300 transition"
            >
              <span className="relative z-10">{name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 px-6 pb-4">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-white font-semibold text-lg hover:text-yellow-300 transition"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
