'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

type Locale = 'en' | 'si'

const translations: Record<Locale, Record<string, string>> = {
  en: {
    title: 'Ivory Resort',
    subtitle: "Quiet family-friendly stay near Nuwara reservoir and Anuradhapura's attractions.",
    about_heading: 'About',
    about_text: 'Family-owned, no-smoking property with a calm atmosphere. Very close to the main city Anuradhapura and key tourist attractions.',
    gallery_heading: 'Images',
    booking_heading: 'Book a Stay',
    email_placeholder: 'Email',
    checkin_label: 'Check-in',
    checkout_label: 'Check-out',
    check_availability: 'Check availability & Price',
    booking_links_booking: 'Booking.com',
    booking_links_tripadvisor: 'Tripadvisor',
    contact_us: 'Contact Us',
    no_smoking: 'No smoking. Family friendly.',
    user_comments: 'User Comments',
    add_comment: 'Add Comment',
    login: 'Login',
    logout: 'Logout',
    no_comments: 'No comments yet.',
    please_login_to_comment: 'Please login to add a comment'
  },
  si: {
    title: 'අයිවරි රිසෝට්',
    subtitle: 'නුවර ජලාශය හා අනුරාධපුර ආශ්‍රිත ක්ෂේත්‍ර වලට ළඟ සිටින පවුල සඳහා සුදුසු නිහතමානී නවාතැන්.',
    about_heading: 'ගැන',
    about_text: 'පවුලක අයිතිය, දුම්පිට නොවන, නිහතමානී පරිසරයකි. අනුරාධපුර නගරයට හා ප්‍රධාන සංචාරක ස්ථානවලට ඉතා ළඟ.',
    gallery_heading: 'පින්තූර',
    booking_heading: 'නවාතැන් 예약 කිරීම',
    email_placeholder: 'ඊ‑මේල්',
    checkin_label: 'පිවිසුම් දිනය',
    checkout_label: 'පිටවීමේ දිනය',
    check_availability: 'ලබා ගත හැකිද සහ මිල පරීක්ෂා කරන්න',
    booking_links_booking: 'Booking.com',
    booking_links_tripadvisor: 'Tripadvisor',
    contact_us: 'අප අමතා ගැනිම',
    no_smoking: 'දුම් නොඑන්න. පවුලට සුදුසු.',
    user_comments: 'පරිශීලක අදහස්',
    add_comment: 'අදහස එකතු කරන්න',
    login: 'පිවිසෙන්න',
    logout: 'පිට වන්න',
    no_comments: 'තවමත් අදහස් නොමැත.',
    please_login_to_comment: 'අදහස එක් කිරීමට කරුණාකර පිවිසෙන්න'
  }
}

const LanguageContext = createContext<{
  locale: Locale
  setLocale: (l: Locale) => void
  t: (k: string) => string
}>({ locale: 'en', setLocale: () => {}, t: k => k })

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const saved = (localStorage.getItem('ir_locale') as Locale) || undefined
    if (saved && (saved === 'en' || saved === 'si')) setLocaleState(saved)
    else {
      const navigatorLang = navigator.language || 'en'
      if (navigatorLang.startsWith('si')) setLocaleState('si')
    }
  }, [])

  function setLocale(l: Locale) {
    setLocaleState(l)
    try { localStorage.setItem('ir_locale', l) } catch {}
  }

  function t(key: string) {
    return translations[locale][key] ?? translations['en'][key] ?? key
  }

  return <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
