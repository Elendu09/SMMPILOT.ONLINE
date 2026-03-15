import { motion } from "framer-motion";
import { ArrowRight, ShieldAlert } from "lucide-react";

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
        {/* Animated 404 SVG */}
        <div className="w-full max-w-sm mb-6 select-none" aria-hidden="true">
          <svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Animated shield icon */}
            <motion.g
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05, type: "spring", stiffness: 300, damping: 18 }}
            >
              <motion.rect
                x="138" y="38" width="44" height="44" rx="10"
                fill="#0000FF" fillOpacity="0.08"
                animate={{ fillOpacity: [0.06, 0.14, 0.06] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path
                d="M160 44 L172 49 L172 61 C172 68 166 73 160 75 C154 73 148 68 148 61 L148 49 Z"
                fill="#0000FF" fillOpacity="0.15"
                stroke="#0000FF" strokeWidth="1.5"
                strokeLinejoin="round"
                animate={{ strokeOpacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path
                d="M155 59.5 L158.5 63 L165.5 56"
                fill="none" stroke="#0000FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              />
            </motion.g>

            {/* "4" left */}
            <motion.text
              x="28" y="100"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              fontWeight="900"
              fontSize="92"
              fill="#0000FF"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 220, damping: 20 }}
            >
              4
            </motion.text>

            {/* "0" middle with pulse ring */}
            <motion.g
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.28, type: "spring", stiffness: 260, damping: 18 }}
            >
              <motion.ellipse
                cx="160" cy="73" rx="38" ry="42"
                fill="none" stroke="#0000FF" strokeWidth="1"
                animate={{ r: [36, 44, 36], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.text
                x="130" y="100"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontWeight="900"
                fontSize="92"
                fill="#111"
              >
                0
              </motion.text>
            </motion.g>

            {/* "4" right */}
            <motion.text
              x="228" y="100"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              fontWeight="900"
              fontSize="92"
              fill="#0000FF"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 220, damping: 20 }}
            >
              4
            </motion.text>

            {/* Animated underline */}
            <motion.line
              x1="20" y1="108" x2="300" y2="108"
              stroke="#0000FF" strokeWidth="2.5" strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
            />

            {/* Scanning glitch line */}
            <motion.rect
              x="20" y="20" width="280" height="2" rx="1"
              fill="#0000FF" fillOpacity="0.18"
              animate={{ y: [20, 106, 20], fillOpacity: [0, 0.22, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </svg>
        </div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0000FF]/5 text-[#0000FF] border border-[#0000FF]/15">
            <ShieldAlert className="w-3.5 h-3.5" />
            Access Denied
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, type: "spring", stiffness: 260, damping: 22 }}
          className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Trying to hack{" "}
          <span className="text-[#0000FF]">our servers?</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-sm"
        >
          Nice try. This page doesn't exist — and our systems noticed. Head back to safety before things get suspicious.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
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
            Back to safety
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
