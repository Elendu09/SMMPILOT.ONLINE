import { motion } from "framer-motion";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden flex flex-col items-center justify-center grid-bg selection:bg-[#0000FF] selection:text-white px-4">
      {/* Decorative orbs */}
      <div className="absolute top-[10%] right-[8%] w-56 h-56 rounded-full bg-[#0000FF]/5 blur-2xl pointer-events-none animate-float" />
      <div className="absolute bottom-[15%] left-[5%] w-40 h-40 rounded-full bg-[#0000FF]/4 blur-2xl pointer-events-none animate-float" style={{ animationDelay: "2s" }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="flex flex-col items-center text-center max-w-lg"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 20 }}
          className="mb-6 p-5 bg-[#0000FF]/5 rounded-2xl border border-[#0000FF]/10"
        >
          <ShieldAlert className="w-14 h-14 text-[#0000FF]" />
        </motion.div>

        {/* 404 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm font-semibold tracking-widest text-[#0000FF] uppercase mb-3"
        >
          Error 404
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Trying to hack <br className="hidden sm:block" />
          <span className="text-[#0000FF]">our servers?</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-sm"
        >
          Nice try. This page doesn't exist — and our systems noticed. Head back to safety before we get suspicious.
        </motion.p>

        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          onClick={() => setLocation("/")}
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0000FF] text-white rounded-2xl font-bold text-sm shadow-lg shadow-[#0000FF]/25 hover:shadow-xl hover:shadow-[#0000FF]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          data-testid="button-go-home"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to safety
        </motion.button>
      </motion.div>
    </div>
  );
}
