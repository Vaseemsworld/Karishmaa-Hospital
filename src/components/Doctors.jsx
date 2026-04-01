import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Award } from 'lucide-react'

const doctors = [
  { name: 'Dr. Altaf Khan', specialty: 'MD - Physician', exp: '2+ Years', rating: 4.9 },
  { name: 'Dr. [Name]', specialty: 'Cardiology', exp: '15+ Years', rating: 4.8 },
  { name: 'Dr. [Name]', specialty: 'Gynecology & Obstetrics', exp: '10+ Years', rating: 5.0 },
  { name: 'Dr. [Name]', specialty: 'Orthopedics', exp: '14+ Years', rating: 4.9 },
  { name: 'Dr. [Name]', specialty: 'Pediatrics', exp: '8+ Years', rating: 4.7 },
  { name: 'Dr. [Name]', specialty: 'General Surgery', exp: '11+ Years', rating: 4.8 },
]

const gradients = [
  'from-[#00C9A7]/30 to-[#0A1628]',
  'from-[#E74C3C]/30 to-[#0A1628]',
  'from-[#FF6BA8]/30 to-[#0A1628]',
  'from-[#E8A838]/30 to-[#0A1628]',
  'from-[#7C5CFC]/30 to-[#0A1628]',
  'from-[#00C9A7]/30 to-[#0A1628]',
]

export default function Doctors() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="doctors" className="py-24 relative" ref={ref}>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00C9A7]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#00C9A7] text-sm font-semibold tracking-[0.15em] uppercase mb-3">Our Team</p>
          <h2 className="section-title text-white mb-4">
            Meet Our{' '}
            <span className="gradient-text italic">Expert Doctors</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            A dedicated team of experienced specialists committed to your health and well-being.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 cursor-default"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              {/* Doctor image placeholder */}
              <div className={`h-52 bg-gradient-to-b ${gradients[i]} relative flex items-end pb-4 px-5`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/5 border-2 border-white/10 flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="16" r="8" fill="rgba(255,255,255,0.2)"/>
                      <path d="M4 36c0-8.837 7.163-16 16-16s16 7.163 16 16" fill="rgba(255,255,255,0.1)"/>
                    </svg>
                  </div>
                  <p className="absolute bottom-3 right-4 text-white/30 text-[10px]">[ Photo ]</p>
                </div>

                {/* Rating badge */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1">
                  <Star size={10} className="text-[#E8A838] fill-[#E8A838]" />
                  <span className="text-white text-xs font-bold">{doc.rating}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-white font-semibold text-base mb-0.5">{doc.name}</h3>
                <p className="text-[#00C9A7] text-sm font-medium mb-3">{doc.specialty}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Award size={13} className="text-[#E8A838]" />
                    <span className="text-white/50 text-xs">{doc.exp} Experience</span>
                  </div>
                  <button className="text-xs font-semibold text-[#00C9A7] hover:text-white transition-colors duration-200">
                    Book →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-white/30 text-sm mt-8"
        >
          * Doctor profiles and photos will be updated with actual information.
        </motion.p>
      </div>
    </section>
  )
}
