import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button.jsx'

function Navbar({ isDark, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-200'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <span className='text-2xl font-bold'>
              <span className='text-gray-900 dark:text-white'>Task</span>
              <span className='text-blue-600'>Flow</span>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <NavLink 
              to='/features' 
              className={({ isActive }) =>
                `text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${
                  isActive ? 'text-blue-600 dark:text-blue-400' : ''
                }`
              }
            >
              Features
            </NavLink>
            <NavLink 
              to='/pricing'
              className={({ isActive }) =>
                `text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${
                  isActive ? 'text-blue-600 dark:text-blue-400' : ''
                }`
              }
            >
              Pricing
            </NavLink>  
            <NavLink 
              to='/about'
              className={({ isActive }) =>
                `text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${
                  isActive ? 'text-blue-600 dark:text-blue-400' : ''
                }`
              }
            >
              About
            </NavLink>
            <NavLink 
              to='/contact'
              className={({ isActive }) =>
                `text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${
                  isActive ? 'text-blue-600 dark:text-blue-400' : ''
                }`
              }
            >
              Contact
            </NavLink>
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? '🌞' : '🌙'}
            </button>
            <Button size="sm">Get Started</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className='md:hidden flex items-center space-x-2'>
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? '🌞' : '🌙'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden py-4 border-t border-gray-200 dark:border-gray-700'>
            <div className='flex flex-col space-y-4'>
              <NavLink 
                to='/features' 
                className={({ isActive }) =>
                  `text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${
                    isActive ? 'text-blue-600 dark:text-blue-400' : ''
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </NavLink>
              <NavLink 
                to='/pricing'
                className={({ isActive }) =>
                  `text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${
                    isActive ? 'text-blue-600 dark:text-blue-400' : ''
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </NavLink>
              <NavLink 
                to='/about'
                className={({ isActive }) =>
                  `text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${
                    isActive ? 'text-blue-600 dark:text-blue-400' : ''
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to='/contact'
                className={({ isActive }) =>
                  `text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${
                    isActive ? 'text-blue-600 dark:text-blue-400' : ''
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              <Button size="sm" className="self-start">Get Started</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
