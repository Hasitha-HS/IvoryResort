use client
import React, { useState } from 'react'

export default function BookingForm() {
  const [email, setEmail] = useState('')
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [result, setResult] = useState<string | null>(null)

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
    <section id="booking" className="card">
      <h2 className="text-2xl mb-4">Book a Stay</h2>
      <div className="grid sm:grid-cols-3 gap-3">
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="p-2 rounded col-span-3 sm:col-span-1" />
        <input type="date" value={checkin} onChange={e => setCheckin(e.target.value)} className="p-2 rounded" />
        <input type="date" value={checkout} onChange={e => setCheckout(e.target.value)} className="p-2 rounded" />
        <div>
          <button onClick={checkAvailability} className="mt-2">Check availability & Price</button>
        </div>
      </div>
      {result && <div className="mt-3 text-sm text-gray-200">{result}</div>}
      <div className="mt-3 flex gap-4">
        <a href="#" className="underline">Booking.com</a>
        <a href="#" className="underline">Tripadvisor</a>
      </div>
    </section>
  )
}
