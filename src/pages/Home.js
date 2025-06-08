import React from 'react'
import { motion } from 'framer-motion'
import Slider from '../components/Slider'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import brandingImg from '../assets/branding.jpg'
import digitalMarketingImg from '../assets/digitalmarketing.jpg'
import landingPageImg from '../assets/landingpage.jpg'

const services = [
  {
    title: 'Software Development',
    description:
      'We build robust, scalable custom software solutions to help streamline your business operations.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Website Development',
    description:
      'We design visually appealing and high-performing websites optimized for user experience.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Landing Pages',
    description:
      'Crafting high-converting landing pages tailored for marketing campaigns and lead generation.',
    img: landingPageImg,
  },
  {
    title: 'Digital Marketing',
    description:
      'SEO, social media, and paid ads strategies that put your business in front of your audience.',
    img: digitalMarketingImg,
  },
  {
    title: 'Branding',
    description:
      'Creating impactful brand identities, from logos to style guides and more.',
    img: brandingImg,
  },
]

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto pt-[80px]">
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
          >
            We Build Smart IT Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg text-gray-700 mb-6"
          >
            neXetlab helps businesses grow with cutting-edge software, websites,
            and landing pages.
          </motion.p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-purple-500 via-pink-600 to-red-600 text-white font-semibold px-6 py-3 rounded hover:from-pink-600 hover:to-red-700 transition"
          >
            Contact Us
          </a>
        </div>
        <div className="md:w-1/2">
          <Slider />
        </div>
      </section>

      {/* Services Slider */}
      <section className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-12">
            Our Services
          </h2>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ rotate: 2, scale: 1.05 }}
                  className="bg-white bg-opacity-10 backdrop-blur-md shadow-lg rounded-lg p-6 text-center border border-white border-opacity-30"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="mb-4 w-full h-48 object-cover rounded"
                  />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white text-sm">{service.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  )
}
