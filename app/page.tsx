import React from 'react'
import BookingForm from '../components/BookingForm'
import Comments from '../components/Comments'

export default function Page() {
  return (
    <div className="space-y-6">
      <section className="card">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5f0d6d1f2a7b8b5b6f6a" alt="resort" className="w-full md:w-1/2 rounded" />
          <div>
            <h1 className="text-3xl font-semibold">Ivory Resort</h1>
            <p className="mt-2 text-gray-200">Family-owned, no-smoking property with a calm atmosphere. Very close to Anuradhapura and main attractions.</p>
          </div>
        </div>
      </section>

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
