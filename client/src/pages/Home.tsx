import { motion } from "framer-motion";
import { ArrowRight, FileText, BookOpen, Mail, Sparkles } from "lucide-react";
import { FeatureSlider } from "@/components/FeatureSlider";
import brandLogo from "@assets/09029ec8-96f2-496f-ac3b-82c337320011_1771747982097.png";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 22 },
    },
  };

  return (
    <div className="relative h-[100dvh] w-full bg-white overflow-hidden flex flex-col selection:bg-[#0000FF] selection:text-white grid-bg">
      {/* Decorative floating orbs */}
      <div className="absolute top-[10%] right-[8%] w-32 h-32 md:w-56 md:h-56 rounded-full bg-[#0000FF]/5 blur-2xl pointer-events-none animate-float" />
      <div className="absolute bottom-[15%] left-[5%] w-24 h-24 md:w-40 md:h-40 rounded-full bg-[#0000FF]/4 blur-2xl pointer-events-none animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[50%] left-[60%] w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#0000FF]/3 blur-3xl pointer-events-none animate-float" style={{ animationDelay: "4s" }} />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full px-4 py-4 md:px-12 md:py-6 flex items-center justify-between z-10 shrink-0"
      >
        <div className="flex items-center space-x-2.5">
          <img src={brandLogo} alt="SMMPILOT" className="w-8 h-8 md:w-10 md:h-10 rounded-xl object-cover" data-testid="img-logo" />
          <h1 className="text-lg md:text-2xl font-extrabold tracking-tight text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
            SMMPILOT
          </h1>
        </div>

        <nav className="flex items-center space-x-2 md:space-x-5">
          <a
            href="https://homeofsmm.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm font-medium text-gray-500 hover:text-[#0000FF] flex items-center space-x-1 transition-colors group"
            data-testid="link-docs"
          >
            <FileText className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline-block">Docs</span>
          </a>
          <a
            href="https://homeofsmm.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm font-medium text-gray-500 hover:text-[#0000FF] flex items-center space-x-1 transition-colors group"
            data-testid="link-blog"
          >
            <BookOpen className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline-block">Blog</span>
          </a>
          <a
            href="https://homeofsmm.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm font-medium text-gray-500 hover:text-[#0000FF] flex items-center space-x-1 transition-colors group"
            data-testid="link-contact"
          >
            <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline-block">Contact</span>
          </a>
          <a
            href="https://homeofsmm.com/features"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm font-medium text-gray-500 hover:text-[#0000FF] flex items-center space-x-1 transition-colors group"
            data-testid="link-features"
          >
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline-block">Features</span>
          </a>
        </nav>
      </motion.header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 w-full max-w-5xl mx-auto z-10 min-h-0 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center w-full"
        >
          {/* Powered By Badge */}
          <motion.div variants={itemVariants} className="mb-5 md:mb-7">
            <span className="inline-flex items-center px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-semibold bg-[#0000FF]/5 text-[#0000FF] border border-[#0000FF]/15">
              Powered by <span className="ml-1 font-bold">HOME OF SMM</span>
            </span>
          </motion.div>

          {/* Headline - "Launch your own" always on first line */}
          <motion.h2
            variants={itemVariants}
            className="font-extrabold text-gray-900 tracking-tighter leading-[1.1] mb-3 md:mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="block text-3xl sm:text-5xl md:text-7xl whitespace-nowrap">Launch your own</span>
            <span className="block text-4xl sm:text-6xl md:text-8xl text-[#0000FF]">
              SMM Panel
            </span>
          </motion.h2>

          {/* Description */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-8 w-full max-w-md md:max-w-xl">
            <p className="text-sm md:text-lg text-gray-500 font-medium leading-relaxed">
              We provide the ultimate software to create and run your own SMM panel.{" "}
              <strong className="text-gray-800 font-semibold">We do not sell SMM services. We empower you to.</strong>
            </p>
          </motion.div>

          {/* Primary CTA Button */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-12 relative group">
            <div className="absolute -inset-1.5 bg-[#0000FF]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
            <a
              href="https://homeofsmm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-7 py-3.5 md:px-10 md:py-4 bg-[#0000FF] text-white rounded-2xl font-bold text-sm md:text-lg shadow-lg shadow-[#0000FF]/25 hover:shadow-xl hover:shadow-[#0000FF]/35 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md transition-all duration-300 ease-out overflow-hidden"
              data-testid="button-cta"
            >
              <span className="relative z-10 flex items-center">
                Visit homeofsmm.com
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/15 to-transparent z-0" />
            </a>
          </motion.div>

          {/* Carousel Section */}
          <motion.div variants={itemVariants} className="w-full">
            <FeatureSlider />
          </motion.div>
        </motion.div>
      </main>

      {/* Footer spacing */}
      <footer className="h-3 md:h-6 shrink-0 w-full" />
    </div>
  );
}
