import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">neXetlab</h2>
          <p className="text-sm max-w-xs">
            Empowering your business with innovative IT solutions, websites, and
            digital branding.
          </p>
        </div>
        <nav className="flex space-x-6 mb-6 md:mb-0 text-sm font-semibold">
          <a
            href="/"
            className="hover:underline hover:text-gray-200 transition"
          >
            Home
          </a>
          <a
            href="/services"
            className="hover:underline hover:text-gray-200 transition"
          >
            Services
          </a>
          <a
            href="/about"
            className="hover:underline hover:text-gray-200 transition"
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:underline hover:text-gray-200 transition"
          >
            Contact
          </a>
        </nav>
        <div className="text-sm text-center md:text-right">
          <p>© {new Date().getFullYear()} NexetLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
