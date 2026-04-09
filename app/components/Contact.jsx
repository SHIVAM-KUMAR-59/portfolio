'use client'

import { useRef, useState, useCallback } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const ToastItem = ({ toast, onRemove }) => {
  const [removing, setRemoving] = useState(false)

  const dismiss = useCallback(() => {
    setRemoving(true)
    setTimeout(() => onRemove(toast.id), 350)
  }, [toast.id, onRemove])

  // Auto-dismiss after 4s
  useState(() => {
    const t = setTimeout(dismiss, 4000)
    return () => clearTimeout(t)
  })

  const isSuccess = toast.type === 'success'

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 32, scale: 0.95 }}
      animate={{
        opacity: removing ? 0 : 1,
        x: removing ? 32 : 0,
        scale: removing ? 0.95 : 1,
      }}
      exit={{ opacity: 0, x: 32, scale: 0.95 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      onClick={dismiss}
      className="relative flex items-start gap-3 min-w-[280px] max-w-[360px] px-4 py-3.5 rounded-xl border cursor-pointer overflow-hidden backdrop-blur-md"
      style={{
        background: isSuccess
          ? 'rgba(10, 28, 20, 0.92)'
          : 'rgba(30, 10, 10, 0.92)',
        borderColor: isSuccess
          ? 'rgba(29, 158, 117, 0.35)'
          : 'rgba(226, 75, 74, 0.35)',
      }}
    >
      {/* Icon */}
      <div
        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
        style={{
          background: isSuccess
            ? 'rgba(29,158,117,0.2)'
            : 'rgba(226,75,74,0.2)',
        }}
      >
        <span
          className="material-symbols-outlined text-[13px]"
          style={{ color: isSuccess ? '#5DCAA5' : '#F09595' }}
        >
          {isSuccess ? 'check' : 'error'}
        </span>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p
          className="text-[13px] font-semibold leading-tight"
          style={{ color: isSuccess ? '#5DCAA5' : '#F09595' }}
        >
          {toast.title}
        </p>
        <p
          className="text-[12px] mt-0.5 leading-snug"
          style={{
            color: isSuccess
              ? 'rgba(93,202,165,0.65)'
              : 'rgba(240,149,149,0.65)',
          }}
        >
          {toast.message}
        </p>
      </div>

      {/* Close */}
      <button
        className="flex-shrink-0 opacity-30 hover:opacity-80 transition-opacity"
        style={{ color: isSuccess ? '#5DCAA5' : '#F09595', fontSize: 14 }}
      >
        ✕
      </button>

      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] rounded-bl-xl"
        style={{ background: isSuccess ? '#1D9E75' : '#E24B4A' }}
        initial={{ width: '100%' }}
        animate={{ width: '0%' }}
        transition={{ duration: 4, ease: 'linear' }}
      />
    </motion.div>
  )
}

