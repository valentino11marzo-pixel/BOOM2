import '../styles/globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata = {
  title: 'BOOM — Affitti mid-term a Roma',
  description: 'Contratti 5–18 mesi, processo rapido, spese escluse.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
