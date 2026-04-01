import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Award, Stethoscope, Clock, TrendingUp, Heart } from 'lucide-react'

const stats = [
  { icon: <Users size={22} className="text-[#00C9A7]" />, value: '10,000+', label: 'Patients Treated', color: '#00C9A7' },
  { icon: <Stethoscope size={22} className="text-[#E8A838]" />, value: '15+', label: 'Medical Specialities', color: '#E8A838' },
  { icon: <Award size={22} className="text-[#00C9A7]" />, value: '50+', label: 'Expert Staff Members', color: '#00C9A7' },
  { icon: <Clock size={22} className="text-[#E8A838]" />, value: '24 / 7', label: 'Emergency Services', color: '#E8A838' },
  { icon: <Heart size={22} className="text-[#00C9A7]" />, value: '98%', label: 'Patient Satisfaction', color: '#00C9A7' },
  { icon: <TrendingUp size={22} className="text-[#E8A838]" />, value: '10+', label: 'Years of Excellence', color: '#E8A838' },
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-14 relative overflow-hidden">
      {/* Background line */}
      <div className="absolute inset-0 border-y border-white/5" />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(0,201,167,0.03) 0%, rgba(232,168,56,0.03) 50%, rgba(0,201,167,0.03) 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center group"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${stat.color}12`, border: `1px solid ${stat.color}20` }}
              >
                {stat.icon}
              </div>
              <p
                className="font-display font-bold text-2xl mb-1"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>
              <p className="text-white/45 text-xs leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
