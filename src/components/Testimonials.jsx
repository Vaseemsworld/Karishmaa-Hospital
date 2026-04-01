import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    city: 'Alwar, Rajasthan',
    text: 'Excellent treatment for my father\'s cardiac issue. The doctors were attentive, the ICU was well-equipped, and the staff was genuinely caring throughout our stay. Highly recommended.',
    rating: 5,
    dept: 'Cardiology',
  },
  {
    name: 'Sunita Sharma',
    city: 'Khudanpuri',
    text: 'I delivered my baby here and the experience was wonderful. The gynecology team made me feel so comfortable and safe. Best decision I made — the whole team was amazing.',
    rating: 5,
    dept: 'Gynecology',
  },
  {
    name: 'Mohammad Aslam',
    city: 'Alwar',
    text: 'Had my knee replacement surgery done here. Dr. sahab and team were very skilled. Recovery was smooth and the post-op care was exceptional. Thank you Karishmaa Hospital.',
    rating: 5,
    dept: 'Orthopedics',
  },
  {
    name: 'Priya Agarwal',
    city: 'Alwar, Rajasthan',
    text: 'Brought my child for high fever at midnight — the emergency staff responded immediately. No waiting, no panic. They handled everything professionally. Truly a 24x7 hospital.',
    rating: 5,
    dept: 'Pediatrics & Emergency',
  },
  {
    name: 'Vikram Singh',
    city: 'Behror',
    text: 'USG and CT scan done quickly with accurate results. The diagnostic center is modern and the technicians are very professional. Affordable prices compared to other hospitals in the area.',
    rating: 4,
    dept: 'Diagnostics',
  },
  {
    name: 'Neelam Verma',
    city: 'Alwar',
    text: 'Underwent surgery here last month. The operation theatre is hygienic and the surgical team was very experienced. The staff made sure I was comfortable at every step.',
    rating: 5,
    dept: 'General Surgery',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-[#00C9A7]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#00C9A7] text-sm font-semibold tracking-[0.15em] uppercase mb-3">Testimonials</p>
          <h2 className="section-title text-white mb-4">
            What Our{' '}
            <span className="gradient-text italic">Patients Say</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Real stories from patients who trusted us with their health. Their recovery is our greatest achievement.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl p-6 border border-white/5 hover:border-[#00C9A7]/15 transition-all duration-300 group"
              style={{ background: 'linear-gradient(135deg, rgba(0,201,167,0.04), rgba(10,22,40,0.8))' }}
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote size={32} className="text-[#00C9A7]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-[#E8A838] fill-[#E8A838]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/65 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>

              {/* Divider */}
              <div className="h-px bg-white/5 mb-4" />

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00C9A7]/30 to-[#0A1628] flex items-center justify-center border border-[#00C9A7]/20">
                    <span className="text-[#00C9A7] font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.city}</p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold tracking-wide text-[#00C9A7]/70 bg-[#00C9A7]/8 px-2.5 py-1 rounded-full border border-[#00C9A7]/15">
                  {t.dept}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
