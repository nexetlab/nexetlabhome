import React from 'react'
import { motion } from 'framer-motion'
import Slider from './Slider'

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto">
      <div className="md:w-1/2 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6 text-blue-700"
        >
          We Build Smart IT Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg text-gray-600 mb-6"
        >
          NexetLab helps businesses grow with cutting-edge software, websites,
          and landing pages.
        </motion.p>
        <a
          href="/contact"
          className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition"
        >
          Contact Us
        </a>
      </div>
      <div className="md:w-1/2">
        <Slider />
      </div>
    </section>
  )
}
