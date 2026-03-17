import React from 'react'
import { Link } from 'react-router-dom'
import { guide, site, nav } from '../data/content.js'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">

        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-green">Addis</span>
            <span className="logo-dot"> · </span>
            <span className="logo-gold">Tour</span>
            <span className="logo-dot"> · </span>
            <span className="logo-red">Guide</span>
          </div>
          <p className="footer-tagline">{site.tagline}</p>
          <div className="flag-bar" aria-hidden="true" style={{ marginTop: '16px' }} />
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <p className="footer-nav-heading">Explore</p>
          <ul role="list">
            {nav.map(item => (
              <li key={item.path}>
                <Link to={item.path} className="footer-link">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-contact">
          <p className="footer-nav-heading">Get in touch</p>
          <address style={{ fontStyle: 'normal' }}>
            <p>
              <a href={`tel:${guide.phone}`} className="footer-link footer-contact-item">
                <span aria-hidden="true">📞</span>
                {guide.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${guide.email}`} className="footer-link footer-contact-item">
                <span aria-hidden="true">✉️</span>
                {guide.email}
              </a>
            </p>
            <p>
              <a
                href={site.tripadvisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link footer-contact-item"
                aria-label="Read reviews on TripAdvisor (opens in new tab)"
              >
                <span aria-hidden="true">⭐</span>
                Read reviews on TripAdvisor
              </a>
            </p>
          </address>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {year} {site.name}. All rights reserved. · Addis Ababa, Ethiopia</p>
        </div>
      </div>
    </footer>
  )
}
