import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const items = [
  {
    name: 'Aata Signature Latte',
    desc: 'Creamy espresso with house-made spiced syrup',
    price: '$5.50',
    image:
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Croissant au Beurre',
    desc: 'Flaky, buttery layers baked fresh each morning',
    price: '$3.80',
    image:
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Iced Caramel Cold Brew',
    desc: 'Slow-steeped cold brew with caramel drizzle',
    price: '$4.90',
    image:
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Avocado Toast',
    desc: 'Sourdough, smashed avocado, chili flakes, microgreens',
    price: '$6.50',
    image:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Menu() {
  return (
    <section id="menu" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-amber-600" />
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            Featured Menu
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600">{item.desc}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                    {item.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
