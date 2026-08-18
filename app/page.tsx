import React from 'react'
import BookingForm from '../components/BookingForm'
import Comments from '../components/Comments'
import Hero from '../components/Hero'

export default function Page() {
  return (
    <div className="space-y-8 pb-16">
      <Hero />

      <section id="about" className="container">
        <div className="card p-6 sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#5D7052]">About Our Location</p>
              <h2 className="text-4xl text-[#2C2C24]">Nestled in the heart of ancient Anuradhapura.</h2>
            </div>
            <p className="text-lg leading-8 text-[#4A4A40]">
              Nestled in the historic city of Anuradhapura, Ivory Resort offers a comfortable home-away-from-home just minutes from the ancient sacred sites, stupas, and temples that make this UNESCO World Heritage city famous. Whether you&apos;re here to explore centuries-old ruins, visit the sacred Bodhi Tree, or simply unwind after a day of sightseeing, our home offers a quiet, welcoming retreat with all the comforts you need. Enjoy easy access to local restaurants, markets, and transport links while staying in a peaceful residential setting away from the crowds.
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="container">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5D7052]">Moments</p>
            <h2 className="text-4xl text-[#2C2C24]">A place that feels easy</h2>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <figure className="group overflow-hidden rounded-[2rem] border border-[#DED8CF] bg-white/60">
            <img src="/asssets/images/images-livingarea.jpeg" alt="Comfortable shared living area at Ivory Resort Anuradhapura" className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
            <figcaption className="p-4 text-sm text-[#4A4A40]">A bright, welcoming living area perfect for relaxing, socializing, or catching up on plans for the next day&apos;s adventures.</figcaption>
          </figure>
          <figure className="group overflow-hidden rounded-[2rem] border border-[#DED8CF] bg-white/60">
            <img src="/asssets/images/images-kitchen.jpeg" alt="Fully equipped kitchen at Ivory Resort Anuradhapura" className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
            <figcaption className="p-4 text-sm text-[#4A4A40]">A clean, well-equipped kitchen space where guests can prepare meals and enjoy a true home-away-from-home experience.</figcaption>
          </figure>
          <figure className="group overflow-hidden rounded-[2rem] border border-[#DED8CF] bg-white/60 sm:col-span-2 lg:col-span-1">
            <img src="/asssets/images/images-garden.jpeg" alt="Green garden area surrounding Ivory Resort Anuradhapura" className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
            <figcaption className="p-4 text-sm text-[#4A4A40]">Step outside into a lush, tranquil garden — a peaceful spot to relax and enjoy the fresh Anuradhapura air.</figcaption>
          </figure>
        </div>
      </section>

      <section id="bedrooms" className="container">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5D7052]">Rooms</p>
            <h2 className="text-4xl text-[#2C2C24]">Comfortable, clean spaces for your stay</h2>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <figure className="group overflow-hidden rounded-[2rem] border border-[#DED8CF] bg-white/60">
            <img src="/asssets/images/image-bedroom1.jpeg" alt="Private bedroom one at Ivory Resort Anuradhapura" className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
            <figcaption className="p-5 text-sm text-[#4A4A40]">
              <p className="font-semibold text-[#2C2C24] mb-2">Bedroom 1</p>
              A peaceful private bedroom with all the essentials for a restful night's sleep, furnished for comfort and simplicity.
            </figcaption>
          </figure>
          <figure className="group overflow-hidden rounded-[2rem] border border-[#DED8CF] bg-white/60">
            <img src="/asssets/images/images-bedroom2.jpeg" alt="Private bedroom two at Ivory Resort Anuradhapura" className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
            <figcaption className="p-5 text-sm text-[#4A4A40]">
              <p className="font-semibold text-[#2C2C24] mb-2">Bedroom 2</p>
              Another comfortable bedroom option, ideal for families or groups looking for a quiet retreat in Anuradhapura.
            </figcaption>
          </figure>
        </div>
      </section>

      <BookingForm />

      <Comments />
    </div>
  )
}
