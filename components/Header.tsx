import React from 'react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#06382b] to-[#085a5f] text-white">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center">IR</div>
          <div>
            <div className="font-bold">Ivory Resort</div>
            <div className="text-sm text-gray-200">Family friendly • No smoking</div>
          </div>
        </div>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#booking" className="hover:underline">Book</a>
        </nav>
      </div>
    </header>
  )
}
