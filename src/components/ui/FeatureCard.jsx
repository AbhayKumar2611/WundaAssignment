import React from 'react'

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  accent = 'primary',
  className = '' 
}) {
  const iconBgColor = accent === 'secondary' ? 'bg-purple-600' : 'bg-blue-600'

  console.log('FeatureCard render:', { Icon, title, iconBgColor }) // Debug log

  return (
    <div className={`p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-900 ${className}`} style={{ fontFamily: 'var(--font-sans)' }}>
      <div className='flex items-center gap-4'>
        <div className={`w-12 h-12 ${iconBgColor} rounded-full flex items-center justify-center mb-4`}>
        {Icon ? (
          <Icon className="w-6 h-6 text-white" />
        ) : (
          <span className="text-white text-xs">No Icon</span>
        )}
      </div>
      <h3 className="text-2xl font-normal text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      </div>
    
      <p className="text-black-200 dark:text-gray-300 text-md font-normal">
        {description}
      </p>
    </div>
  )
}
