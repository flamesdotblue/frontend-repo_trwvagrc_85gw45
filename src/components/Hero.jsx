import { motion } from 'framer-motion'
import { Coffee, Leaf, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-200/50 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-rose-200/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-amber-900"
            >
              <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
              <span className="text-xs font-medium">Freshly roasted. Locally loved.</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-6 text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl"
            >
              Asta
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-4 max-w-xl text-lg leading-7 text-zinc-600"
            >
              Sip into comfort with artisanal coffee, handcrafted pastries, and a cozy ambience. Where every cup tells a story.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#menu"
                className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-5 py-3 text-white shadow-lg shadow-amber-600/20 transition hover:bg-amber-700"
              >
                <Coffee className="h-5 w-5" /> View Menu
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 text-zinc-900 transition hover:bg-zinc-50"
              >
                <Leaf className="h-5 w-5 text-emerald-600" /> Our Story
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-10 flex items-center gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[
                    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=160&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=160&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=160&auto=format&fit=crop',
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="guest"
                      className="h-8 w-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <p className="text-sm text-zinc-600">
                  2k+ happy guests this month
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto h-[420px] w-full max-w-md"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-100 to-rose-100" />
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop"
              alt="Latte art"
              className="relative z-10 h-full w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 left-6 z-20 rounded-2xl bg-white/90 px-4 py-3 shadow-xl backdrop-blur">
              <div className="flex items-center gap-2 text-amber-700">
                <Coffee className="h-4 w-4" />
                House Special: Asta Signature Latte
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
