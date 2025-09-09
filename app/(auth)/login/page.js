'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
export default function Login(){const [email,setEmail]=useState('');const [sent,setSent]=useState(false);async function sendLink(e){e.preventDefault();const {error}=await supabase.auth.signInWithOtp({email});if(!error) setSent(true); else alert(error.message)}return(<main className='max-w-md mx-auto px-4 py-8'><h1 className='text-2xl font-bold mb-4'>Accedi</h1>{sent? <p className='text-white/80'>Link di accesso inviato a {email}.</p>:(<form onSubmit={sendLink} className='card'><label className='label'>Email</label><input className='input' type='email' value={email} onChange={e=>setEmail(e.target.value)} required/><button className='btn mt-3' type='submit'>Invia magic link</button></form>)}</main>)}
