import React, { useEffect, useMemo, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/common/Navbar.jsx'
import Footer from './components/common/Footer.jsx'
import Home from './pages/Home.jsx'
import Pricing from './pages/static/Pricing.jsx'
import About from './pages/static/About.jsx'
import Contact from './pages/static/Contact.jsx'

function App() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(() => {
    const stored = localStorage.getItem('tf-theme')
    if (stored === 'dark') return true
    if (stored === 'light') return false
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDarkModeEnabled) {
      root.classList.add('dark')
      localStorage.setItem('tf-theme', 'dark')
      console.log('Dark mode enabled')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('tf-theme', 'light')
      console.log('Light mode enabled')
    }
  }, [isDarkModeEnabled])

  const handleToggleTheme = () => setIsDarkModeEnabled((v) => !v)

  const appShellClassName = useMemo(
    () => 'min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200',
    []
  )

  return (
    <div className={appShellClassName}>
      <Navbar isDark={isDarkModeEnabled} onToggleTheme={handleToggleTheme} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Home initialSection="features" />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-started" element={<Home initialSection="hero" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
