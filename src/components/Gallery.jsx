import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ImageIcon } from 'lucide-react'

const galleryItems = [
  { label: 'Hospital Entrance', span: 'col-span-2 row-span-2', height: 'h-72' },
  { label: 'ICU Ward', span: '', height: 'h-32' },
  { label: 'Operation Theatre', span: '', height: 'h-32' },
  { label: 'OPD Department', span: '', height: 'h-40' },
  { label: 'Pharmacy', span: '', height: 'h-40' },
  { label: 'Diagnostic Lab', span: '', height: 'h-40' },
  { label: 'Patient Rooms', span: '', height: 'h-40' },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="gallery" className="py-24 relative" ref={ref}>
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-[#E8A838]/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#00C9A7] text-sm font-semibold tracking-[0.15em] uppercase mb-3">Gallery</p>
          <h2 className="section-title text-white mb-4">
            A Glimpse of{' '}
            <span className="gradient-text italic">Our Facilities</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Modern infrastructure designed for patient comfort, safety, and world-class care.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${item.span} ${item.height} bg-gradient-to-br from-[#0F2040] to-[#060E1E] border border-white/5 hover:border-[#00C9A7]/20 transition-all duration-300`}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <ImageIcon size={28} className="text-white/20 mb-2" />
                <p className="text-white/25 text-xs text-center px-3">{item.label}</p>
                <p className="text-white/15 text-[9px] mt-1">[ Replace with photo ]</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00C9A7]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-semibold bg-black/40 backdrop-blur-sm rounded-lg px-2 py-1 text-center">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-8 p-4 rounded-2xl border border-[#00C9A7]/10 bg-[#00C9A7]/5 text-center"
        >
          <p className="text-[#00C9A7]/70 text-sm">
            📸 <span className="font-semibold">Photo placeholders</span> — Replace these with actual hospital photos in the final version.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
