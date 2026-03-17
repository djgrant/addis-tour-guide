import React from 'react'
import { Link } from '@tanstack/react-router'
import { guide } from '../data/content.js'
import './Guide.css'

export default function Guide() {
  return (
    <>
      <div className="page-hero guide-hero" aria-labelledby="guide-page-heading">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: 'url(/img/home-jumbotron.jpg)' }}
          role="img"
          aria-label="Addis Ababa landscape"
        />
        <div className="page-hero-overlay" aria-hidden="true" />
        <div className="container page-hero-content">
          <p className="label page-hero-eyebrow">Your local guide</p>
          <h1 className="heading-xl page-hero-title" id="guide-page-heading">
            {guide.name}
          </h1>
          <p className="page-hero-desc">
            Local Guide · Addis Ababa, Ethiopia · Since {guide.licencedSince}
          </p>
        </div>
      </div>

      <section className="section guide-bio-section" aria-label="Guide biography">
        <div className="container guide-bio-inner">

          <div className="guide-photo-col">
            <div className="guide-photo-wrap">
              <img
                src={guide.photo}
                alt="Abenezer Endale, local guide in Addis Ababa, Ethiopia"
                className="guide-photo"
                width="480"
                height="580"
              />
            </div>
            <div className="guide-credentials" aria-label="Guide credentials">
              {guide.credentials.map((c, i) => (
                <div key={i} className="credential-item">
                  <span className="credential-label label">{c.label}</span>
                  <span className="credential-value">{c.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="guide-text-col">
            <div className="flag-bar" aria-hidden="true" />
            <p className="label guide-eyebrow">About Abenezer</p>
            <h2 className="heading-lg guide-sub-heading">
              A calling, not just a job.
            </h2>
            {guide.bio.map((para, i) => (
              <p key={i} className="guide-bio-para">{para}</p>
            ))}

            <div className="guide-values" aria-label="Guiding values">
              {[
                { icon: '🌍', title: 'Authentic', desc: 'Real local knowledge — not a script.' },
                { icon: '🤝', title: 'Personal', desc: 'Small groups, direct access to your guide.' },
                { icon: '📖', title: 'Knowledgeable', desc: 'History, culture, language, and stories.' },
                { icon: '❤️', title: 'Passionate', desc: 'Ethiopia is home. Sharing it is a privilege.' },
              ].map((v, i) => (
                <div key={i} className="guide-value-item">
                  <span className="guide-value-icon" aria-hidden="true">{v.icon}</span>
                  <div>
                    <p className="guide-value-title">{v.title}</p>
                    <p className="guide-value-desc">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="guide-cta-row">
              <Link to="/tours" className="btn btn-primary">
                View Tours
              </Link>
              <Link to="/contact" className="btn btn-outline-dark">
                Get in Touch
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
