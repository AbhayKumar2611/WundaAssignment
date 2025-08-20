import React from 'react'
import { MessageCircle, CheckCircle2, BarChart3 } from 'lucide-react'
import FeatureCard from '../components/ui/FeatureCard.jsx'

export default function Features() {
  const features = [
    {
      title: 'Real-time Collaboration',
      description: 'Instantly communicate and share updates with your team.',
      accent: 'primary',
      icon: MessageCircle,
    },
    {
      title: 'Task Tracking',
      description: 'Easily assign, monitor, and prioritize tasks.',
      accent: 'secondary',
      icon: CheckCircle2,
    },
    {
      title: 'Team Analytics',
      description: 'Gain insights into performance and productivity.',
      accent: 'primary',
      icon: BarChart3,
    },
  ]

  return (
    <section id="features" className="section py-[8vh] max-w-[85vw] mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>
      <h2 className="text-3xl sm:text-3xl font-semibold text-center text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-sans)' }}>Our Features</h2>
      <div className="mt-[4vh] grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  )
}
