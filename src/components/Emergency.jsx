import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Zap, ScanLine, Waves, RadioTower } from 'lucide-react'

const diagnostics = [
  {
    icon: <Waves size={32} className="text-[#00C9A7]" />,
    title: 'Ultrasound (USG)',
    desc: 'High-resolution imaging for abdomen, pelvis, cardiac and vascular assessments.',
    tag: 'Available Daily',
  },
  {
    icon: <ScanLine size={32} className="text-[#E8A838]" />,
    title: 'CT Scan',
    desc: 'Advanced cross-sectional imaging for precise diagnosis of complex conditions.',
    tag: '24x7 Service',
  },
  {
    icon: <RadioTower size={32} className="text-[#00C9A7]" />,
    title: 'X-Ray',
    desc: 'Instant radiographic imaging for bones, chest, and emergency diagnostics.',
    tag: 'Instant Results',
  },
]

export default function Emergency() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const diagRef = useRef(null)
  const diagInView = useInView(diagRef, { once: true, margin: '-80px' })

  return (
    <>
      {/* Emergency Strip */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="emergency-strip py-8"
        ref={ref}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
                  <Zap size={28} className="text-white" />
                </div>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <span className="live-dot w-2 h-2 rounded-full bg-red-500 inline-block" />
                </span>
              </div>
              <div>
                <p className="text-white text-2xl font-display font-bold">24x7 Emergency & Trauma Care</p>
                <p className="text-red-100/80 text-sm mt-0.5">
                  Our emergency team is always ready — immediate response, every time.
                </p>
              </div>
            </div>
            <a
              href="tel:+917310810884"
              className="flex items-center gap-3 bg-white text-red-600 font-bold px-8 py-4 rounded-2xl hover:bg-red-50 transition-all duration-200 shadow-xl flex-shrink-0 text-lg"
            >
              <Phone size={22} />
              +91 73108 10884
            </a>
          </div>
        </div>
      </motion.section>

      {/* Diagnostics */}
      <section className="py-24 relative" ref={diagRef}>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#00C9A7]/4 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={diagInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-[#00C9A7] text-sm font-semibold tracking-[0.15em] uppercase mb-3">Diagnostics</p>
            <h2 className="section-title text-white mb-4">
              Advanced Imaging &{' '}
              <span className="gradient-text italic">Diagnostics</span>
            </h2>
            <p className="text-white/50 max-w-lg mx-auto">
              Accurate diagnosis is the foundation of great healthcare. Our state-of-the-art 
              diagnostic center delivers results you can trust.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {diagnostics.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 30 }}
                animate={diagInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative rounded-3xl p-8 border border-white/5 hover:border-[#00C9A7]/20 transition-all duration-300 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))' }}
              >
                <div className="absolute top-4 right-4 bg-[#00C9A7]/10 text-[#00C9A7] text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-[#00C9A7]/20">
                  {d.tag}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-[#00C9A7]/8 border border-[#00C9A7]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {d.icon}
                </div>

                <h3 className="text-white text-xl font-semibold font-display mb-3">{d.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{d.desc}</p>

                {/* Bottom shine line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C9A7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
