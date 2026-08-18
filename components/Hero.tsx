'use client'
import React from 'react'
import { useLanguage } from './LanguageProvider'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section className="card">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5f0d6d1f2a7b8b5b6f6a" alt="resort" className="w-full md:w-1/2 rounded" />
        <div>
          <h1 className="text-3xl font-semibold">{t('title')}</h1>
          <p className="mt-2 text-gray-200">{t('subtitle')}</p>
        </div>
      </div>
    </section>
  )
}
