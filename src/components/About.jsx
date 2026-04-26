import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Star, Heart, Shield } from "lucide-react";

const values = [
  {
    icon: <Heart size={18} className="text-[#00C9A7]" />,
    title: "Compassionate Care",
    desc: "Every patient treated with dignity and empathy",
  },
  {
    icon: <Shield size={18} className="text-[#E8A838]" />,
    title: "Advanced Technology",
    desc: "State-of-the-art equipment & modern ICU",
  },
  {
    icon: <Star size={18} className="text-[#00C9A7]" />,
    title: "Expert Specialists",
    desc: "Highly qualified doctors across all fields",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#060E1E] via-[#0A1628]/50 to-[#060E1E] pointer-events-none" />

      {/* Decorative */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#00C9A7]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual / Image block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image placeholder */}
            <div className="relative rounded-3xl overflow-hidden h-[480px] bg-gradient-to-br from-[#0F2040] to-[#0A1628] border border-white/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  {/* <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#00C9A7]/20 to-[#00C9A7]/5 flex items-center justify-center border border-[#00C9A7]/20">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <path d="M24 8v32M8 24h32" stroke="#00C9A7" strokeWidth="4" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="text-white/30 text-sm">Hospital Front Photo</p>
                  <p className="text-white/20 text-xs mt-1">[ Replace with actual image ]</p> */}
                  <img
                    src="./images/fullpicture.webp"
                    alt="Hospital Picture"
                  />
                </div>
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060E1E]/60 to-transparent" />
            </div>

            {/* Floating card — Owner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 card-glass rounded-2xl p-5 w-56"
              style={{
                background: "rgba(10,22,40,0.9)",
                border: "1px solid rgba(0,201,167,0.15)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00C9A7] to-[#00B896] flex items-center justify-center text-white font-bold font-display text-lg">
                  M
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">
                    Master Majeed
                  </p>
                  <p className="text-[#00C9A7] text-xs">Founder & Director</p>
                </div>
              </div>
              <p className="text-white/50 text-xs leading-relaxed italic">
                "Health is the greatest gift — we protect it with all our
                heart."
              </p>
            </motion.div>

            {/* Year badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-[#E8A838] to-[#D4922A] flex flex-col items-center justify-center shadow-xl"
            >
              <p className="text-white font-display font-bold text-xl leading-none">
                10+
              </p>
              <p className="text-white/80 text-[9px] font-semibold uppercase tracking-wider">
                Years
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="text-[#00C9A7] text-sm font-semibold tracking-[0.15em] uppercase mb-3">
              About Us
            </p>
            <h2 className="section-title text-white mb-6">
              Healing Lives in{" "}
              <span className="gradient-text italic">Alwar</span> with{" "}
              Dedication
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              Located at 22, Surya Nagar, Khudanpuri, Alwar — Karishmaa
              Multi-Speciality Hospital was founded with a simple but powerful
              mission: to bring comprehensive, high-quality healthcare to every
              family in the Alwar region.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Under the visionary leadership of{" "}
              <span className="text-white font-semibold">Master Majeed</span>,
              we have grown into a trusted medical institution offering advanced
              diagnostics, a fully-equipped ICU, critical care, and a dedicated
              in-house pharmacy — all under one roof.
            </p>

            {/* Values */}
            <div className="space-y-4 mb-8">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {v.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {v.title}
                    </p>
                    <p className="text-white/50 text-xs mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3">
              {[
                "Best Hospital in Alwar",
                "Advanced ICU & Critical Care",
                "In-house Pharmacy 24x7",
                "USG, CT Scan & X-Ray",
                "Joint & Hip Replacement",
                "Emergency & Trauma Unit",
                "Dedicated OPD Clinics",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-[#00C9A7] flex-shrink-0"
                  />
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
