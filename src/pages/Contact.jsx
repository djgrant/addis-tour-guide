import React, { useState } from 'react'
import { guide, site } from '../data/content.js'
import './Contact.css'

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function ContactInfo() {
  return (
    <aside className="contact-info" aria-label="Contact information">
      <div className="flag-bar" aria-hidden="true" />
      <p className="label contact-eyebrow">Get in touch</p>
      <h2 className="heading-lg contact-info-heading">
        Let's plan your experience.
      </h2>
      <p className="contact-info-intro">
        Reach out directly to Abenezer to discuss your interests, travel dates,
        group size, and any questions you have. He'll get back to you promptly.
      </p>

      <div className="contact-methods">
        <div className="contact-method">
          <span className="contact-method-icon contact-method-icon--whatsapp" aria-hidden="true">
            <WhatsAppIcon />
          </span>
          <div>
            <p className="contact-method-label label">WhatsApp</p>
            <a
              href={guide.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method-value"
              aria-label={`WhatsApp Abenezer at ${guide.phone}`}
            >
              {guide.phone}
            </a>
          </div>
        </div>
        <div className="contact-method">
          <span className="contact-method-icon" aria-hidden="true">✉️</span>
          <div>
            <p className="contact-method-label label">Email</p>
            <a href={`mailto:${guide.email}`} className="contact-method-value">
              {guide.email}
            </a>
          </div>
        </div>
        <div className="contact-method">
          <span className="contact-method-icon" aria-hidden="true">📍</span>
          <div>
            <p className="contact-method-label label">Location</p>
            <span className="contact-method-value">{guide.location}</span>
          </div>
        </div>
        <div className="contact-method">
          <span className="contact-method-icon" aria-hidden="true">⭐</span>
          <div>
            <p className="contact-method-label label">TripAdvisor</p>
            <a
              href={site.tripadvisorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method-value"
              aria-label="View Addis Tour Guide on TripAdvisor (opens in new tab)"
            >
              View our reviews ↗
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    tourInterest: '',
    dates: '',
    groupSize: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your name.'
    if (!form.email.trim()) errs.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Please enter a valid email address.'
    if (!form.message.trim()) errs.message = 'Please tell us what you have in mind.'
    return errs
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setStatus('sending')

    const mailto = `mailto:${guide.email}?subject=Tour Enquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nTour Interest: ${form.tourInterest}\nPreferred Dates: ${form.dates}\nGroup Size: ${form.groupSize}\n\nMessage:\n${form.message}`
    )}`

    window.location.href = mailto
    setTimeout(() => setStatus('sent'), 500)
  }

  if (status === 'sent') {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span className="form-success-icon" aria-hidden="true">✓</span>
        <h3 className="heading-sm">Thank you!</h3>
        <p>Your message has been sent. Abenezer will get back to you soon.</p>
        <button
          className="btn btn-outline-dark"
          onClick={() => { setStatus('idle'); setForm({ name:'',email:'',phone:'',tourInterest:'',dates:'',groupSize:'',message:'' }) }}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      aria-label="Contact form"
      noValidate
    >
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Your name <span aria-hidden="true" className="form-required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`form-input${errors.name ? ' form-input-error' : ''}`}
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            autoComplete="name"
            required
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p className="form-error" id="name-error" role="alert">{errors.name}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email address <span aria-hidden="true" className="form-required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-input${errors.email ? ' form-input-error' : ''}`}
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            autoComplete="email"
            required
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p className="form-error" id="email-error" role="alert">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Phone / WhatsApp <span className="form-optional">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
            value={form.phone}
            onChange={handleChange}
            placeholder="+44 7700 900000"
            autoComplete="tel"
          />
        </div>
        <div className="form-group">
          <label htmlFor="groupSize" className="form-label">
            Group size <span className="form-optional">(optional)</span>
          </label>
          <select
            id="groupSize"
            name="groupSize"
            className="form-input form-select"
            value={form.groupSize}
            onChange={handleChange}
          >
            <option value="">Select…</option>
            <option value="1">Solo traveller</option>
            <option value="2">2 people</option>
            <option value="3-5">3–5 people</option>
            <option value="6-10">6–10 people</option>
            <option value="10+">10+ people</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="tourInterest" className="form-label">
            Tour interest <span className="form-optional">(optional)</span>
          </label>
          <select
            id="tourInterest"
            name="tourInterest"
            className="form-input form-select"
            value={form.tourInterest}
            onChange={handleChange}
          >
            <option value="">Any / Not sure yet</option>
            <option value="city-highlights">Addis Ababa City Highlights</option>
            <option value="cultural-immersion">Cultural Immersion Walk</option>
            <option value="history-heritage">History & Heritage Day</option>
            <option value="day-trip">Debre Libanos Day Trip</option>
            <option value="custom">Custom Tour</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dates" className="form-label">
            Preferred dates <span className="form-optional">(optional)</span>
          </label>
          <input
            type="text"
            id="dates"
            name="dates"
            className="form-input"
            value={form.dates}
            onChange={handleChange}
            placeholder="e.g. April 10–12, 2025"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Your message <span aria-hidden="true" className="form-required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          className={`form-input form-textarea${errors.message ? ' form-input-error' : ''}`}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell Abenezer about your interests, questions, or anything you'd like to experience in Ethiopia…"
          required
          aria-required="true"
          aria-describedby={errors.message ? 'message-error' : undefined}
          rows={5}
        />
        {errors.message && (
          <p className="form-error" id="message-error" role="alert">{errors.message}</p>
        )}
      </div>

      <div className="form-footer">
        <button
          type="submit"
          className="btn btn-primary form-submit"
          disabled={status === 'sending'}
          aria-busy={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
        <p className="form-disclaimer">
          This will open your email client. Alternatively, call or WhatsApp Abenezer directly.
        </p>
      </div>
    </form>
  )
}

export default function Contact() {
  return (
    <>
      <div className="page-hero contact-hero" aria-labelledby="contact-page-heading">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: 'url(/img/cityscape.jpg)' }}
          role="img"
          aria-label="Addis Ababa cityscape"
        />
        <div className="page-hero-overlay" aria-hidden="true" />
        <div className="container page-hero-content">
          <p className="label page-hero-eyebrow">We'd love to hear from you</p>
          <h1 className="heading-xl page-hero-title" id="contact-page-heading">
            Contact
          </h1>
          <p className="page-hero-desc">
            Plan your perfect Addis Ababa experience with a local who cares.
          </p>
        </div>
      </div>

      <section className="section contact-section" aria-label="Contact">
        <div className="container contact-inner">
          <ContactInfo />
          <div className="contact-form-col">
            <h2 className="heading-md contact-form-heading">Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
