import { motion } from 'framer-motion'
import { Phone, CalendarDays, ShieldCheck, Award, Clock, Users } from 'lucide-react'

const floatCards = [
  {
    icon: <ShieldCheck size={20} className="text-[#00C9A7]" />,
    label: '24x7 Emergency',
    sub: 'Always Ready',
    delay: 0,
    pos: 'top-28 right-8 lg:top-32 lg:right-12',
  },
  {
    icon: <Award size={20} className="text-[#E8A838]" />,
    label: 'Trusted Care',
    sub: 'Multi-Speciality',
    delay: 1.5,
    pos: 'bottom-36 left-4 lg:bottom-40 lg:left-12',
  },
  {
    icon: <Users size={20} className="text-[#00C9A7]" />,
    label: '10,000+ Patients',
    sub: 'Served with Love',
    delay: 0.8,
    pos: 'top-64 left-2 lg:top-72 lg:left-8',
  },
]

export default function Hero() {
  return (
    <section id="home" className="hero-bg relative min-h-screen flex items-center overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/[0.02] pointer-events-none" />

      {/* Animated background orbs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-[#00C9A7]/5 blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-[#E8A838]/5 blur-[80px] pointer-events-none" style={{animationDelay:'1s'}} />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#00C9A7]/10 border border-[#00C9A7]/20 rounded-full px-4 py-2 mb-6"
          >
            <span className="live-dot w-2 h-2 rounded-full bg-[#00C9A7] inline-block" />
            <span className="text-[#00C9A7] text-sm font-semibold tracking-wide">
              Leading Multi-speciality Hospital in Alwar
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-title text-white mb-6"
          >
            Your Health,{' '}
            <span className="gradient-text italic">Our Sacred</span>
            <br />
            Commitment
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg"
          >
            Karishmaa Multi-Speciality Hospital brings world-class medical care to Alwar — 
            with expert doctors, advanced diagnostics, and compassionate service available around the clock.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="#appointment" className="btn-primary">
              <CalendarDays size={18} />
              Book Appointment
            </a>
            <a href="tel:+917310810884" className="btn-outline">
              <Phone size={18} />
              Emergency Call
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex gap-8 flex-wrap"
          >
            {[
              { n: '10K+', l: 'Patients Served' },
              { n: '15+', l: 'Specialities' },
              { n: '24/7', l: 'Emergency Care' },
              { n: '50+', l: 'Expert Staff' },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl font-bold gradient-text">{s.n}</p>
                <p className="text-white/50 text-xs font-medium mt-1">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Visual */}
        <div className="relative hidden lg:flex items-center justify-center h-[560px]">
          {/* Central circle */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-72 h-72"
          >
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#00C9A7]/20 animate-spin-slow" />
            {/* Middle ring */}
            <div className="absolute inset-6 rounded-full border border-[#00C9A7]/15" />
            {/* Inner glow circle */}
            <div className="absolute inset-12 rounded-full bg-gradient-to-br from-[#00C9A7]/20 to-[#E8A838]/10 flex items-center justify-center backdrop-blur-sm border border-[#00C9A7]/20">
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-[#00C9A7] to-[#00B896] flex items-center justify-center shadow-[0_0_30px_rgba(0,201,167,0.4)]">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M18 6v24M6 18h24" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="font-display text-white font-bold text-lg leading-tight">Karishmaa</p>
                <p className="text-[#00C9A7] text-[10px] tracking-widest font-semibold uppercase">Hospital</p>
              </div>
            </div>

            {/* Orbit dots */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: i % 2 === 0 ? '#00C9A7' : '#E8A838',
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${deg}deg) translateX(140px)`,
                  boxShadow: `0 0 10px ${i % 2 === 0 ? '#00C9A7' : '#E8A838'}`,
                }}
              />
            ))}
          </motion.div>

          {/* Floating info cards */}
          {floatCards.map((card) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + card.delay * 0.3 }}
              className={`absolute ${card.pos} card-glass rounded-2xl px-4 py-3 flex items-center gap-3 animate-float`}
              style={{ animationDelay: `${card.delay}s` }}
            >
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center">
                {card.icon}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{card.label}</p>
                <p className="text-white/50 text-xs">{card.sub}</p>
              </div>
            </motion.div>
          ))}

          {/* Emergency badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-12 right-4 bg-red-600/90 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center gap-2 border border-red-400/20"
          >
            <Clock size={16} className="text-white" />
            <div>
              <p className="text-white text-xs font-bold">24x7 EMERGENCY</p>
              <p className="text-red-200 text-[10px]">Always Available</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-white/30 text-xs tracking-widest uppercase">Scroll to explore</p>
        <div className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-[#00C9A7]"
          />
        </div>
      </motion.div>
    </section>
  )
}
