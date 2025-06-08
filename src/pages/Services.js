import React from 'react'
import { motion } from 'framer-motion'

// Import local images
import brandingImg from '../assets/branding.jpg'
import digitalMarketingImg from '../assets/digitalmarketing.jpg'
import landingPageImg from '../assets/landingpage.jpg'
import seoImg from '../assets/seo.jpg' // <-- Make sure this file exists

const services = [
  {
    title: 'Software Development',
    description:
      "We deliver custom software tailored to your workflows, operations, and goals. Whether it's a desktop system, powerful backend, or SaaS app—we build it from the ground up.",
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Website Development',
    description:
      'We craft responsive, SEO-optimized websites that captivate your audience. From portfolios to portals, we ensure your online presence is fast and scalable.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Landing Pages',
    description:
      'We design high-converting landing pages with persuasive visuals and copy to boost your marketing campaigns and convert visitors into leads.',
    img: landingPageImg,
  },
  {
    title: 'Digital Marketing',
    description:
      'Our digital marketing services include SEO, PPC, social media, and content marketing to help your business grow and reach the right audience.',
    img: digitalMarketingImg,
  },
  {
    title: 'Branding',
    description:
      'We help create a strong, memorable brand identity through logo design, brand strategy, and creative direction that communicates your vision.',
    img: brandingImg,
  },
  {
    title: 'SEO Services',
    description:
      'Boost your search engine rankings and drive organic traffic with our tailored SEO strategies, on-page optimization, and keyword research.',
    img: seoImg,
  },
]

export default function Services() {
  return (
    <section className="pt-[80px] px-6 pb-12 min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-red-600">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-14">
          Our Services
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-purple-800">
                  {service.title}
                </h2>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
