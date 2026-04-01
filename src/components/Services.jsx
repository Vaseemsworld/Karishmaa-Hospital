import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Heart, Baby, Bone, Scissors, Brain, Microscope, 
  Stethoscope, Activity, Baby as BabyIcon
} from 'lucide-react'

const services = [
  {
    icon: <Stethoscope size={28} />,
    title: 'General Medicine',
    desc: 'Comprehensive diagnosis and treatment of common and complex medical conditions for all ages.',
    color: '#00C9A7',
    bg: 'rgba(0,201,167,0.08)',
  },
  {
    icon: <Heart size={28} />,
    title: 'Cardiology',
    desc: 'Advanced heart care with diagnostics including ECG, echocardiography, and cardiac monitoring.',
    color: '#E74C3C',
    bg: 'rgba(231,76,60,0.08)',
  },
  {
    icon: <Baby size={28} />,
    title: 'Gynecology & Obstetrics',
    desc: "Complete women's health services from prenatal care to delivery and postnatal support.",
    color: '#FF6BA8',
    bg: 'rgba(255,107,168,0.08)',
  },
  {
    icon: <Bone size={28} />,
    title: 'Orthopedics',
    desc: 'Expert treatment of bone, joint and muscle disorders including joint replacement surgeries.',
    color: '#E8A838',
    bg: 'rgba(232,168,56,0.08)',
  },
  {
    icon: <Scissors size={28} />,
    title: 'General Surgery',
    desc: 'Skilled surgical procedures with modern techniques ensuring faster recovery and precision.',
    color: '#00C9A7',
    bg: 'rgba(0,201,167,0.08)',
  },
  {
    icon: <Activity size={28} />,
    title: 'Pediatrics',
    desc: 'Specialized healthcare for infants, children and adolescents with gentle, expert care.',
    color: '#7C5CFC',
    bg: 'rgba(124,92,252,0.08)',
  },
  {
    icon: <Microscope size={28} />,
    title: 'Oncology',
    desc: 'Compassionate cancer care with early detection, treatment planning and supportive therapy.',
    color: '#E8A838',
    bg: 'rgba(232,168,56,0.08)',
  },
  {
    icon: <Brain size={28} />,
    title: 'Neurology',
    desc: 'Diagnosis and treatment of disorders affecting the brain, spinal cord and nervous system.',
    color: '#00C9A7',
    bg: 'rgba(0,201,167,0.08)',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-[#E8A838]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#00C9A7] text-sm font-semibold tracking-[0.15em] uppercase mb-3">Our Specialities</p>
          <h2 className="section-title text-white mb-4">
            World-Class Care,{' '}
            <span className="gradient-text italic">Every Department</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            From routine check-ups to complex surgeries — our team of specialists delivers 
            outstanding medical care with compassion.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 cursor-default overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              {/* Hover background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ background: service.bg }}
              />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: service.bg, color: service.color }}
                >
                  {service.icon}
                </div>
                <h3 className="text-white font-semibold text-base mb-2 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                  {service.desc}
                </p>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
