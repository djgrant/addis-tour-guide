import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { tours } from '../data/content.js'
import './Tours.css'

function PageHero() {
  return (
    <div className="page-hero tours-hero" aria-labelledby="tours-page-heading">
      <div
        className="page-hero-bg"
        style={{ backgroundImage: 'url(/img/jumbotron.jpg)' }}
        role="img"
        aria-label="Tour scenery in Ethiopia"
      />
      <div className="page-hero-overlay" aria-hidden="true" />
      <div className="container page-hero-content">
        <p className="label page-hero-eyebrow">What we offer</p>
        <h1 className="heading-xl page-hero-title" id="tours-page-heading">
          Tour Experiences
        </h1>
        <p className="page-hero-desc">
          Every tour is led personally by Abenezer — a local guide
          who knows Addis Ababa inside and out.
        </p>
      </div>
    </div>
  )
}

function TourDetail({ tour, onClose }) {
  React.useEffect(() => {
    const handleKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div
      className="tour-modal-overlay"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="tour-modal-title"
    >
      <div className="tour-modal">
        <button
          className="tour-modal-close"
          onClick={onClose}
          aria-label="Close tour details"
        >
          ✕
        </button>
        <div className="tour-modal-img-wrap">
          <img
            src={tour.image}
            alt={`${tour.title}`}
            className="tour-modal-img"
          />
        </div>
        <div className="tour-modal-body">
          <div className="tour-modal-meta">
            <span className="tour-meta-chip label">
              <span aria-hidden="true">⏱</span> {tour.duration}
            </span>
            <span className="tour-meta-chip label">
              <span aria-hidden="true">👥</span> {tour.groupSize}
            </span>
          </div>
          <h2 className="heading-md" id="tour-modal-title">{tour.title}</h2>
          <p className="tour-modal-summary">{tour.summary}</p>
          <div className="tour-modal-highlights">
            <p className="label tour-highlights-heading">What's included</p>
            <ul role="list">
              {tour.highlights.map((h, i) => (
                <li key={i} className="tour-highlight-item">
                  <span className="highlight-check" aria-hidden="true">✓</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="tour-modal-cta">
            <Link
              to="/contact"
              className="btn btn-primary"
              onClick={onClose}
            >
              Book This Tour
            </Link>
            <Link
              to="/guide"
              className="btn btn-outline-dark"
              onClick={onClose}
            >
              Meet Your Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function TourCard({ tour, onSelect }) {
  return (
    <article className="tour-full-card">
      <div className="tfc-img-wrap">
        <img
          src={tour.image}
          alt={`${tour.title} tour`}
          className="tfc-img"
          loading="lazy"
          width="600"
          height="380"
        />
        <div className="tfc-badges">
          <span className="tfc-badge label">
            <span aria-hidden="true">⏱</span> {tour.duration}
          </span>
          <span className="tfc-badge label">
            <span aria-hidden="true">👥</span> {tour.groupSize}
          </span>
        </div>
      </div>
      <div className="tfc-body">
        <h2 className="heading-md tfc-title">{tour.title}</h2>
        <p className="tfc-summary">{tour.summary}</p>
        <ul className="tfc-highlights" role="list" aria-label="Tour highlights">
          {tour.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="tfc-highlight">
              <span className="highlight-check" aria-hidden="true">✓</span>
              {h}
            </li>
          ))}
          {tour.highlights.length > 3 && (
            <li className="tfc-highlight-more">
              +{tour.highlights.length - 3} more highlights
            </li>
          )}
        </ul>
        <div className="tfc-actions">
          <button
            className="btn btn-outline-dark"
            onClick={() => onSelect(tour)}
            aria-label={`View full details for ${tour.title}`}
          >
            View Details
          </button>
          <Link to="/contact" className="btn btn-primary">
            Book Now
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function Tours() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <PageHero />
      <section className="section tours-list" aria-label="All available tours">
        <div className="container">
          <ul role="list" className="tours-full-list">
            {tours.map(tour => (
              <li key={tour.id}>
                <TourCard tour={tour} onSelect={setSelected} />
              </li>
            ))}
          </ul>
          <div className="tours-bottom-cta">
            <div className="tours-cta-box">
              <h2 className="heading-md">Can't find what you're looking for?</h2>
              <p>Abenezer builds fully custom tours around your interests, group size, and schedule.</p>
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {selected && (
        <TourDetail tour={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}
