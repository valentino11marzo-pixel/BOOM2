'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
const eur = v => typeof v === 'number' ? (v/100).toLocaleString('it-IT',{style:'currency',currency:'EUR'}) : '—'

function CardSkeleton(){
  return (
    <div className="card">
      <div className="aspect-[4/3] skeleton mb-3" />
      <div className="h-4 w-2/3 skeleton mb-2" />
      <div className="h-3 w-1/2 skeleton" />
    </div>
  )
}

export default function Listings(){
  const [items, setItems]   = useState([])
  const [loading, setLoad]  = useState(true)
  const [error, setError]   = useState(null)

  useEffect(() => {
    (async () => {
      setLoad(true)
      const { data, error } = await supabase
        .from('listings')
        .select(`
          id, slug, monthly_rent_eur, expenses_included, term_min_months, term_max_months,
          units:unit_id ( title, area_sqm, beds, baths )
        `)
        .eq('is_active', true)
        .order('created_at', { ascending: false })

      if (error) setError(error.message)
      else setItems(data || [])
      setLoad(false)
    })()
  }, [])

  return (
    <section className="section">
      <div className="container">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">Annunci a Roma</h1>
            <p className="text-white/70 text-sm mt-1">Min 5 — Max 18 mesi · spese escluse</p>
          </div>
          <a className="btn-outline" href="/owners.html">Pubblica gratis</a>
        </div>

        {error && <div className="card mt-5 text-red-300">Errore: {error}</div>}

        <div className="grid-cards mt-6">
          {loading && Array.from({length:6}).map((_,i)=><CardSkeleton key={i}/>)}

          {!loading && items.length === 0 && (
            <div className="card col-span-full text-white/70">
              Nessun annuncio attivo. Torna presto!
            </div>
          )}

          {!loading && items.map(it => {
            const u = it.units || {}
            return (
              <article key={it.id} className="card hover:shadow-glow transition">
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-white/10 to-white/5 mb-3" />
                <h3 className="font-semibold">{u.title || '—'}</h3>
                <p className="text-sm text-white/70 mt-1">
                  {eur(it.monthly_rent_eur)} / mese · {u.beds ?? '—'} bed · {u.baths ?? '—'} bath · {it.term_min_months}–{it.term_max_months} mesi · {it.expenses_included ? 'spese incluse' : 'spese escluse'}
                </p>
                <div className="mt-3 flex gap-2">
                  <a className="btn" href="/dashboard">Richiedi</a>
                  <a className="btn-outline" href="/terms.html">Termini</a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
