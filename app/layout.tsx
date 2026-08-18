import '../styles/globals.css'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Ivory Resort — Family Stay',
  description: 'Quiet family-friendly stay near Nuwara reservoir and Anuradhapura attractions.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
