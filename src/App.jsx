import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Footer from './components/Footer'
import { Coffee } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/40 to-white">
      {/* Simple top navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-600 text-white">
              <Coffee className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-zinc-900">
              Aata Caffe
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-700 sm:flex">
            <a href="#menu" className="transition hover:text-amber-700">Menu</a>
            <a href="#about" className="transition hover:text-amber-700">About</a>
            <a href="#contact" className="transition hover:text-amber-700">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Menu />
        <About />
        <section id="contact" className="relative">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-8 rounded-3xl bg-gradient-to-br from-amber-600 to-rose-500 p-8 text-white shadow-xl md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold">Visit Aata Caffe today</h3>
                <p className="mt-2 text-white/90">
                  Drop by for a cup, or reach out to book our space for your next meet-up.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="#menu"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 font-medium text-amber-700 shadow-sm transition hover:bg-amber-50"
                >
                  Explore Menu
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
