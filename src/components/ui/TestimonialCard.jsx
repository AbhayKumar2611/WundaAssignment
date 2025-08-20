import React from 'react'

export default function TestimonialCard({ avatarUrl, name, quote }) {
  return (
    <div className="rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 flex gap-4 items-start" style={{ fontFamily: 'var(--font-sans)' }}>
      <img src={avatarUrl} alt={name} className="h-15 w-15 rounded-full object-cover" />
      <div>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{quote}</p>
        <div className="mt-3 text-xl font-semibold text-gray-900 dark:text-white">{name}</div>
      </div>
    </div>
  )
}
