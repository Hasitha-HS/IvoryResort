"use client"
import React, { useEffect, useState } from 'react'
import { useLanguage } from './LanguageProvider'

type Comment = { id: string; name: string; text: string; img?: string }

const DUMMY_COMMENTS: Comment[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    text: 'Absolutely loved our stay at Ivory Resort! The peaceful atmosphere was exactly what we needed. The bedrooms were clean and comfortable, and the garden area was a perfect spot to relax in the evening. Highly recommend to anyone visiting Anuradhapura!',
    img: '/images/user-avatar-1.svg'
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    text: 'Great location and very friendly hosts. The living area was spacious and well-equipped. We had a wonderful time exploring the ancient temples and returning to this quiet retreat. Will definitely come back!',
    img: '/images/user-avatar-2.svg'
  },
  {
    id: '3',
    name: 'Emma Thompson',
    text: 'Perfect for a solo traveler like me. Felt safe, comfortable, and the kitchen facilities made it easy to prepare my own meals. The connection to local transport was seamless. Can\'t wait to return!',
    img: '/images/user-avatar-3.svg'
  }
]

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>(DUMMY_COMMENTS)
  const [loggedIn, setLoggedIn] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const raw = localStorage.getItem('ir_comments')
    if (raw) {
      setComments(JSON.parse(raw))
    } else {
      setComments(DUMMY_COMMENTS)
    }
    setLoggedIn(Boolean(localStorage.getItem('ir_user')))
  }, [])

  function save(coms: Comment[]) {
    setComments(coms)
    localStorage.setItem('ir_comments', JSON.stringify(coms))
  }

  function handleAdd() {
    if (!loggedIn) return alert('Please login to add a comment')
    const name = prompt(t('add_comment')) || 'Guest'
    const text = prompt(t('add_comment')) || ''
    if (!text) return
    const c: Comment = { id: Date.now().toString(), name, text }
    save([c, ...comments])
  }

  function handleLogin() {
    const email = prompt('Enter email to login')
    if (!email) return
    localStorage.setItem('ir_user', email)
    setLoggedIn(true)
  }

  function handleLogout() {
    localStorage.removeItem('ir_user')
    setLoggedIn(false)
  }

  return (
    <section id="comments" className="container">
      <div className="card p-6 sm:p-8 lg:p-10">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5D7052] mb-2">Feedback</p>
          <h2 className="text-4xl text-[#2C2C24]">{t('user_comments')}</h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-8 pb-6 border-b border-[#DED8CF]">
          <button onClick={handleAdd} className="rounded-full bg-[#5D7052] px-6 py-3 text-sm font-bold text-[#F3F4F1] shadow-[0_4px_20px_-2px_rgba(93,112,82,0.20)] transition hover:scale-[1.02]">{t('add_comment')}</button>
          {!loggedIn ? (
            <button onClick={handleLogin} className="rounded-full border-2 border-[#C18C5D] bg-transparent px-6 py-3 text-sm font-bold text-[#C18C5D] transition hover:scale-[1.02]">{t('login')}</button>
          ) : (
            <button onClick={handleLogout} className="rounded-full border-2 border-[#9A7C6C] bg-transparent px-6 py-3 text-sm font-bold text-[#9A7C6C] transition hover:scale-[1.02]">{t('logout')}</button>
          )}
        </div>

        <div className="space-y-5">
          {comments.map(c => (
            <div key={c.id} className="flex gap-4 items-start pb-4 border-b border-[#DED8CF] last:border-b-0">
              {c.img ? (
                <img src={c.img} alt={c.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0 border border-[#DED8CF]" />
              ) : (
                <div className="w-12 h-12 bg-[#C18C5D]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-[#C18C5D]">{c.name[0]}</span>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-[#2C2C24]">{c.name}</div>
                <div className="text-[#4A4A40] text-sm mt-1">{c.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