const Contact = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const titleY = useTransform(scrollYProgress, [0.05, 0.4], [80, 0])
  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.22], [0, 1])
  const bigTextY = useTransform(scrollYProgress, [0, 1], [40, -40])

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [fieldErrors, setFieldErrors] = useState({})
  const [shakingFields, setShakingFields] = useState({})
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [toasts, setToasts] = useState([])
  const toastIdRef = useRef(0)

  const addToast = useCallback((type, title, message) => {
    const id = ++toastIdRef.current
    setToasts((prev) => [...prev, { id, type, title, message }])
  }, [])

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const shakeField = (key) => {
    setShakingFields((s) => ({ ...s, [key]: true }))
    setTimeout(() => setShakingFields((s) => ({ ...s, [key]: false })), 500)
  }

  const validate = () => {
    const errors = {}
    if (!formState.name.trim()) errors.name = 'Name is required'
    if (!formState.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = 'Enter a valid email'
    }
    if (!formState.message.trim()) errors.message = 'Message cannot be empty'
    return errors
  }

  const handleSubmit = async () => {
    const errors = validate()

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      Object.keys(errors).forEach((key) => shakeField(key))
      addToast(
        'error',
        'Check your input',
        'Please fill in all required fields.',
      )
      return
    }

    setFieldErrors({})
    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })

      if (!res.ok) throw new Error('Failed')

      setSent(true)
      setFormState({ name: '', email: '', message: '' })
      addToast(
        'success',
        'Message transmitted',
        "I'll get back to you shortly.",
      )
    } catch {
      addToast(
        'error',
        'Transmission failed',
        'Something went wrong. Please try again.',
      )
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (key, value) => {
    setFormState((s) => ({ ...s, [key]: value }))
    if (fieldErrors[key]) setFieldErrors((e) => ({ ...e, [key]: '' }))
  }

  const fields = [
    { label: 'Sender Name', placeholder: 'Name', key: 'name', type: 'text' },
    {
      label: 'Email Address',
      placeholder: 'Email',
      key: 'email',
      type: 'email',
    },
  ]

  return (
    <>
      {/* Toast portal */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-2.5 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
          ))}
        </AnimatePresence>
      </div>

      <motion.section
        ref={ref}
        id="contact"
        className="relative py-32 md:py-52 px-6 md:px-12 bg-[#080808] overflow-hidden"
      >
        {/* Giant ghosted background text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          style={{ y: bigTextY }}
        >
          <span
            className="text-[clamp(8rem,25vw,22rem)] font-black tracking-tighter uppercase leading-none"
            style={{
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255,255,255,0.028)',
            }}
          >
            CONTACT
          </span>
        </motion.div>

        {/* Vertical line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-white/18 to-transparent" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <motion.div style={{ y: titleY, opacity: titleOpacity }}>
            <motion.div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-[8px] tracking-[0.5em] text-white/20 uppercase">
                03 — Contact
              </span>
            </motion.div>

            <div className="overflow-hidden mb-5">
              <motion.h2
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-white leading-none"
                initial={{ y: '100%', skewY: 3 }}
                whileInView={{ y: 0, skewY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              >
                INITIATE
                <br />
                SYSTEM
              </motion.h2>
            </div>

            <motion.p
              className="text-white/28 mb-16 tracking-wide text-sm md:text-base"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Available for collaborative engineering and complex architectural
              consulting.
            </motion.p>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            {[
              {
                icon: 'mail',
                label: 'Electronic Mail',
                value: 'shivamkumardev01@gmail.com',
              },
              { icon: 'call', label: 'Direct Line', value: '(+91) 7070089628' },
            ].map((contact) => (
              <motion.div
                key={contact.icon}
                className="group p-7 bg-white/[0.02] border border-white/[0.07] text-left relative overflow-hidden cursor-pointer"
                whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.16)' }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="material-symbols-outlined text-white/22 group-hover:text-white/55 transition-colors mb-4 block text-[20px]">
                  {contact.icon}
                </span>
                <p className="text-[8px] uppercase tracking-[0.35em] text-white/22 mb-1.5">
                  {contact.label}
                </p>
                <p className="text-sm font-semibold text-white/75 relative z-10">
                  {contact.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            className="space-y-10 text-left bg-white/[0.015] p-8 md:p-12 border border-white/[0.07] relative overflow-hidden"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.35,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-10 h-px bg-white/20" />
            <div className="absolute top-0 left-0 w-px h-10 bg-white/20" />
            <div className="absolute bottom-0 right-0 w-10 h-px bg-white/20" />
            <div className="absolute bottom-0 right-0 w-px h-10 bg-white/20" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {fields.map((field) => (
                <motion.div
                  key={field.key}
                  className="space-y-1.5 group"
                  animate={
                    shakingFields[field.key]
                      ? { x: [-5, 5, -4, 4, -2, 2, 0] }
                      : { x: 0 }
                  }
                  transition={{ duration: 0.45 }}
                >
                  <label className="text-[8px] uppercase tracking-[0.35em] text-white/22 block">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-transparent py-4 focus:outline-none placeholder:text-white/[0.20] text-white text-sm transition-colors duration-300"
                    style={{
                      borderBottom: `1px solid ${
                        fieldErrors[field.key]
                          ? 'rgba(226,75,74,0.6)'
                          : 'rgba(255,255,255,0.09)'
                      }`,
                    }}
                    onFocus={(e) =>
                      !fieldErrors[field.key] &&
                      (e.target.style.borderBottomColor =
                        'rgba(255,255,255,0.45)')
                    }
                    onBlur={(e) =>
                      !fieldErrors[field.key] &&
                      (e.target.style.borderBottomColor =
                        'rgba(255,255,255,0.09)')
                    }
                    value={formState[field.key]}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                  />
                  <AnimatePresence>
                    {fieldErrors[field.key] && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="text-[10px] tracking-wide"
                        style={{ color: '#F09595' }}
                      >
                        {fieldErrors[field.key]}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Message */}
            <motion.div
              className="space-y-1.5"
              animate={
                shakingFields.message
                  ? { x: [-5, 5, -4, 4, -2, 2, 0] }
                  : { x: 0 }
              }
              transition={{ duration: 0.45 }}
            >
              <label className="text-[8px] uppercase tracking-[0.35em] text-white/22 block">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Message content..."
                className="w-full bg-transparent py-4 focus:outline-none placeholder:text-white/[0.20] text-white text-sm resize-none transition-colors duration-300"
                style={{
                  borderBottom: `1px solid ${
                    fieldErrors.message
                      ? 'rgba(226,75,74,0.6)'
                      : 'rgba(255,255,255,0.09)'
                  }`,
                }}
                onFocus={(e) =>
                  !fieldErrors.message &&
                  (e.target.style.borderBottomColor = 'rgba(255,255,255,0.45)')
                }
                onBlur={(e) =>
                  !fieldErrors.message &&
                  (e.target.style.borderBottomColor = 'rgba(255,255,255,0.09)')
                }
                value={formState.message}
                onChange={(e) => handleChange('message', e.target.value)}
              />
              <AnimatePresence>
                {fieldErrors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="text-[10px] tracking-wide"
                    style={{ color: '#F09595' }}
                  >
                    {fieldErrors.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Submit */}
            <div className="flex justify-center pt-4">
              <motion.button
                className="relative bg-white text-black px-16 py-5 font-black uppercase tracking-[0.35em] text-xs w-full sm:w-auto overflow-hidden"
                whileHover={{ scale: 0.985 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleSubmit}
                disabled={loading}
              >
                {/* Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -skew-x-12"
                  initial={{ x: '-150%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                />

                <AnimatePresence mode="wait">
                  {!loading ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="relative z-10 flex items-center justify-center gap-2.5"
                    >
                      {/* Spinner */}
                      <motion.span
                        className="w-2 h-2 rounded-full bg-black block"
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          ease: 'easeInOut',
                        }}
                      />
                      Transmitting...
                    </motion.span>
                  ) : sent ? (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="relative z-10 flex items-center gap-2 justify-center"
                    >
                      <span className="material-symbols-outlined text-sm">
                        check_circle
                      </span>
                      Transmitted
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="relative z-10"
                    >
                      Transmit Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default Contact
