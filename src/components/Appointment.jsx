import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { CalendarDays, User, Phone, Stethoscope, CheckCircle2 } from 'lucide-react'

const departments = [
  'General Medicine', 'Cardiology', 'Gynecology & Obstetrics',
  'Orthopedics', 'General Surgery', 'Pediatrics', 'Oncology',
  'Neurology', 'Emergency', 'Diagnostics (USG/CT/X-Ray)'
]

export default function Appointment() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', dept: '', date: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/30 transition-all duration-200 focus:outline-none focus:border-[#00C9A7] focus:bg-white/[0.07]"

  return (
    <section id="appointment" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00C9A7]/3 to-transparent pointer-events-none" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-1 bg-gradient-to-r from-transparent via-[#00C9A7]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#00C9A7] text-sm font-semibold tracking-[0.15em] uppercase mb-3">Book Now</p>
            <h2 className="section-title text-white mb-6">
              Schedule Your{' '}
              <span className="gradient-text italic">Appointment</span>{' '}
              Today
            </h2>
            <p className="text-white/55 leading-relaxed mb-8">
              Don't wait for health concerns to grow. Book an appointment with our specialists 
              and get the care you deserve — quickly, comfortably, and affordably.
            </p>

            {[
              { icon: <CalendarDays size={20} className="text-[#00C9A7]" />, title: 'Flexible Scheduling', desc: 'Morning to evening OPD slots available daily' },
              { icon: <Stethoscope size={20} className="text-[#E8A838]" />, title: 'All Specialities', desc: 'Expert doctors available across 10+ departments' },
              { icon: <Phone size={20} className="text-[#00C9A7]" />, title: 'Confirm via Call', desc: 'We\'ll call you to confirm your appointment time' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  <p className="text-white/45 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}

            {/* Contact box */}
            <div className="mt-8 p-5 rounded-2xl border border-white/8 bg-white/[0.02]">
              <p className="text-white/40 text-xs uppercase tracking-wider font-semibold mb-2">Or Call Directly</p>
              <a href="tel:+917310810884" className="text-[#00C9A7] font-display font-bold text-2xl hover:text-white transition-colors duration-200">
                +91 73108 10884
              </a>
              <p className="text-white/30 text-xs mt-1">Available 24x7 for emergencies</p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="rounded-3xl p-8 border border-white/8"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))' }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-[#00C9A7]/15 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={36} className="text-[#00C9A7]" />
                </div>
                <h3 className="section-title text-white text-2xl mb-3">Appointment Requested!</h3>
                <p className="text-white/55 leading-relaxed mb-6">
                  Thank you! We've received your request and will call you shortly to confirm your appointment.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary"
                >
                  Book Another
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-white font-display font-bold text-2xl mb-6">Request an Appointment</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className={inputClass}
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className={inputClass}
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                      Department / Speciality *
                    </label>
                    <select
                      className={inputClass}
                      value={form.dept}
                      onChange={e => setForm({ ...form, dept: e.target.value })}
                      required
                      style={{ background: 'rgba(255,255,255,0.05)' }}
                    >
                      <option value="" style={{ background: '#0A1628' }}>Select Department</option>
                      {departments.map(d => (
                        <option key={d} value={d} style={{ background: '#0A1628' }}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      className={inputClass}
                      value={form.date}
                      onChange={e => setForm({ ...form, date: e.target.value })}
                      style={{ colorScheme: 'dark' }}
                    />
                  </div>

                  <div>
                    <label className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                      Message / Symptoms (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your symptoms or reason for visit..."
                      className={`${inputClass} resize-none`}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center py-4 text-base mt-2">
                    <CalendarDays size={18} />
                    Request Appointment
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
