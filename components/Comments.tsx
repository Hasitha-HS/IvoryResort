'use client'
import React, { useEffect, useState } from 'react'

type Comment = { id: string; name: string; text: string; img?: string }

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([])
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const raw = localStorage.getItem('ir_comments')
    if (raw) setComments(JSON.parse(raw))
    setLoggedIn(Boolean(localStorage.getItem('ir_user')))
  }, [])

  function save(coms: Comment[]) {
    setComments(coms)
    localStorage.setItem('ir_comments', JSON.stringify(coms))
  }

  function handleAdd() {
    if (!loggedIn) return alert('Please login to add a comment')
    const name = prompt('Your name') || 'Guest'
    const text = prompt('Your comment') || ''
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
    <section id="comments" className="card">
      <h2 className="text-2xl mb-4">User Comments</h2>
      <div className="flex gap-2 mb-4">
        <button onClick={handleAdd}>Add Comment</button>
        {!loggedIn ? <button onClick={handleLogin}>Login</button> : <button onClick={handleLogout}>Logout</button>}
      </div>

      <div className="space-y-3">
        {comments.length === 0 && <div className="text-gray-300">No comments yet.</div>}
        {comments.map(c => (
          <div key={c.id} className="flex gap-3 items-start">
            <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center">{c.name[0]}</div>
            <div>
              <div className="font-semibold">{c.name}</div>
              <div className="text-gray-200">{c.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
