import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Award } from "lucide-react";
import { image } from "framer-motion/client";

const doctors = [
  {
    image: "./Dr.Altaf khan.avif",
    name: "Dr. Altaf Khan",
    specialty: "MD - Physician",
    exp: "2+ Years",
    rating: 4.9,
  },
  {
    image: "./Dr.Neha Agarwal.jpg",
    name: "Dr. Neha Agarwal",
    specialty: "Cardiology",
    exp: "5+ Years",
    rating: 4.8,
  },
  {
    image: "./Dr.Pooja-Jain.jpg",
    name: "Dr. Pooja Jain",
    specialty: "Gynecology & Obstetrics",
    exp: "7+ Years",
    rating: 5.0,
  },
  {
    image: "./Dr.Juned-Khan.avif",
    name: "Dr. Juned Khan",
    specialty: "Orthopedics",
    exp: "4+ Years",
    rating: 4.9,
  },
  {
    image: "./Dr.Hamja ali.avif",
    name: "Dr. Hamja Ali",
    specialty: "Pediatrics",
    exp: "8+ Years",
    rating: 4.7,
  },
  {
    image: "./Dr.Hugo Rodriguez.jpg",
    name: "Dr. Hugo Rodriguez",
    specialty: "General Surgery",
    exp: "11+ Years",
    rating: 4.8,
  },
];

const gradients = [
  "from-[#00C9A7]/30 to-[#0A1628]",
  "from-[#E74C3C]/30 to-[#0A1628]",
  "from-[#FF6BA8]/30 to-[#0A1628]",
  "from-[#E8A838]/30 to-[#0A1628]",
  "from-[#7C5CFC]/30 to-[#0A1628]",
  "from-[#00C9A7]/30 to-[#0A1628]",
];

export default function Doctors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
          <p className="text-[#00C9A7] text-sm font-semibold tracking-[0.15em] uppercase mb-3">
            Our Team
          </p>
          <h2 className="section-title text-white mb-4">
            Meet Our{" "}
            <span className="gradient-text italic">Expert Doctors</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            A dedicated team of experienced specialists committed to your health
            and well-being.
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
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              {/* Doctor image placeholder */}
              <div
                className={`h-52 bg-gradient-to-b ${gradients[i]} relative flex items-end pb-4 px-5 overflow-hidden`}
              >
                {/* ✅ Real Image */}
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Rating badge */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1">
                  <Star size={10} className="text-[#E8A838] fill-[#E8A838]" />
                  <span className="text-white text-xs font-bold">
                    {doc.rating}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-white font-semibold text-base mb-0.5">
                  {doc.name}
                </h3>
                <p className="text-[#00C9A7] text-sm font-medium mb-3">
                  {doc.specialty}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Award size={13} className="text-[#E8A838]" />
                    <span className="text-white/50 text-xs">
                      {doc.exp} Experience
                    </span>
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
  );
}
