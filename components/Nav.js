'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/55 border-b border-white/10">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.jpg" alt="BOOM" className="h-12 w-auto md:h-14" />
          <span className="sr-only">BOOM</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/listings" className="hover:opacity-90">Annunci</Link>
          <Link href="/dashboard" className="hover:opacity-90">Dashboard</Link>
          <a href="/owners.html" className="hover:opacity-90">Per Proprietari</a>
          <Link href="/login" className="btn">Accedi</Link>
        </nav>

        <button className="md:hidden btn-outline" onClick={() => setOpen(!open)} aria-label="Menu">
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70">
          <div className="container py-3 flex flex-col gap-3 text-sm">
            <Link href="/listings" onClick={()=>setOpen(false)}>Annunci</Link>
            <Link href="/dashboard" onClick={()=>setOpen(false)}>Dashboard</Link>
            <a href="/owners.html" onClick={()=>setOpen(false)}>Per Proprietari</a>
            <Link href="/login" className="btn" onClick={()=>setOpen(false)}>Accedi</Link>
          </div>
        </div>
      )}
    </header>
  )
}
