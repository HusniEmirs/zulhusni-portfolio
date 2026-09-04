import { useEffect, useRef, useState } from 'react'
import { portfolio } from '../data/portfolio'

type NavigationHref = (typeof portfolio.navigation)[number]['href']

const phaseOneSectionHrefs = new Set<NavigationHref>([
  '#home',
  '#highlights',
])

const navigationItems = portfolio.navigation.filter(({ href }) =>
  phaseOneSectionHrefs.has(href),
)

const initials = portfolio.siteIdentity.name
  .split(' ')
  .map((namePart) => namePart[0])
  .join('')
  .slice(0, 2)
  .toUpperCase()

type NavigationLinksProps = {
  readonly activeHref: NavigationHref
  readonly onNavigate: (href: NavigationHref) => void
}

function NavigationLinks({
  activeHref,
  onNavigate,
}: NavigationLinksProps) {
  return (
    <ul className="navigation-list">
      {navigationItems.map((item) => (
        <li key={item.href}>
          <a
            className="navigation-link"
            href={item.href}
            aria-current={activeHref === item.href ? 'location' : undefined}
            onClick={() => onNavigate(item.href)}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState<NavigationHref>(
    navigationItems[0]?.href ?? '#home',
  )
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      return
    }

    const sections: Array<{ href: NavigationHref; element: HTMLElement }> = []

    navigationItems.forEach(({ href }) => {
      const element = document.querySelector<HTMLElement>(href)

      if (element) {
        sections.push({ href, element })
      }
    })

    if (sections.length === 0) {
      return
    }

    const updateActiveSection = () => {
      const markerPosition = window.innerHeight * 0.3
      const activeSection = sections.find(({ element }) => {
        const { top, bottom } = element.getBoundingClientRect()

        return top <= markerPosition && bottom > markerPosition
      })

      if (activeSection) {
        setActiveHref(activeSection.href)
      }
    }

    const observer = new IntersectionObserver(updateActiveSection, {
      rootMargin: '-28% 0px -67% 0px',
      threshold: 0,
    })

    sections.forEach(({ element }) => observer.observe(element))
    updateActiveSection()

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const closeMenu = () => setIsMenuOpen(false)
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
        menuButtonRef.current?.focus()
      }
    }
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen])

  const handleNavigate = (href: NavigationHref) => {
    setActiveHref(href)
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="page-container header-inner">
        <a
          className="site-identity"
          href="#home"
          aria-label={`${portfolio.siteIdentity.name}, home`}
          onClick={() => handleNavigate('#home')}
        >
          <span className="identity-mark" aria-hidden="true">
            {initials}
          </span>
          <span className="identity-copy">
            <span className="identity-name">{portfolio.siteIdentity.name}</span>
            <span className="identity-role">{portfolio.siteIdentity.role}</span>
          </span>
        </a>

        <nav className="desktop-navigation" aria-label="Primary navigation">
          <NavigationLinks
            activeHref={activeHref}
            onNavigate={handleNavigate}
          />
        </nav>

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
          data-open={isMenuOpen}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span className="menu-toggle-icon" aria-hidden="true" />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!isMenuOpen}
      >
        <div className="page-container">
          <NavigationLinks
            activeHref={activeHref}
            onNavigate={handleNavigate}
          />
        </div>
      </nav>
    </header>
  )
}

export default Header
