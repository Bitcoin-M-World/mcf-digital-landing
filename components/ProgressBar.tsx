'use client'
import { useEffect } from 'react'

export default function ProgressBar(){
  useEffect(() => {
    const el = document.getElementById('progress')
    if(!el) return
    const onScroll = () => {
      const t = document.documentElement
      const p = t.scrollTop / (t.scrollHeight - t.clientHeight)
      el.style.transform = `scaleX(${p})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div id="progress" />
}
