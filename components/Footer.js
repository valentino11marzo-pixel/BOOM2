export default function Footer(){
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="container py-8 text-sm text-white/60 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} BOOM — Mid-term Rentals</div>
        <div className="flex gap-4">
          <a href="/terms.html" className="hover:text-white/80">Termini</a>
          <a href="/privacy.html" className="hover:text-white/80">Privacy</a>
          <a href="/contact.html" className="hover:text-white/80">Contatti</a>
        </div>
      </div>
    </footer>
  )
}
