export default function Home(){
  return (
    <>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="badge mb-3">Roma • 5–18 mesi • spese escluse</div>
            <h1 className="text-4xl md:text-6xl leading-tight font-extrabold">
              Affitti mid-term, <span className="text-gold">zero frizioni</span>.
            </h1>
            <p className="text-white/70 mt-3 md:text-lg">
              Dai documenti alla firma digitale: un flusso unico, veloce e trasparente.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a className="btn" href="/listings">Guarda gli annunci</a>
              <a className="btn-outline" href="/owners.html">Pubblica gratis (lancio)</a>
            </div>
            <p className="text-xs text-white/50 mt-2">
              Fee inquilino dal 10% del canone annuo. Proprietari: fee 0 in fase di lancio.
            </p>
          </div>

          <div className="card">
            <div className="text-sm text-white/70">Esempio annuncio</div>
            <div className="mt-3 grid grid-cols-5 gap-2">
              {Array.from({length:5}).map((_,i)=>(
                <div key={i} className="aspect-[4/3] rounded-xl bg-gradient-to-br from-white/10 to-white/5" />
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="font-semibold">Viale Angelico 9 — 70 m²</div>
                <div className="text-white/70 text-sm">2 bed · 1 bath · duplex</div>
              </div>
              <a className="btn" href="/dashboard">Richiedi</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-white/10">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold">Come funziona</h2>
          <div className="grid md:grid-cols-3 gap-5 mt-5">
            <div className="card">
              <div className="badge mb-2">PreCheck 2′</div>
              <p className="text-white/75 text-sm">Carica 3+ documenti (ID, reddito, lettera, iscrizione). Esito immediato.</p>
            </div>
            <div className="card">
              <div className="badge mb-2">Offerta 48h</div>
              <p className="text-white/75 text-sm">Canone, periodo 5–18 mesi, clausole. Reminder 24/4/1h.</p>
            </div>
            <div className="card">
              <div className="badge mb-2">Firma digitale</div>
              <p className="text-white/75 text-sm">Namirial / SPID / opzioni internazionali. Tutto online.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
