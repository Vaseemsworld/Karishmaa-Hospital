import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const galleryItems = [
  { label: 'Hospital Entrance', span: 'col-span-2 row-span-2', height: 'h-72', image: '/images/entrance.jpg' },
  { label: 'ICU Ward', span: '', height: 'h-32', image: '/images/icu.jpg' },
  { label: 'Operation Theatre', span: '', height: 'h-32', image: '/images/ot.jpg' },
  { label: 'OPD Department', span: '', height: 'h-40', image: '/images/opd.jpg' },
  { label: 'Pharmacy', span: '', height: 'h-40', image: '/images/pharmacy.jpeg' },
  { label: 'Diagnostic Lab', span: '', height: 'h-40', image: '/images/lab.jpg' },
  { label: 'Patient Rooms', span: '', height: 'h-40', image: '/images/patient-room.jpg' },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeImage, setActiveImage] = useState(null)

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
            A Glimpse of <span className="gradient-text italic">Our Facilities</span>
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
              onClick={() => setActiveImage(item)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${item.span} ${item.height} border border-white/5 hover:border-[#00C9A7]/20 transition-all duration-300`}
            >
              {/* Image with zoom effect */}
              <img
                src={item.image}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover transition duration-500 hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25"></div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00C9A7]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-semibold bg-black/40 backdrop-blur-sm rounded-lg px-2 py-1 text-center">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Popup / Lightbox */}
        {activeImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img
                src={activeImage.image}
                alt={activeImage.label}
                className="w-full h-auto rounded-xl"
              />

              <button className="absolute top-3 right-3 bg-black/60 text-white px-3 py-1 rounded-lg">
                ✕
              </button>

              <p className="text-white text-center mt-3">{activeImage.label}</p>
            </div>
          </div>
        )}

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-8 p-4 rounded-2xl border border-[#00C9A7]/10 bg-[#00C9A7]/5 text-center"
        >
          <p className="text-[#00C9A7]/70 text-sm">
            📸 Replace these with actual hospital photos in the final version.
          </p>
        </motion.div> */}
      </div>
    </section>
  )
}