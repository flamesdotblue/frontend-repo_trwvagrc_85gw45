import { motion } from 'framer-motion'
import { BadgeCheck, Leaf, HeartHandshake } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop"
              alt="barista"
              className="h-[420px] w-full rounded-3xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white px-4 py-3 shadow-lg">
              <p className="text-sm font-medium text-zinc-700">
                Serving smiles since 2016
              </p>
            </div>
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
            >
              Crafted with care, brewed with passion
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-zinc-600"
            >
              Aata Caffe is a neighborhood retreat where quality beans meet warm hospitality. We partner with sustainable farms, roast weekly, and bake in-house daily.
            </motion.p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: <BadgeCheck className="h-5 w-5 text-amber-700" />,
                  title: 'Single-origin beans',
                },
                { icon: <Leaf className="h-5 w-5 text-emerald-700" />, title: 'Eco-friendly' },
                {
                  icon: <HeartHandshake className="h-5 w-5 text-rose-700" />,
                  title: 'Community-first',
                },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex items-center gap-3 rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm"
                >
                  {f.icon}
                  <p className="text-sm font-medium text-zinc-800">{f.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
