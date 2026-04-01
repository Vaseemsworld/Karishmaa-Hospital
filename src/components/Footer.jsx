import { Cross, Phone, MapPin, Mail, Heart } from 'lucide-react'

const specialties = [
  'General Medicine', 'Cardiology', 'Gynecology',
  'Orthopedics', 'Pediatrics', 'Oncology', 'General Surgery',
]

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Doctors', href: '#doctors' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-6 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060E1E] to-[#030a15] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00C9A7] to-[#00B896] flex items-center justify-center">
                <Cross size={17} className="text-white" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-display text-lg font-bold text-white">Karishmaa</p>
                <p className="text-[9px] text-[#00C9A7] font-semibold tracking-[0.15em] uppercase">Multi-Speciality Hospital</p>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-5">
              Bringing world-class healthcare to the Alwar region with compassion, 
              expertise, and modern medical technology.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-[#00C9A7] mt-0.5 flex-shrink-0" />
                <p className="text-white/40 text-xs">22, Surya Nagar, Khudanpuri, Alwar, Rajasthan — 301001</p>
              </div>
              <a href="tel:+917310810884" className="flex items-center gap-2 hover:text-[#00C9A7] transition-colors group">
                <Phone size={13} className="text-[#00C9A7] flex-shrink-0" />
                <p className="text-white/40 text-xs group-hover:text-[#00C9A7] transition-colors">+91 73108 10884</p>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/45 text-sm hover:text-[#00C9A7] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#00C9A7]/30 group-hover:bg-[#00C9A7] transition-colors duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Specialities</h4>
            <ul className="space-y-2.5">
              {specialties.map((s) => (
                <li key={s} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#E8A838]/40" />
                  <span className="text-white/45 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Working Hours</h4>
            <div className="space-y-3">
              {[
                { day: 'Monday – Saturday', time: '9:00 AM – 8:00 PM' },
                { day: 'Sunday', time: '10:00 AM – 4:00 PM' },
                { day: 'Emergency / ICU', time: '24 Hours / 7 Days' },
              ].map((h) => (
                <div key={h.day} className="border-b border-white/5 pb-3">
                  <p className="text-white/40 text-xs">{h.day}</p>
                  <p className="text-white font-medium text-sm mt-0.5">{h.time}</p>
                </div>
              ))}
            </div>

            {/* Emergency badge */}
            <div className="mt-4 p-3 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center gap-2">
              <span className="live-dot w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
              <p className="text-red-400 text-xs font-semibold">Emergency Active — 24x7</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Karishmaa Multi-Speciality Hospital. All rights reserved.
          </p>
          <p className="text-white/20 text-xs flex items-center gap-1">
            Designed with <Heart size={11} className="text-red-400 fill-red-400" /> for better health in Alwar
          </p>
        </div>
      </div>
    </footer>
  )
}
