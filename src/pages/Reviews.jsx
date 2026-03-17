import React, { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { site, guide } from '../data/content.js'
import './Reviews.css'

function TripAdvisorWidget() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = site.tripadvisorWidgetScript
    script.async = true
    document.body.appendChild(script)
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="ta-widget-wrap">
      <div
        id="TA_linkingWidgetRedesign287"
        className="TA_linkingWidgetRedesign"
      >
        <ul
          id="Fl1j1038CZVK"
          className="TA_links lIGVlD"
        >
          <li id="KokHA38" className="DmUpB0">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={site.tripadvisorUrl}
              aria-label="View Addis Tour Guide on TripAdvisor (opens in new tab)"
            >
              <img
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                alt="TripAdvisor"
                width="200"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

const highlights = [
  {
    quote: "Abenezer organised an excellent one-day tour of Addis Ababa. He was highly responsive to my interests, tailoring the experience in ways that made the day both personal and memorable. I saw and learned things I never would have discovered on my own. He's friendly, engaging, and simply a pleasure to spend time with. I would wholeheartedly recommend him to any traveler looking to explore Addis Ababa.",
    author: "Gareth W.",
    date: "June 2025",
    rating: 5,
  },
  {
    quote: "He was accommodating to my schedule and planned a route for me to experience everything I wanted to see in my short time frame. He was extremely knowledgeable and personable, as well as an overall genuine good person. I learned a lot about the culture of Addis and the history of the rapidly developing city. I would recommend this to anyone who wants to have a rich experience.",
    author: "Roam17281727715",
    date: "August 2025",
    rating: 5,
  },
  {
    quote: "I really enjoy the tour! I had a stopover of 17 hours so I decided to book a guide and I was so lucky to meet Abenezer! A good mix of walking around and relaxing, we had lunch in Merkato after visiting the University and drank the best coffee in town!! Next stopover I'll book a tour in the mountains! Really amazing guide!",
    author: "Nicola S.",
    date: "March 2025",
    rating: 5,
  },
]

export default function Reviews() {
  return (
    <>
      <div className="page-hero reviews-hero" aria-labelledby="reviews-page-heading">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: 'url(/img/products-full-width.jpg)' }}
          role="img"
          aria-label="Travellers in Addis Ababa"
        />
        <div className="page-hero-overlay" aria-hidden="true" />
        <div className="container page-hero-content">
          <p className="label page-hero-eyebrow">What travellers say</p>
          <h1 className="heading-xl page-hero-title" id="reviews-page-heading">
            Reviews
          </h1>
          <p className="page-hero-desc">
            Rated 4.9 / 5 on TripAdvisor across 47 verified reviews.
          </p>
        </div>
      </div>

      <section className="section reviews-welcome" aria-labelledby="reviews-welcome-heading">
        <div className="container reviews-welcome-inner">
          <div className="reviews-welcome-text">
            <div className="flag-bar" aria-hidden="true" />
            <p className="label reviews-eyebrow">A message from your guide</p>
            <h2 className="heading-lg" id="reviews-welcome-heading">
              The traveller first.
            </h2>
            <p className="reviews-welcome-body">
              Welcome to Addis Ababa — Ethiopia's thriving capital city and
              historical center. My name is {guide.name} and it is a pleasure
              to welcome you to my city.
            </p>
            <p className="reviews-welcome-body">
              Every person I guide becomes part of my story. I am honoured by
              every review and motivated by every traveller's trust. Read what
              others have said, and see what awaits you.
            </p>
            <a
              href={site.tripadvisorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              aria-label="Read all reviews on TripAdvisor (opens in new tab)"
            >
              Read All Reviews on TripAdvisor
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="reviews-ta-col">
            <div className="reviews-ta-card">
              <div className="reviews-ta-header">
                <div className="stars-row" aria-label="4.9 star rating">
                  {'★★★★★'.split('').map((s, i) => (
                    <span key={i} className="star" aria-hidden="true">{s}</span>
                  ))}
                </div>
                <p className="reviews-ta-rating-text">4.9 / 5.0 · 47 reviews on TripAdvisor</p>
              </div>
              <TripAdvisorWidget />
              <p className="reviews-ta-note">
                Reviews are collected and verified by TripAdvisor from real travellers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section reviews-highlights-section" aria-labelledby="reviews-highlights-heading">
        <div className="container">
          <div className="section-header">
            <div className="flag-bar" aria-hidden="true" />
            <p className="label section-eyebrow">Selected highlights</p>
            <h2 className="heading-lg" id="reviews-highlights-heading">
              In travellers' own words
            </h2>
          </div>
          <ul className="review-cards" role="list">
            {highlights.map((r, i) => (
              <li key={i} className="review-card-item">
                <blockquote className="review-card">
                  <div className="review-stars" aria-label={`${r.rating} stars`}>
                    {'★'.repeat(r.rating).split('').map((s, j) => (
                      <span key={j} aria-hidden="true">{s}</span>
                    ))}
                  </div>
                  <p className="review-quote">"{r.quote}"</p>
                  <footer className="review-footer">
                    <cite className="review-author">{r.author}</cite>
                    <span className="review-origin">{r.date} · via TripAdvisor</span>
                  </footer>
                </blockquote>
              </li>
            ))}
          </ul>
          <div className="reviews-more-cta">
            <a
              href={site.tripadvisorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark"
              aria-label="See more reviews on TripAdvisor (opens in new tab)"
            >
              See more on TripAdvisor ↗
            </a>
          </div>
        </div>
      </section>

      <section className="section reviews-book-cta" aria-labelledby="reviews-book-heading">
        <div className="container reviews-book-inner">
          <h2 className="heading-lg" id="reviews-book-heading">
            Ready to create your own<br />unforgettable experience?
          </h2>
          <p>Join 47 verified TripAdvisor travellers. Book your tour today.</p>
          <Link to="/contact" className="btn btn-primary">
            Book a Tour
          </Link>
        </div>
      </section>
    </>
  )
}
