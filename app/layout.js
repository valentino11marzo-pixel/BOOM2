import '../styles/globals.css'
import Nav from '../components/Nav'
export const metadata={title:'BOOM — Affitti mid-term', description:'Roma · 5–18 mesi · spese escluse'}
export default function RootLayout({children}){return(<html lang="it"><body><Nav/>{children}</body></html>)}
