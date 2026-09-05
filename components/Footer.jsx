import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-10">
          <div>
            <h2 className="font-serif text-xl font-semibold">
              Join Our Newsletter
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Get the latest properties and special offers
            </p>
          </div>

          <div className="flex w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-gray-500 focus:border-indigo-500"
            />

            <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold transition hover:bg-indigo-700">
              <Send className="h-4 w-4" />
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-14 md:grid-cols-4">
        {/* Brand */}
        <div>
          {/* Logo */}
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white p-2">
            <img
              src="/logo.png"
              alt="Ashyaana"
              className="h-full w-full object-contain"
            />
          </div>

          <p className="max-w-xs text-sm font-sans leading-6 text-gray-400">
            Premier destination for luxury real estate. Connecting
            experienced buyers with exceptional properties worldwide.
          </p>

          {/* Contact Information */}
          <div className="mt-6 space-y-3 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <Phone className="h-4 w-4 text-gray-400" />
              </div>
              <span>0790115957</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <Mail className="h-4 w-4 text-gray-400" />
              </div>
              <span>info@ashyanaa.com</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <MapPin className="h-4 w-4 text-gray-400" />
              </div>
              <span>Kabul, Afghanistan</span>
            </div>
          </div>
        </div>


        {/* Company */}
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-400">
            Company
          </h3>

          <ul className="space-y-5 text-sm text-gray-400">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Properties */}
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-400">
            Properties
          </h3>

          <ul className="space-y-5 text-sm text-gray-400">
            <li>All Properties</li>
            <li>Villas</li>
            <li>Apartments</li>
            <li>Offices</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-400">
            Support
          </h3>

          <ul className="space-y-5 text-sm text-gray-400">
            <li>FAQs</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-xs text-gray-500">
          <p>© 2026 Ashyaana</p>

          <div className="flex gap-6">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
