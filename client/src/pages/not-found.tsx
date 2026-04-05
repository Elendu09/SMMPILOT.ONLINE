import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BLUE = "#0000FF";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden flex flex-col items-center justify-center grid-bg selection:bg-[#0000FF] selection:text-white px-4">
      {/* Background orbs */}
      <div className="absolute top-[10%] right-[8%] w-64 h-64 rounded-full bg-[#0000FF]/5 blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-[12%] left-[4%] w-48 h-48 rounded-full bg-[#0000FF]/4 blur-2xl pointer-events-none animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[55%] left-[65%] w-36 h-36 rounded-full bg-[#0000FF]/3 blur-3xl pointer-events-none animate-float" style={{ animationDelay: "4s" }} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center text-center max-w-xl w-full"
      >
        {/* ── Large animated security lock SVG ── */}
        <div className="w-56 h-56 sm:w-72 sm:h-72 mb-8 select-none" aria-hidden="true">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">

            {/* ── Rings ── */}

            {/* Ring 3 – outermost, slow pulse */}
            <motion.circle cx="100" cy="110" r="88"
              fill="none" stroke={BLUE} strokeWidth="0.8" strokeOpacity="0.12"
              animate={{ strokeOpacity: [0.08, 0.22, 0.08], scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "100px 110px" }}
            />

            {/* Ring 2 – dashed rotating */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "100px 110px" }}
            >
              <circle cx="100" cy="110" r="76"
                fill="none" stroke={BLUE} strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.2"
              />
            </motion.g>

            {/* Ring 2b – dashed rotating (opposite) */}
            <motion.g
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "100px 110px" }}
            >
              <circle cx="100" cy="110" r="65"
                fill="none" stroke={BLUE} strokeWidth="0.6" strokeDasharray="2 5" strokeOpacity="0.15"
              />
            </motion.g>

            {/* Ring 1 – inner solid pulsing */}
            <motion.circle cx="100" cy="110" r="54"
              fill="none" stroke={BLUE} strokeWidth="1.5" strokeOpacity="0.25"
              animate={{ strokeOpacity: [0.15, 0.45, 0.15] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Orbit dots */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              const cx = 100 + 76 * Math.cos(rad);
              const cy = 110 + 76 * Math.sin(rad);
              return (
                <motion.circle key={i} cx={cx} cy={cy} r="2.2"
                  fill={BLUE} fillOpacity="0.35"
                  animate={{ fillOpacity: [0.15, 0.55, 0.15], scale: [0.7, 1.3, 0.7] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                />
              );
            })}

            {/* ── Lock body ── */}
            <motion.g
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.25, type: "spring", stiffness: 280, damping: 18 }}
              style={{ transformOrigin: "100px 110px" }}
            >
              {/* Shackle draw-in */}
              <motion.path
                d="M 68 90 Q 68 52 100 52 Q 132 52 132 90"
                fill="none" stroke={BLUE} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              />

              {/* Lock body fill */}
              <motion.rect
                x="60" y="88" width="80" height="76" rx="10"
                fill={BLUE} fillOpacity="0.06"
                stroke={BLUE} strokeWidth="3.5" strokeLinejoin="round"
                animate={{
                  fillOpacity: [0.06, 0.12, 0.06],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Inner glow rect */}
              <motion.rect
                x="60" y="88" width="80" height="76" rx="10"
                fill="none" stroke={BLUE} strokeWidth="1"
                animate={{ strokeOpacity: [0, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />

              {/* Keyhole – draw-in circle */}
              <motion.circle
                cx="100" cy="120" r="9"
                fill="none" stroke={BLUE} strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, strokeOpacity: [0.6, 1, 0.6] }}
                transition={{
                  pathLength: { delay: 0.9, duration: 0.5, ease: "easeOut" },
                  strokeOpacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
                }}
              />

              {/* Keyhole stem */}
              <motion.path
                d="M 100 129 L 100 148"
                stroke={BLUE} strokeWidth="3" strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, strokeOpacity: [0.6, 1, 0.6] }}
                transition={{
                  pathLength: { delay: 1.2, duration: 0.3, ease: "easeOut" },
                  strokeOpacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
                }}
              />
            </motion.g>

            {/* ── Radial beams ── */}
            {[
              { x1: 100, y1: 20, x2: 100, y2: 35, delay: 0 },
              { x1: 155, y1: 55, x2: 145, y2: 64, delay: 0.25 },
              { x1: 175, y1: 120, x2: 163, y2: 120, delay: 0.5 },
              { x1: 45, y1: 55, x2: 55, y2: 64, delay: 0.75 },
              { x1: 25, y1: 120, x2: 37, y2: 120, delay: 1.0 },
            ].map((b, i) => (
              <motion.line key={i}
                x1={b.x1} y1={b.y1} x2={b.x2} y2={b.y2}
                stroke={BLUE} strokeWidth="1.5" strokeLinecap="round"
                animate={{ opacity: [0.15, 0.7, 0.15] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
              />
            ))}
          </svg>
        </div>

        {/* Error label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xs font-bold tracking-[0.2em] text-[#0000FF] uppercase mb-3"
        >
          Error 404 · Access Restricted
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, type: "spring", stiffness: 260, damping: 22 }}
          className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          This area is{" "}
          <span className="text-[#0000FF]">locked</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10 max-w-sm"
        >
          Are you trying to hack through our servers? Nice try — but this page doesn't exist and our systems already noticed. Nothing to see here.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="relative group"
        >
          <div className="absolute -inset-1.5 bg-[#0000FF]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
          <a
            href="https://homeofsmm.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-8 py-4 bg-[#0000FF] text-white rounded-2xl font-bold text-sm md:text-base shadow-lg shadow-[#0000FF]/25 hover:shadow-xl hover:shadow-[#0000FF]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            data-testid="button-go-home"
          >
            Go to homeofsmm.com
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
