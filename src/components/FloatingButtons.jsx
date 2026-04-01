import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, X, Send } from 'lucide-react'

export default function FloatingButtons() {
  const [chatOpen, setChatOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: "Hello! 👋 Welcome to Karishmaa Hospital. How can we help you today?",
    },
  ])

  const sendMessage = () => {
    if (!message.trim()) return
    const userMsg = { from: 'user', text: message }
    const botReply = {
      from: 'bot',
      text: "Thank you for reaching out! Our team will get back to you shortly. For emergencies, please call +91 73108 10884 immediately.",
    }
    setMessages((prev) => [...prev, userMsg, botReply])
    setMessage('')
  }

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-28 right-6 z-50 w-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            style={{ background: '#0A1628' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#00C9A7] to-[#00B896] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle size={15} className="text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[#00C9A7]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Karishmaa Support</p>
                  <p className="text-white/70 text-[10px]">Online · Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors"
              >
                <X size={13} className="text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-56 overflow-y-auto p-4 space-y-3 flex flex-col">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      msg.from === 'user'
                        ? 'bg-[#00C9A7] text-white rounded-tr-sm'
                        : 'bg-white/8 text-white/80 rounded-tl-sm border border-white/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="px-3 pb-3 flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#00C9A7]"
              />
              <button
                onClick={sendMessage}
                className="w-10 h-10 rounded-xl bg-[#00C9A7] flex items-center justify-center hover:bg-[#00B896] transition-colors flex-shrink-0"
              >
                <Send size={15} className="text-white" />
              </button>
            </div>

            {/* Footer note */}
            <p className="text-center text-white/20 text-[10px] pb-2">
              AI Chatbot coming soon · For emergency call now
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
        {/* Chat Button */}
        <motion.div className="relative" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <button
            onClick={() => setChatOpen(!chatOpen)}
            className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300"
            style={{
              background: chatOpen
                ? 'rgba(255,255,255,0.1)'
                : 'linear-gradient(135deg, #0A1628, #162B55)',
              border: '1px solid rgba(0,201,167,0.3)',
              boxShadow: '0 8px 32px rgba(0,201,167,0.2)',
            }}
          >
            {chatOpen ? (
              <X size={20} className="text-[#00C9A7]" />
            ) : (
              <MessageCircle size={20} className="text-[#00C9A7]" />
            )}
          </button>
          {!chatOpen && (
            <motion.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#00C9A7] flex items-center justify-center text-[8px] text-white font-bold"
            >
              1
            </motion.span>
          )}
        </motion.div>

        {/* Call Button */}
        <motion.a
          href="tel:+917310810884"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-red-600 text-white shadow-2xl flex items-center justify-center relative"
          style={{ boxShadow: '0 8px 32px rgba(220,38,38,0.4)' }}
        >
          <Phone size={20} />
          {/* Pulse ring */}
          <motion.span
            animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-red-500"
          />
        </motion.a>
      </div>
    </>
  )
}
