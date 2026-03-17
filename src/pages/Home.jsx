import React from 'react'
import { Link } from 'react-router-dom'
import { site, guide, tours, stats } from '../data/content.js'
import './Home.css'

function Hero() {
  return (
    <section className="hero" aria-label="Welcome to Addis Tour Guide">
      <div
        className="hero-bg"
        style={{ backgroundImage: 'url(/img/cityscape.jpg)' }}
        role="img"
        aria-label="Aerial view of Addis Ababa, Ethiopia's capital city"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-content">
        <div className="hero-eyebrow label">
          <span className="hero-dot green" aria-hidden="true" />
          Local Guide · Addis Ababa, Ethiopia
        </div>
        <h1 className="heading-xl hero-title">{site.tagline}</h1>
        <p className="hero-subtitle">
          Discover Addis Ababa through the eyes of someone who calls it home.
          Abenezer Endale has been sharing Ethiopia's stories since 2019.
        </p>
        <div className="hero-actions">
          <Link to="/tours" className="btn btn-primary hero-btn-primary">
            Explore Tours
            <span aria-hidden="true">→</span>
          </Link>
          <Link to="/guide" className="btn btn-outline">
            Meet Your Guide
          </Link>
        </div>
      </div>
      <div className="hero-scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}

function StatsBar() {
  return (
    <div className="stats-bar" aria-label="Quick facts">
      <div className="container stats-inner">
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function IntroSection() {
  return (
    <section className="section intro-section" aria-labelledby="intro-heading">
      <div className="container intro-inner">
        <div className="intro-text">
          <div className="flag-bar" aria-hidden="true" />
          <p className="label intro-eyebrow">Why Choose a Local Guide</p>
          <h2 className="heading-lg" id="intro-heading">
            Real Ethiopia.<br />Real Stories.
          </h2>
          <p className="intro-body">
            Ethiopia is ancient, layered, and endlessly surprising. The best way
            to experience it is not through a tour bus window, but through the
            streets, markets, and conversations that only a local can unlock.
          </p>
          <p className="intro-body">
            Abenezer grew up in southern Ethiopia and has spent years guiding
            travellers through Addis Ababa — connecting people with the country's
            history, culture, food, and its extraordinary human warmth.
          </p>
          <Link to="/guide" className="btn btn-outline-dark intro-cta">
            Read Abenezer's Story
          </Link>
        </div>
        <div className="intro-image-wrap">
          <img
            src="/img/56106028_373432636716187_6558496012535595008_n.jpg"
            alt="Abenezer Endale, your local guide in Addis Ababa"
            className="intro-image"
            loading="lazy"
            width="520"
            height="620"
          />
          <div className="intro-badge" aria-hidden="true">
            <span className="badge-year">Since 2019</span>
            <span className="badge-label">Local guide</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ToursPreview() {
  const featured = tours.slice(0, 3)
  return (
    <section className="section tours-preview" aria-labelledby="tours-heading">
      <div className="container">
        <div className="section-header">
          <div className="flag-bar" aria-hidden="true" />
          <p className="label section-eyebrow">What's on offer</p>
          <h2 className="heading-lg" id="tours-heading">Tour Experiences</h2>
          <p className="section-desc">
            From half-day neighbourhood walks to full-day heritage journeys —
            every tour is guided personally by Abenezer.
          </p>
        </div>

        <ul className="tour-cards-grid" role="list">
          {featured.map(tour => (
            <li key={tour.id} className="tour-card-item">
              <article className="tour-card">
                <div className="tour-card-img-wrap">
                  <img
                    src={tour.image}
                    alt={`${tour.title} — tour in Addis Ababa`}
                    className="tour-card-img"
                    loading="lazy"
                    width="480"
                    height="300"
                  />
                  <div className="tour-card-duration label">{tour.duration}</div>
                </div>
                <div className="tour-card-body">
                  <h3 className="heading-sm tour-card-title">{tour.title}</h3>
                  <p className="tour-card-summary">{tour.summary}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="tours-preview-footer">
          <Link to="/tours" className="btn btn-outline-dark">
            View All Tours
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function ReviewsTeaser() {
  return (
    <section className="section reviews-teaser" aria-labelledby="reviews-teaser-heading">
      <div className="container reviews-teaser-inner">
        <div className="reviews-teaser-content">
          <div className="flag-bar" aria-hidden="true" />
          <p className="label reviews-teaser-eyebrow">Travellers agree</p>
          <h2 className="heading-lg" id="reviews-teaser-heading">
            Rated 4.9 / 5<br />on TripAdvisor
          </h2>
          <p className="reviews-teaser-body">
            47 verified reviews from travellers around the world — read their
            experiences and see why they keep recommending Abenezer.
          </p>
          <div className="reviews-teaser-actions">
            <a
              href={site.tripadvisorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              aria-label="Read our TripAdvisor reviews (opens in new tab)"
            >
              Read Reviews
              <span aria-hidden="true">↗</span>
            </a>
            <Link to="/reviews" className="btn btn-outline-dark">
              Reviews Page
            </Link>
          </div>
        </div>
        <div className="reviews-teaser-visual" aria-hidden="true">
          <div className="stars-display">
            {'★★★★★'.split('').map((s, i) => (
              <span key={i} className="star">{s}</span>
            ))}
          </div>
          <p className="reviews-attribution">Read real reviews on TripAdvisor →</p>
        </div>
      </div>
    </section>
  )
}

function ContactCTA() {
  return (
    <section className="section contact-cta-section" aria-labelledby="cta-heading">
      <div
        className="contact-cta-bg"
        style={{ backgroundImage: 'url(/img/cityscape.jpg)' }}
        role="img"
        aria-label="Cityscape of Addis Ababa"
      />
      <div className="contact-cta-overlay" aria-hidden="true" />
      <div className="container contact-cta-content">
        <h2 className="heading-lg cta-title" id="cta-heading">
          Ready to explore<br />with a local?
        </h2>
        <p className="cta-subtitle">
          Get in touch with Abenezer to plan your perfect Addis Ababa experience.
        </p>
        <Link to="/contact" className="btn btn-primary cta-btn">
          Plan Your Tour
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <IntroSection />
      <ToursPreview />
      <ReviewsTeaser />
      <ContactCTA />
    </>
  )
}
