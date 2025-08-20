import React from 'react'
import Button from '../components/ui/Button.jsx'

export default function Hero({
  title = "Manage your team's tasks effortlessly",
  subtitle = 'Collaborate, track, and boost productivity with TaskFlow.',
  primaryCta = { label: 'Start Free Trial' },
  secondaryCta = { label: 'Learn More' },
}) {
  return (
    <section className="section py-16 px-10 sm:py-20" style={{ fontFamily: 'var(--font-sans)' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex-col items-center justify-center pl-[6vw]">
          <h1 className="text-6xl font-semibold tracking-tight text-gray-900 dark:text-white max-w-sm" style={{ fontFamily: 'var(--font-sans)' }}>{title}</h1>
          <p className="mt-4 text-3xl font-normal text-gray-600 dark:text-gray-400 max-w-md" style={{ fontFamily: 'var(--font-sans)' }}>{subtitle}</p>
          <div className="mt-8 flex items-center gap-4">
            <Button size="lg">{primaryCta.label}</Button>
            <Button variant="outline" size="lg">{secondaryCta.label}</Button>
          </div>
        </div>
        <div className="relative pr-[5vw]">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-4 bg-white dark:bg-gray-900">
            <div className="h-64 sm:h-72 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-lg grid place-items-center">
              <div className="w-11/12 max-w-md">
                <div className="h-3 rounded bg-blue-500/80 mb-3"></div>
                <div className="space-y-2">
                  <div className="h-10 rounded bg-blue-500/70"></div>
                  <div className="h-10 rounded bg-purple-500/70"></div>
                  <div className="h-10 rounded bg-green-500/70"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
