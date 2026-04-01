import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Building2 } from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin size={20} className="text-[#00C9A7]" />,
    title: "Address",
    lines: ["22, Surya Nagar, Khudanpuri,", "Alwar, Rajasthan — 301001"],
  },
  {
    icon: <Phone size={20} className="text-[#E8A838]" />,
    title: "Phone",
    lines: ["+91 73108 10884", "Available 24x7"],
  },
  {
    icon: <Clock size={20} className="text-[#00C9A7]" />,
    title: "OPD Hours",
    lines: ["Mon – Sat: 9:00 AM – 8:00 PM", "Emergency: 24x7 All Days"],
  },
  {
    icon: <Building2 size={20} className="text-[#E8A838]" />,
    title: "Facilities",
    lines: ["ICU · Pharmacy · Diagnostics", "Emergency · Trauma Care"],
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-[#00C9A7]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#00C9A7] text-sm font-semibold tracking-[0.15em] uppercase mb-3">
            Find Us
          </p>
          <h2 className="section-title text-white mb-4">
            Visit Us in <span className="gradient-text italic">Alwar</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            We are conveniently located in Khudanpuri, Alwar — easily accessible
            from all parts of the city.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300 flex items-start gap-4"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {info.icon}
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-1">
                    {info.title}
                  </p>
                  {info.lines.map((line, j) => (
                    <p key={j} className="text-white text-sm font-medium">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Emergency CTA */}
            <motion.a
              href="tel:+917310810884"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-5 hover:shadow-[0_0_30px_rgba(231,76,60,0.3)] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold">Emergency Helpline</p>
                <p className="text-red-200 text-sm">+91 73108 10884 — 24x7</p>
              </div>
              <div className="ml-auto live-dot w-2.5 h-2.5 rounded-full bg-white flex-shrink-0" />
            </motion.a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden border border-white/8 h-[420px] relative"
          >
            <iframe
              title="Karishmaa Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.8833511332627!2d76.64913447546236!3d27.566130476263723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397297192f5feb77%3A0x6536a3a7bea4de9f!2sKarishmaa%20Multispeciality%20Hospital!5e0!3m2!1sen!2sin!4v1775017520968!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter:
                  "invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.85)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map overlay label */}
            <div className="absolute top-4 left-4 bg-[#060E1E]/90 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/10">
              <p className="text-white text-xs font-semibold flex items-center gap-1.5">
                <MapPin size={12} className="text-[#00C9A7]" />
                Karishmaa Hospital, Khudanpuri, Alwar
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
