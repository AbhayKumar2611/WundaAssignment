import React from 'react'

export default function About() {
  return (
    <div className="section container-px py-[8vh] text-center" style={{ fontFamily: 'var(--font-sans)' }}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          About TaskFlow
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          We build delightful productivity tools that help teams collaborate, 
          track progress, and achieve their goals efficiently.
        </p>
        <div className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block text-lg font-medium mb-4">
          Our Mission
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          To empower teams worldwide with intuitive tools that make work more 
          enjoyable and productive, fostering collaboration and success.
        </p>
      </div>
    </div>
  )
}
