import React from 'react'

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">NexetLab</div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#hero" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
