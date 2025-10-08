'use client'

export default function ContactFab() {
  return (
    <a
      href="/contact"
      className="fab-contact"
      aria-label="Contact us"
    >
      {/* Simple chat icon */}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-3.5 3.5V16H6.5A2.5 2.5 0 0 1 4 13.5v-8Z" stroke="currentColor" strokeWidth="1.7" />
      </svg>
      <span>Contact</span>
    </a>
  )
}