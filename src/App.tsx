import Header from './components/Header'
import Hero from './sections/Hero'
import ProfessionalHighlights from './sections/ProfessionalHighlights'

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
      </main>
    </>
  )
}

export default App
