import React from 'react'
import BookingForm from '../components/BookingForm'
import Comments from '../components/Comments'
import Hero from '../components/Hero'
import { useLanguage } from '../components/LanguageProvider'

export default function Page() {
  return (
    <div className="space-y-6">
      <Hero />

      <section className="card">
        <h2 className="text-2xl mb-4">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img src="https://source.unsplash.com/600x400/?lakeside" alt="1" className="rounded" />
          <img src="https://source.unsplash.com/600x400/?cottage" alt="2" className="rounded" />
          <img src="https://source.unsplash.com/600x400/?nature" alt="3" className="rounded" />
        </div>
      </section>

      <BookingForm />

      <Comments />
    </div>
  )
}
