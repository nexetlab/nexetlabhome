import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'

import ishraqImg from '../assets/ishraq.jpg'
import tanzinImg from '../assets/tanzin.jpg'
import jisanImg from '../assets/jisan.jpg'

export default function About() {
  return (
    <section className="pt-[80px] max-w-6xl mx-auto space-y-12 px-6 pb-20 bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 min-h-screen">
      {/* Company Description */}
      <div className="text-center text-white space-y-6">
        <h2 className="text-4xl font-bold">About neXetlab</h2>
        <p className="text-lg leading-relaxed">
          neXetlab is a forward-thinking IT company specializing in software
          development, website creation, and digital solutions. Our team of
          expert developers and designers are passionate about helping
          businesses grow with modern technology.
        </p>

        {/* Animated About Image */}
        <motion.img
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80"
          alt="Team working"
          className="rounded-lg shadow-lg mx-auto border-4 border-white"
          style={{ maxHeight: 300, objectFit: 'cover' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        <p>
          We believe in delivering quality, innovation, and exceptional customer
          service.
        </p>
      </div>

      {/* Auto-Sliding Team Section */}
      <div>
        <h3 className="text-3xl text-white font-semibold text-center mb-8">
          Meet Our Team
        </h3>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="max-w-xl mx-auto"
        >
          {/* Ishraq */}
          <SwiperSlide>
            <motion.div
              className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg text-white text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={ishraqImg}
                alt="Ishraq Ul Alam"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-white"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 200 }}
              />
              <h4 className="text-2xl font-bold mb-1">Ishraq Ul Alam</h4>
              <p className="text-pink-200 font-medium mb-2">Founder and CTO</p>
              <p>
                Ishraq leads the technical vision of neXetlab. With a deep
                passion for software architecture and innovation, he ensures our
                products are scalable, efficient, and future-ready.
              </p>
            </motion.div>
          </SwiperSlide>

          {/* Tanzin */}
          <SwiperSlide>
            <motion.div
              className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg text-white text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={tanzinImg}
                alt="Tanzin Abdul"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-white"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 200 }}
              />
              <h4 className="text-2xl font-bold mb-1">Tanzin Abdul</h4>
              <p className="text-pink-200 font-medium mb-2">
                Co-founder and CEO
              </p>
              <p>
                Tanzin drives the company vision and strategy. With strong
                business acumen, she bridges the gap between clients and tech to
                deliver value-driven solutions.
              </p>
            </motion.div>
          </SwiperSlide>

          {/* Jisan */}
          <SwiperSlide>
            <motion.div
              className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg text-white text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={jisanImg}
                alt="Md Jisan Mashrafi"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-white"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 200 }}
              />
              <h4 className="text-2xl font-bold mb-1">Md Jisan Mashrafi</h4>
              <p className="text-pink-200 font-medium mb-2">COO</p>
              <p>
                Jisan oversees day-to-day operations, ensuring smooth execution
                of projects and client satisfaction. His leadership keeps the
                engine of neXetlab running efficiently.
              </p>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
