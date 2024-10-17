'use client'
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { Loader2, Check } from 'lucide-react'

const Contact = () => {
  const form = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Initialize EmailJS
  emailjs.init('sSqWaRganyWl14QuK')

  const sendEmail = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await emailjs.sendForm(
        'service_fmmlnjk',
        'template_rjprhdq',
        form.current,
        'sSqWaRganyWl14QuK',
      )

      if (result.text === 'OK') {
        setIsSubmitted(true)
        form.current.reset()
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      alert(
        'Failed to send the message. Please try again.\nError: ' +
          error.message,
      )
    } finally {
      setIsLoading(false)
    }
  }

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      <motion.div
        className="text-white text-3xl flex flex-col justify-between lg:min-h-screen w-full overflow-hidden p-4 "
        id="contact"
        style={{
          backgroundImage: 'url(/contact.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInVariants}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center m-4">
          <h1
            className="text-[40px] md:text-[60px] lg:text-[80px] mb-4 sm:mb-8"
            style={{ fontFamily: 'var(--font-k2d)', fontWeight: 300 }}
          >
            Contact Me
          </h1>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] mx-auto px-4 flex flex-col gap-2 sm:gap-4"
        >
          <motion.div
            className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label
              htmlFor="user_name"
              style={{ fontFamily: 'var(--font-k2d)' }}
              className="text-xl sm:text-2xl md:text-[28px] mx-2 sm:mx-5"
            >
              Name:
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Please Enter Your Name Here.."
              className="w-full focus:outline-none rounded-[35px] text-[14px] sm:text-[17px] bg-[#214947] bg-opacity-30 p-3 sm:p-4 mt-2 placeholder:text-[#c0bebe]"
              style={{ color: '#D9D9D9' }}
              required
            />
          </motion.div>

          <motion.div
            className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label
              htmlFor="user_email"
              style={{ fontFamily: 'var(--font-k2d)' }}
              className="text-xl sm:text-2xl md:text-[28px] mx-2 sm:mx-5"
            >
              Email:
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="Please Enter Your Email Here.."
              className="w-full focus:outline-none rounded-[35px] text-[14px] sm:text-[17px] bg-[#214947] bg-opacity-30 p-3 sm:p-4 mt-2 placeholder:text-[#c0bebe]"
              style={{ color: '#D9D9D9' }}
              required
            />
          </motion.div>

          <motion.div
            className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label
              htmlFor="message"
              style={{ fontFamily: 'var(--font-k2d)' }}
              className="text-xl sm:text-2xl md:text-[28px] mx-2 sm:mx-5"
            >
              Message:
            </label>
            <textarea
              name="message"
              placeholder="Please Enter Your Message Here.."
              rows={3}
              className="w-full focus:outline-none rounded-[35px] text-[14px] sm:text-[17px] bg-[#214947] bg-opacity-30 p-3 sm:p-4 mt-2 placeholder:text-[#c0bebe]"
              style={{ color: '#D9D9D9' }}
              required
            />
          </motion.div>

          <motion.div
            className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              type="submit"
              disabled={isLoading || isSubmitted}
              className={`w-full rounded-[35px] ${
                isSubmitted ? 'bg-[#1a3b39]' : 'bg-[#214947] hover:bg-[#1a3b39]'
              } p-3 sm:p-4 text-white text-[16px] sm:text-[20px] mt-4 flex items-center justify-center gap-2 transition-colors duration-300`}
              style={{ fontFamily: 'var(--font-k2d)' }}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : isSubmitted ? (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1.1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="flex items-center gap-2"
                >
                  <Check size={20} />
                  Message Sent!
                </motion.div>
              ) : (
                'Send Message'
              )}
            </button>
          </motion.div>
        </form>
      </motion.div>

      <hr className="border-1 border-[#939090]" />
      <footer className="w-full text-center p-4 sm:p-8 text-[#939090] text-sm sm:text-base">
        &copy; 2024 All Rights Reserved by Shivam Kumar.
      </footer>
    </>
  )
}

export default Contact
