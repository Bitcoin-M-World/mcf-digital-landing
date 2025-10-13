import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact MCF.DIGITAL | Talk to an Engineer',
  description:
    'Questions on flare mitigation, netback uplift, hosting or JV. Send details or book a 15-minute fit call. We reply with clear steps and a pricing path.',
  openGraph: {
    title: 'Contact MCF.DIGITAL | Talk to an Engineer',
    description:
      'Questions on flare mitigation, netback uplift, hosting or JV. Send details or book a 15-minute fit call. We reply with clear steps and a pricing path.',
    type: 'website',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return <ContactForm />
}
