"use client"
import React, { useState } from 'react'
import { useLanguage } from './LanguageProvider'

export default function BookingForm() {
  const [email, setEmail] = useState('')
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const { t } = useLanguage()

  async function checkAvailability() {
    setResult('Checking...')
    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'booking-check', email, checkin, checkout })
      })
      const data = await res.json()
      setResult(data.message ?? 'Done')
    } catch (e) {
      setResult('Error sending request')
    }
  }

  return (
    <section id="booking" className="container">
      <div className="card p-6 sm:p-8 lg:p-10">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5D7052] mb-2">Ready to visit?</p>
          <h2 className="text-4xl text-[#2C2C24]">{t('booking_heading')}</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-4 items-end">
          <div>
            <label className="block text-xs font-bold uppercase tracking-[0.18em] text-[#5D7052] mb-2">Email</label>
            <input type="email" placeholder={t('email_placeholder')} value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[#DED8CF] text-[#2C2C24] placeholder-[#9A9A8A] focus:outline-none focus:ring-2 focus:ring-[#5D7052]/30" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-[0.18em] text-[#5D7052] mb-2">{t('checkin_label')}</label>
            <input type="date" value={checkin} onChange={e => setCheckin(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[#DED8CF] text-[#2C2C24] focus:outline-none focus:ring-2 focus:ring-[#5D7052]/30" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-[0.18em] text-[#5D7052] mb-2">{t('checkout_label')}</label>
            <input type="date" value={checkout} onChange={e => setCheckout(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[#DED8CF] text-[#2C2C24] focus:outline-none focus:ring-2 focus:ring-[#5D7052]/30" />
          </div>
          <button onClick={checkAvailability} className="rounded-full bg-[#5D7052] px-6 py-3 text-sm font-bold text-[#F3F4F1] shadow-[0_4px_20px_-2px_rgba(93,112,82,0.20)] transition hover:scale-[1.02]">{t('check_availability')}</button>
        </div>
        {result && <div className="mt-4 text-sm text-[#5D7052] font-medium bg-[#F0EBE5] px-4 py-3 rounded-xl">{result}</div>}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 pt-4 border-t border-[#DED8CF]">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5D7052]\">Or book via:</p>
          <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="text-[#C18C5D] font-semibold hover:text-[#A67042] transition">{t('booking_links_booking')}</a>
          <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" className="text-[#C18C5D] font-semibold hover:text-[#A67042] transition">{t('booking_links_tripadvisor')}</a>
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="group">
          <div className="overflow-hidden rounded-[2rem] border border-[#DED8CF] bg-white/80 p-6 transition hover:shadow-lg hover:border-[#C18C5D]">
            <img src="/images/booking-logo.svg" alt="Book on Booking.com" className="h-16 w-full object-contain group-hover:scale-105 transition" />
            <p className="mt-4 text-center text-sm text-[#4A4A40]">Find Ivory Resort on Booking.com</p>
          </div>
        </a>
        <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" className="group">
          <div className="overflow-hidden rounded-[2rem] border border-[#DED8CF] bg-white/80 p-6 transition hover:shadow-lg hover:border-[#C18C5D]">
            <img src="/images/tripadvisor-logo.svg" alt="Read reviews on Tripadvisor" className="h-16 w-full object-contain group-hover:scale-105 transition" />
            <p className="mt-4 text-center text-sm text-[#4A4A40]\">Read reviews on Tripadvisor</p>
          </div>
        </a>
      </div>
    </section>
  )
}
