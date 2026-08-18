'use client'
import React from 'react'
import { useLanguage } from './LanguageProvider'

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-30 pt-4">
      <div className="container">
        <div className="flex items-center justify-between rounded-full border border-[#DED8CF]/80 bg-white/75 px-4 py-3 shadow-[0_4px_20px_-2px_rgba(93,112,82,0.12)] backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5D7052] text-sm font-bold text-[#F3F4F1]">IR</div>
            <div>
              <div className="text-base font-bold text-[#2C2C24]">{t('title')}</div>
              <div className="text-xs text-[#78786C]">{t('no_smoking')}</div>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#2C2C24] md:flex">
            <a href="#about" className="transition hover:text-[#5D7052]">{t('about_heading')}</a>
            <a href="#gallery" className="transition hover:text-[#5D7052]">{t('gallery_heading')}</a>
            <a href="#booking" className="transition hover:text-[#5D7052]">{t('booking_heading')}</a>
          </nav>

          <button className="rounded-full bg-[#5D7052] px-5 py-2 text-sm font-bold text-[#F3F4F1] shadow-[0_4px_20px_-2px_rgba(93,112,82,0.20)] transition hover:scale-[1.02]">
            Reserve
          </button>
        </div>
      </div>
    </header>
  )
}
