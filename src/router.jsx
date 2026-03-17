import { createRouter, createRoute, createRootRoute, redirect, Outlet } from '@tanstack/react-router'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Tours from './pages/Tours.jsx'
import Guide from './pages/Guide.jsx'
import Reviews from './pages/Reviews.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function RootLayout() {
  return (
    <div className="site-wrapper">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
})

const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Home })
const toursRoute = createRoute({ getParentRoute: () => rootRoute, path: '/tours', component: Tours })
const guideRoute = createRoute({ getParentRoute: () => rootRoute, path: '/guide', component: Guide })
const guidesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/guides',
  beforeLoad: () => { throw redirect({ to: '/guide' }) },
})
const reviewsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/reviews', component: Reviews })
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: '/contact', component: Contact })

const routeTree = rootRoute.addChildren([
  indexRoute,
  toursRoute,
  guideRoute,
  guidesRoute,
  reviewsRoute,
  contactRoute,
])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
})
