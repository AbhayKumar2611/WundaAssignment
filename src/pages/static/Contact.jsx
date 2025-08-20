import React from 'react'

export default function Contact() {
  return (
    <div className="section container-px py-[8vh] text-center" style={{ fontFamily: 'var(--font-sans)' }}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Have questions or need support? We'd love to hear from you.
        </p>
        <div className="bg-purple-600 text-white px-8 py-4 rounded-lg inline-block text-lg font-semibold mb-6">
          📧 support@taskflow.com
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Our team typically responds within 24 hours
        </p>
      </div>
    </div>
  )
}
