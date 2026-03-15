import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden flex flex-col items-center justify-center grid-bg selection:bg-[#0000FF] selection:text-white px-4">
      {/* Decorative orbs */}
      <div className="absolute top-[10%] right-[8%] w-56 h-56 rounded-full bg-[#0000FF]/5 blur-2xl pointer-events-none animate-float" />
      <div className="absolute bottom-[15%] left-[5%] w-40 h-40 rounded-full bg-[#0000FF]/4 blur-2xl pointer-events-none animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[50%] left-[60%] w-28 h-28 rounded-full bg-[#0000FF]/3 blur-3xl pointer-events-none animate-float" style={{ animationDelay: "4s" }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="flex flex-col items-center text-center max-w-xl w-full"
      >
        {/* Animated Security Lock SVG */}
        <div className="w-32 h-40 mb-8 select-none" aria-hidden="true">
          <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Outer pulsing ring */}
            <motion.circle
              cx="60" cy="80" r="50"
              fill="none" stroke="#0000FF" strokeWidth="1.5" strokeOpacity="0.3"
              animate={{ 
                strokeOpacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Secondary rotating ring */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "60px 80px" }}
            >
              <circle
                cx="60" cy="80" r="45"
                fill="none" stroke="#0000FF" strokeWidth="0.8" strokeDasharray="3,2" strokeOpacity="0.2"
              />
            </motion.g>

            {/* Lock body */}
            <motion.g
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 18 }}
            >
              {/* Shackle (top curved part) */}
              <path
                d="M 40 50 Q 40 25 60 25 Q 80 25 80 50"
                fill="none"
                stroke="#0000FF"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Body background */}
              <rect x="35" y="50" width="50" height="60" rx="6" fill="#0000FF" fillOpacity="0.08" stroke="#0000FF" strokeWidth="3" strokeLinejoin="round" />

              {/* Keyhole circle */}
              <motion.circle
                cx="60" cy="75" r="6"
                fill="none" stroke="#0000FF" strokeWidth="2.5"
                animate={{ 
                  scale: [1, 1.2, 1],
                  strokeOpacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Keyhole bottom */}
              <motion.path
                d="M 60 81 L 60 92"
                stroke="#0000FF"
                strokeWidth="2.5"
                strokeLinecap="round"
                animate={{ 
                  strokeOpacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Glow effect */}
              <motion.rect 
                x="35" y="50" width="50" height="60" rx="6"
                fill="none" stroke="#0000FF" strokeWidth="1" strokeOpacity="0"
                animate={{ strokeOpacity: [0, 0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.g>

            {/* Light beams */}
            <motion.g opacity="0.4">
              <motion.line
                x1="60" y1="10" x2="60" y2="20"
                stroke="#0000FF" strokeWidth="1.5" strokeLinecap="round"
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.line
                x1="95" y1="40" x2="102" y2="47"
                stroke="#0000FF" strokeWidth="1.5" strokeLinecap="round"
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
              <motion.line
                x1="25" y1="40" x2="18" y2="47"
                stroke="#0000FF" strokeWidth="1.5" strokeLinecap="round"
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              />
            </motion.g>
          </svg>
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, type: "spring", stiffness: 260, damping: 22 }}
          className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          This area is <span className="text-[#0000FF]">locked</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-sm"
        >
          The page you're looking for doesn't exist or is restricted. Return to our main site to continue.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="relative group"
        >
          <div className="absolute -inset-1.5 bg-[#0000FF]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
          <a
            href="https://homeofsmm.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-7 py-3.5 bg-[#0000FF] text-white rounded-2xl font-bold text-sm shadow-lg shadow-[#0000FF]/25 hover:shadow-xl hover:shadow-[#0000FF]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            data-testid="button-go-home"
          >
            Go to homeofsmm.com
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
