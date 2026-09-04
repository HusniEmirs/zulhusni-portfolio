import Header from './components/Header'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import ProfessionalHighlights from './sections/ProfessionalHighlights'
import Projects from './sections/Projects'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="site-main">
        <Hero />
        <ProfessionalHighlights />
        <Experience />
        <Projects />
      </main>
    </>
  )
}

export default App
