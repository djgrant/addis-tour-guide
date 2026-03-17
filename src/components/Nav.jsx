import React, { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { nav } from '../data/content.js'
import './Nav.css'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`nav-header${scrolled ? ' nav-scrolled' : ''}`} role="banner">
      <div className="container nav-inner">
        {/* Logo */}
        <Link to="/" className="nav-logo" aria-label="Addis Tour Guide — Home" onClick={closeMenu}>
          <span className="logo-text">
            <span className="logo-green">Addis</span>
            <span className="logo-dot" aria-hidden="true"> </span>
            <span className="logo-gold">Tour</span>
            <span className="logo-dot" aria-hidden="true"> </span>
            <span className="logo-red">Guide</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation">
          <ul className="nav-links" role="list">
            {nav.map(item => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  activeProps={{ className: 'nav-link nav-link-active' }}
                  inactiveProps={{ className: 'nav-link' }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="btn btn-primary nav-cta" aria-label="Book a tour with Abenezer">
                Book a Tour
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`nav-hamburger${menuOpen ? ' is-open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="ham-line" />
          <span className="ham-line" />
          <span className="ham-line" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul role="list">
            {nav.map(item => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  activeProps={{ className: 'mobile-nav-link active' }}
                  inactiveProps={{ className: 'mobile-nav-link' }}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="btn btn-primary mobile-cta"
                onClick={closeMenu}
              >
                Book a Tour
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="mobile-overlay"
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}
    </header>
  )
}
