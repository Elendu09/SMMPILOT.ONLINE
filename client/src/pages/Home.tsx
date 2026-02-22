import { motion } from "framer-motion";
import { ArrowRight, FileText, BookOpen, Mail, Sparkles } from "lucide-react";
import { FeatureSlider } from "@/components/FeatureSlider";
import brandLogo from "@assets/09029ec8-96f2-496f-ac3b-82c337320011_1771747982097.png";

export default function Home() {
  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
  };

  return (
    <div className="relative h-[100dvh] w-full bg-white overflow-hidden flex flex-col selection:bg-zinc-900 selection:text-white">
      {/* Subtle background gradients for visual depth without clutter */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-zinc-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-zinc-50 blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full px-6 py-5 md:px-12 md:py-8 flex items-center justify-between z-10 shrink-0"
      >
        <div className="flex items-center space-x-2.5">
          <img src={brandLogo} alt="SMMPILOT" className="w-8 h-8 md:w-9 md:h-9 rounded-lg object-cover" />
          <h1 className="text-xl md:text-2xl font-extrabold font-display tracking-tight text-zinc-900">
            SMMPILOT
          </h1>
        </div>

        <nav className="flex items-center space-x-3 md:space-x-6">
          <a 
            href="https://homeofsmm.com/docs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm md:text-base font-medium text-zinc-500 hover:text-zinc-900 flex items-center space-x-1.5 transition-colors group"
            data-testid="link-docs"
          >
            <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline-block">Docs</span>
          </a>
          <a 
            href="https://homeofsmm.com/blog" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm md:text-base font-medium text-zinc-500 hover:text-zinc-900 flex items-center space-x-1.5 transition-colors group"
            data-testid="link-blog"
          >
            <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline-block">Blog</span>
          </a>
          <a 
            href="https://homeofsmm.com/contact" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm md:text-base font-medium text-zinc-500 hover:text-zinc-900 flex items-center space-x-1.5 transition-colors group"
            data-testid="link-contact"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline-block">Contact</span>
          </a>
          <a 
            href="https://homeofsmm.com/features" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm md:text-base font-medium text-zinc-500 hover:text-zinc-900 flex items-center space-x-1.5 transition-colors group"
            data-testid="link-features"
          >
            <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
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
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <span className="inline-flex items-center px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-semibold bg-zinc-100 text-zinc-600 border border-zinc-200">
              Powered by <span className="text-zinc-900 ml-1 font-bold">HOME OF SMM</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-display text-zinc-900 tracking-tighter leading-[1.05] text-balance mb-4 md:mb-6"
          >
            Launch your own{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500">
              SMM Panel
            </span>
          </motion.h2>

          {/* Important Information Constraint */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-10 w-full max-w-xl">
            <p className="text-base md:text-lg text-zinc-500 font-medium leading-relaxed text-balance">
              We provide the ultimate software to create and run your own SMM panel. <br className="hidden md:block"/>
              <strong className="text-zinc-800 font-semibold">We do not sell SMM services. We empower you to.</strong>
            </p>
          </motion.div>

          {/* Primary CTA Button */}
          <motion.div variants={itemVariants} className="mb-10 md:mb-16 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 to-zinc-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <a 
              href="https://homeofsmm.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 bg-zinc-900 text-white rounded-2xl font-bold text-base md:text-lg shadow-xl shadow-zinc-900/20 hover:shadow-2xl hover:shadow-zinc-900/30 hover:-translate-y-1 active:translate-y-0 active:shadow-md transition-all duration-300 ease-out overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Visit homeofsmm.com
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Button shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
            </a>
          </motion.div>

          {/* Carousel Section */}
          <motion.div variants={itemVariants} className="w-full">
            <FeatureSlider />
          </motion.div>
        </motion.div>
      </main>

      {/* Very subtle footer/bottom spacing area */}
      <footer className="h-4 md:h-8 shrink-0 w-full" />
    </div>
  );
}
