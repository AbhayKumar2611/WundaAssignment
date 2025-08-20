import React from 'react'

export default function Pricing() {
  return (
    <div className="section container-px py-[8vh] text-center" style={{ fontFamily: 'var(--font-sans)' }}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Pricing Plans
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Choose the perfect plan for your team's productivity needs
        </p>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full inline-block text-lg font-semibold">
          Coming Soon
        </div>
        <p className="mt-6 text-gray-500 dark:text-gray-500">
          We're working hard to bring you flexible pricing options
        </p>
      </div>
    </div>
  )
}
