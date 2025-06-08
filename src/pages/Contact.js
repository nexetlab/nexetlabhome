import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef()
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSending(true)
    setError(false)

    emailjs
      .sendForm(
        'service_kd8b1m8', // EmailJS service ID
        'template_ya2qcv6', // EmailJS template ID
        formRef.current,
        'D-9hxmFbirQt7Sgof' // EmailJS public key
      )
      .then(
        () => {
          setSubmitted(true)
          setIsSending(false)
        },
        () => {
          setError(true)
          setIsSending(false)
        }
      )
  }

  if (submitted) {
    return (
      <section className="pt-[80px] px-4 min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 flex items-center justify-center">
        <div className="max-w-xl bg-white bg-opacity-90 rounded-lg p-10 shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            Thanks for reaching out!
          </h2>
          <p className="text-lg text-gray-800">
            We’ll be in touch with you very soon.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="pt-[80px] px-4 min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 flex items-center justify-center">
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="max-w-xl bg-white bg-opacity-90 rounded-lg p-10 shadow-lg w-full"
      >
        <h2 className="text-4xl font-bold mb-6 text-purple-800 text-center">
          Contact Us
        </h2>

        <div className="text-center text-gray-700 text-sm mb-6">
          <p className="mb-1">
            📧 Email: <a href="mailto:nexetlab@gmail.com" className="text-purple-700 font-medium">nexetlab@gmail.com</a>
          </p>
          <p>
            📞 Phone: <a href="tel:+61451612561" className="text-purple-700 font-medium">+61 451 612 561</a>
          </p>
        </div>

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 mb-4 w-full"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 mb-4 w-full"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none mb-4 w-full"
        />
        <button
          type="submit"
          disabled={isSending}
          className={`bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 text-white font-bold py-3 rounded hover:opacity-90 transition w-full ${
            isSending ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>

        {error && (
          <p className="text-red-600 text-sm mt-4 text-center">
            Failed to send message. Please try again.
          </p>
        )}
      </form>
    </section>
  )
}
