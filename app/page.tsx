"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Database, Zap, Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
  // Animation variants for staggered fade-ins on the hero section
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-blue-200 dark:selection:bg-blue-900 z-0 overflow-hidden">
      
      {/* 1. Subtle Dot Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#eff6ff,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#1e3a8a,transparent)] opacity-40"></div>
      </div>

      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-20 md:pt-48 md:pb-32">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={containerVariant}
          className="max-w-3xl"
        >
          <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Full-Stack Engineer & Technical Consultant.
          </motion.h1>
          <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            I bridge the gap between complex engineering and seamless business operations. 
            From architecting fraud-detection security platforms to engineering comprehensive 
            institutional data systems, I build robust solutions that optimize workflows, 
            protect users, and scale efficiently.
          </motion.p>
          
          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row flex-wrap gap-4 mt-2">
            <Link 
              href="#featured-work" 
              className="inline-flex justify-center items-center px-6 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium rounded-md hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-sm"
            >
              View Featured Work
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex justify-center items-center px-6 py-3 border border-slate-300 dark:border-slate-700 font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm"
            >
              Contact / Hire Me
            </Link>
            <a 
              href="/Nathaniel_Faa_Resume.pdf" 
              download="Nathaniel_Faa_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-6 py-3 border border-slate-300 dark:border-slate-700 font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm group"
            >
              <Download className="w-4 h-4 mr-2 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* THE "IMPACT" REEL */}
      <section className="border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {/* Impact Item 1 */}
            <div className="flex flex-col">
              <Database className="w-8 h-8 mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Operational Transformation</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Engineered an end-to-end institutional enrollment system, replacing fragmented manual registration with a centralized, analytics-driven dashboard.
              </p>
            </div>
            {/* Impact Item 2 */}
            <div className="flex flex-col">
              <ShieldCheck className="w-8 h-8 mb-4 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-xl font-semibold mb-2">Security & Risk Mitigation</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Architected a full-stack security platform designed to proactively detect, flag, and neutralize fraudulent job links in the digital employment landscape.
              </p>
            </div>
            {/* Impact Item 3 */}
            <div className="flex flex-col">
              <Zap className="w-8 h-8 mb-4 text-amber-600 dark:text-amber-400" />
              <h3 className="text-xl font-semibold mb-2">Scalable Architecture</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Built responsive, performance-first web applications utilizing modern frameworks, optimized querying, and robust state management.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE COMPETENCIES / SKILLS */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-b border-slate-200 dark:border-slate-800 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Core Competencies</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              A hybrid toolkit combining modern full-stack web development with enterprise-level operational management and workflow automation.
            </p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Skill Category 1 */}
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-3 text-sm">01</span>
              Full-Stack Engineering
            </h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-slate-300 dark:text-slate-600" /> Next.js & React</li>
              <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-slate-300 dark:text-slate-600" /> TypeScript</li>
              <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-slate-300 dark:text-slate-600" /> Supabase (BaaS)</li>
              <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-slate-300 dark:text-slate-600" /> Tailwind CSS</li>
            </ul>
          </div>

          {/* Skill Category 2 */}
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mr-3 text-sm">02</span>
              Systems & Automation
            </h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-slate-300 dark:text-slate-600" /> Microsoft Power Platform</li>
              <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-slate-300 dark:text-slate-600" /> Workflow Digitization</li>
              <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-slate-300 dark:text-slate-600" /> Biometric Auth Integration</li>
              <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-slate-300 dark:text-slate-600" /> Logistics Systems Engineering</li>
            </ul>
          </div>

          {/* Skill Category 3 */}
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 flex items-center justify-center mr-3 text-sm">03</span>
              Technical Operations
            </h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-slate-300 dark:text-slate-600" /> High-Volume Data Management</li>
              <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-slate-300 dark:text-slate-600" /> Shopify & E-commerce Admin</li>
              <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-slate-300 dark:text-slate-600" /> Notion Workspace Architecture</li>
              <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-slate-300 dark:text-slate-600" /> Office 365 Administration</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* FEATURED WORK */}
      <section id="featured-work" className="max-w-5xl mx-auto px-6 py-24 md:py-32 relative">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">Featured Work</h2>
        
        {/* Scroll-Triggered Reveal for the cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-16"
        >
          {/* Project: Velociraptor Technologies */}
          <motion.div 
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative border border-slate-200 dark:border-slate-800 rounded-2xl p-8 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
            
            <h3 className="text-2xl font-bold mb-3 flex items-center justify-between relative z-10">
              Velociraptor ISP System <span className="text-sm font-normal text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors hidden sm:inline-block">Enterprise Logistics</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl leading-relaxed relative z-10">
              Engineered a mission-critical logistics platform that digitizes the entire provisioning workflow for ISP customers, streamlining lead intake, document verification, and technician scheduling.
            </p>
            <Link href="/projects/velociraptor" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group-hover:underline decoration-2 underline-offset-4 relative z-10">
              Read Case Study & View Architecture <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Project: VeriJob */}
          <motion.div 
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative border border-slate-200 dark:border-slate-800 rounded-2xl p-8 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
            
            <h3 className="text-2xl font-bold mb-3 flex items-center justify-between relative z-10">
              VeriJob <span className="text-sm font-normal text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors hidden sm:inline-block">Security Platform</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl leading-relaxed relative z-10">
              A proactive security platform engineered to protect users from the proliferation of fraudulent employment schemes by detecting and neutralizing malicious job links. Focuses on event-driven architecture and robust URL validation.
            </p>
            <Link href="/projects/verijob" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group-hover:underline decoration-2 underline-offset-4 relative z-10">
              Read Case Study & View Architecture <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Project: AMA ACLC */}
          <motion.div 
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative border border-slate-200 dark:border-slate-800 rounded-2xl p-8 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
            
            <h3 className="text-2xl font-bold mb-3 flex items-center justify-between relative z-10">
              AMA ACLC Enrollment <span className="text-sm font-normal text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors hidden sm:inline-block">Institutional Data</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl leading-relaxed relative z-10">
              A comprehensive, centralized enrollment management system built to modernize student registration and provide actionable, data-driven insights to administrators through a custom analytics dashboard.
            </p>
            <Link href="/projects/ama-aclc" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group-hover:underline decoration-2 underline-offset-4 relative z-10">
              Read Case Study & View Architecture <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Project: GuildBase */}
          <motion.div 
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative border border-slate-200 dark:border-slate-800 rounded-2xl p-8 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
            
            <h3 className="text-2xl font-bold mb-3 flex items-center justify-between relative z-10">
              GuildBase <span className="text-sm font-normal text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors hidden sm:inline-block">Web Application</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl leading-relaxed relative z-10">
              A performance-first web application designed for scalable data handling, reliable state management, and an accessible, responsive user interface utilizing modern UI/UX principles.
            </p>
            <Link href="/projects/guildbase" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group-hover:underline decoration-2 underline-offset-4 relative z-10">
              Read Case Study & View Architecture <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}