'use client'
import React from 'react'
import { useLanguage } from './LanguageProvider'

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-8 pb-10 sm:pt-10">
      <div className="absolute -left-20 top-10 h-52 w-52 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-[#E6DCCD]/80 blur-3xl" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-[#C18C5D]/15 blur-3xl" />

      <div className="container relative">
        <div className="card overflow-hidden px-4 py-6 sm:px-8 lg:px-10 lg:py-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full border border-[#DED8CF] bg-[#F0EBE5] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#5D7052]">
                Stay in Anuradhapura
              </span>

              <div className="space-y-4">
                <h1 className="text-5xl leading-none text-[#2C2C24] sm:text-6xl lg:text-7xl">
                  Ivory Resort — Your Peaceful Stay in Anuradhapura
                </h1>
                <p className="max-w-xl text-lg text-[#4A4A40] sm:text-xl">
                  A cozy private room and living space in the heart of Sri Lanka&apos;s ancient city, perfect for travelers seeking comfort, quiet, and easy access to Anuradhapura&apos;s sacred sites.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="rounded-full bg-[#5D7052] px-7 py-3 text-sm font-bold text-[#F3F4F1] shadow-[0_4px_20px_-2px_rgba(93,112,82,0.20)] transition hover:scale-[1.02]">
                  Book Your Stay
                </button>
                <button className="rounded-full border-2 border-[#C18C5D] bg-transparent px-7 py-3 text-sm font-bold text-[#C18C5D] transition hover:scale-[1.02]">
                  Explore nearby places
                </button>
              </div>

              <div className="grid max-w-lg grid-cols-2 gap-4 pt-2 sm:grid-cols-3">
                <div className="rounded-[1.5rem] bg-[#F0EBE5] p-3">
                  <div className="text-2xl font-bold text-[#2C2C24]">5 min</div>
                  <div className="text-xs text-[#78786C]">to reservoir</div>
                </div>
                <div className="rounded-[1.5rem] bg-[#F0EBE5] p-3">
                  <div className="text-2xl font-bold text-[#2C2C24]">10 min</div>
                  <div className="text-xs text-[#78786C]">to city</div>
                </div>
                <div className="rounded-[1.5rem] bg-[#F0EBE5] p-3">
                  <div className="text-2xl font-bold text-[#2C2C24]">Family</div>
                  <div className="text-xs text-[#78786C]">friendly</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-2 top-6 h-24 w-24 rounded-full bg-[#E6DCCD] blur-2xl" />
              <img
                src="/images/imageshome.avif"
                alt="Exterior view of Ivory Resort home in Anuradhapura"
                className="h-[480px] w-full rounded-[30%_70%_70%_30%/30%_30%_70%_70%] object-cover shadow-[0_20px_40px_-12px_rgba(93,112,82,0.18)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
