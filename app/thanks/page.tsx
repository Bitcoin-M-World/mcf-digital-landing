'use client'
import { useSearchParams } from 'next/navigation'

function pretty(s?: string){
  if(!s) return 'Download'
  return s.split('-').map(w => w.charAt(0).toUpperCase()+w.slice(1)).join(' ')
}

export default function ThanksPage(){
  const sp = useSearchParams()
  const asset = sp.get('asset') || undefined
  const year = new Date().getFullYear()
  return (
    <main className="wrap" style={{padding:'80px 0'}}>
      <h1>Thanks — your download is on the way.</h1>
      <p className="lead">We emailed you the {pretty(asset)}. If it didn’t open automatically, check your new tab for the PDF.</p>
      <div className="sp-16"></div>
      <a className="btn" href="/">Back to Home</a>
      <footer className="wrap" style={{padding:'40px 0'}}>
        <div className="foot">
          <small>© {year} MCF.DIGITAL</small>
          <div className="links"><a href="#top">Back to top</a></div>
        </div>
      </footer>
    </main>
  )
}
