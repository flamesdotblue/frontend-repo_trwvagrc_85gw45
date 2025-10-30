import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-zinc-900">Asta</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Your cozy corner for specialty coffee, fresh bakes, and meaningful conversations.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-zinc-800">Visit us</h4>
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <MapPin className="h-4 w-4" /> 221 Brew St, Roastville
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <Phone className="h-4 w-4" /> (123) 456-7890
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <Mail className="h-4 w-4" /> hello@asta.com
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-zinc-800">Hours</h4>
            <p className="text-sm text-zinc-600">Mon–Fri: 7:00 AM – 8:00 PM</p>
            <p className="text-sm text-zinc-600">Sat–Sun: 8:00 AM – 9:00 PM</p>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Instagram" className="rounded-full border border-zinc-200 p-2 text-zinc-600 transition hover:bg-zinc-50">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="rounded-full border border-zinc-200 p-2 text-zinc-600 transition hover:bg-zinc-50">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="rounded-full border border-zinc-200 p-2 text-zinc-600 transition hover:bg-zinc-50">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-zinc-100 pt-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Asta. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
