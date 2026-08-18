'use client'
import React from 'react'
import { useLanguage } from './LanguageProvider'

export default function Footer() {
  const { t, locale, setLocale } = useLanguage()
  return (
    <footer className="site-footer mt-12">
      <div className="container py-6 text-gray-200">
        <h4 className="text-lg">{t('contact_us')}</h4>
        <p>Email: info@ivoryresort.example | Phone: +94 77 123 4567</p>
        <p className="mt-2">{t('no_smoking')}</p>

        <div className="mt-4">
          <label className="mr-2">Language:</label>
          <button className={`mr-2 px-2 py-1 rounded ${locale==='en'? 'bg-white/10':''}`} onClick={() => setLocale('en')}>English</button>
          <button className={`px-2 py-1 rounded ${locale==='si'? 'bg-white/10':''}`} onClick={() => setLocale('si')}>සිංහල</button>
        </div>
      </div>
    </footer>
  )
}
