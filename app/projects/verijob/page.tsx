"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, Target, Cpu, Scale, AlertTriangle, TrendingUp, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Required for optimized images

export default function VeriJobCaseStudy() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 pb-32">
      {/* Back Button */}
      <div className="max-w-3xl mx-auto px-6 pt-12">
        <Link href="/#featured-work" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>
      </div>

      <motion.article 
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-3xl mx-auto px-6"
      >
        {/* HEADER */}
        <motion.header variants={fadeUp} className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">VeriJob: Full-Stack Security Platform</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            A scalable platform engineered to detect and neutralize fraudulent job links in real-time, protecting users from employment scams.
          </p>
          
          {/* Project Links (Live Site & GitHub) */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="https://www.verijob.app/" // Replace with your actual live link
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Live Site
            </a>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-slate-200 dark:border-slate-800 text-sm">
            <div>
              <span className="block text-slate-500 mb-1">Role</span>
              <span className="font-medium">Lead Developer / Architect</span>
            </div>
            <div>
              <span className="block text-slate-500 mb-1">Timeline</span>
              <span className="font-medium">2026</span>
            </div>
            <div className="col-span-2">
              <span className="block text-slate-500 mb-1">Tech Stack</span>
              <span className="font-medium">Next.js, TypeScript, Node.js, PostgreSQL</span>
            </div>
          </div>
        </motion.header>

        {/* Hero Image / App Screenshot */}
        <motion.div variants={fadeUp} className="mb-16 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg bg-white dark:bg-slate-900 relative aspect-video">
          <Image 
            src="/verijob.png" 
            alt="VeriJob Platform Dashboard Interface" 
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* 1. THE PROBLEM */}
        <motion.section variants={fadeUp} className="mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Target className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            The Problem & Business Context
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Fraudulent job links are proliferating, costing users money and damaging the reputation of legitimate job boards. The business needed a highly available platform capable of processing and validating URLs in under 500ms to avoid UX degradation.
            </p>
            <p className="mt-4">
              <strong>Core Constraint:</strong> Limited initial server budget required highly optimized database queries and efficient background job processing, ensuring the system wouldn't buckle under sudden spikes of link submissions.
            </p>
          </div>
        </motion.section>

        {/* 2. ARCHITECTURE */}
        <motion.section variants={fadeUp} className="mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Cpu className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            Architecture & System Design
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              To handle the intensive URL scanning process without blocking the main thread, I implemented an event-driven architecture separating the user-facing dashboard from the heavy URL-scanning worker processes.
            </p>
            
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Frontend:</strong> Next.js (App Router) for Server-Side Rendering (SSR) SEO benefits on public pages, utilizing React Query for caching active dashboard state.</li>
              <li><strong>Backend/API:</strong> A Node.js microservice handling the core scanning logic, communicating asynchronously via message queues.</li>
              <li><strong>Database:</strong> PostgreSQL, with schemas strictly optimized for rapid read/writes of URL hashes.</li>
            </ul>
          </div>
        </motion.section>

        {/* 3. TRADE-OFFS */}
        <motion.section variants={fadeUp} className="mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Scale className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            Tech Stack & Trade-offs
          </h2>
          <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
            <h3 className="font-semibold text-lg mb-2">Why PostgreSQL over MongoDB?</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
              The relational integrity of user accounts tied to specific scan histories required strict ACID compliance. NoSQL would have introduced unnecessary complexity when joining user data with deep scan logs.
            </p>
            <h3 className="font-semibold text-lg mb-2">The "Real-Time" Trade-off</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              I chose to implement long-polling over WebSockets for the initial MVP. While this resulted in a slight hit to the "instantaneous" feel, it drastically reduced infrastructure complexity and allowed us to deploy the working application weeks ahead of schedule.
            </p>
          </div>
        </motion.section>

        {/* 4. POST-MORTEM */}
        <motion.section variants={fadeUp} className="mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <AlertTriangle className="w-6 h-6 mr-3 text-amber-600 dark:text-amber-400" />
            Failures & Iteration (Lessons Learned)
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed border-l-4 border-amber-500 pl-6">
            <p>
              <strong>What Broke:</strong> During early stress testing, the initial synchronous scanning approach began to time out on URLs with complex, multi-layered redirects. 
            </p>
            <p className="mt-4">
              <strong>The Fix:</strong> I completely refactored the URL processing pipeline to an asynchronous job queue. This allowed the frontend to immediately return a "Scan in progress" state to the user, vastly improving perceived performance and preventing server timeouts.
            </p>
          </div>
        </motion.section>

        {/* 5. RESULTS */}
        <motion.section variants={fadeUp}>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <TrendingUp className="w-6 h-6 mr-3 text-emerald-600 dark:text-emerald-400" />
            Results & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 p-6 rounded-xl">
              <span className="block text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">120ms</span>
              <span className="text-sm text-emerald-800 dark:text-emerald-200 font-medium">Average API response time</span>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 p-6 rounded-xl">
              <span className="block text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">99.9%</span>
              <span className="text-sm text-emerald-800 dark:text-emerald-200 font-medium">Uptime during peak loads</span>
            </div>
          </div>
        </motion.section>
      </motion.article>
    </main>
  );
}