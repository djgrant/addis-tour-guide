import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-inner">
        <div className="flag-bar" aria-hidden="true" style={{ margin: '0 auto 24px' }} />
        <p className="label not-found-code">404</p>
        <h1 className="heading-lg not-found-heading">Page not found</h1>
        <p className="not-found-body">
          The page you're looking for doesn't exist. But there's plenty to explore in Addis Ababa.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">Go to Homepage</Link>
          <Link to="/tours" className="btn btn-outline-dark">View Tours</Link>
        </div>
      </div>
    </div>
  )
}
