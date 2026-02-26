"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, Building2, Database, LayoutDashboard, GitMerge, FileText, CheckCircle2, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Required for optimized images

export default function AmaAclcCaseStudy() {
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">AMA ACLC Northbay: Institutional Data Platform</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            An end-to-end enrollment management system engineered to modernize student registration and provide real-time, actionable analytics.
          </p>
          
          {/* Project Links (Live Site & GitHub) */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="https://ama-aclc-northbay-es.vercel.app/" // Replace with your actual live link
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
              <span className="font-medium">Full-Stack Engineer</span>
            </div>
            <div>
              <span className="block text-slate-500 mb-1">Timeline</span>
              <span className="font-medium">2025 - 2026</span>
            </div>
            <div className="col-span-2">
              <span className="block text-slate-500 mb-1">Core Tech</span>
              <span className="font-medium">Next.js, TypeScript, REST APIs, Relational DB</span>
            </div>
          </div>
        </motion.header>

        {/* Hero Image / App Screenshot */}
        <motion.div variants={fadeUp} className="mb-16 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg bg-white dark:bg-slate-900 relative aspect-video">
          <Image 
            src="/aclc.png" // Place this image in your public/ folder
            alt="AMA ACLC Administrative Analytics Dashboard" 
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* 1. THE PROBLEM */}
        <motion.section variants={fadeUp} className="mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Building2 className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            The Business Context
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Institutional enrollment is traditionally a fragmented process, heavily reliant on manual data entry, disconnected spreadsheets, and paper trails. This creates data silos, increases administrative processing time, and severely limits the ability of decision-makers to analyze enrollment trends.
            </p>
            <p className="mt-4">
              <strong>The Goal:</strong> Architect a centralized, digital-first system that handles the complete lifecycle of student registration while feeding a live analytics dashboard for the administration.
            </p>
          </div>
        </motion.section>

        {/* 2. ARCHITECTURE */}
        <motion.section variants={fadeUp} className="mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <LayoutDashboard className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            System Design & Data Flow
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              The system demands high data integrity and complex, multi-step state management to handle student forms without data loss.
            </p>
            
            
            
            <ul className="list-disc pl-6 mt-6 space-y-2">
              <li><strong>Frontend State:</strong> Utilized React Hook Form paired with Zod validation to handle complex, multi-page enrollment forms locally before committing to the server, ensuring zero partial-data submissions.</li>
              <li><strong>Analytics Engine:</strong> Built a custom administrative dashboard that aggregates daily enrollment metrics, parsing relational data into digestible visual trends.</li>
              <li><strong>Data Integrity:</strong> Implemented strict relational database schemas to ensure student records, enrolled courses, and billing states remain perfectly synchronized.</li>
            </ul>
          </div>
        </motion.section>

        {/* 3. TRADE-OFFS */}
        <motion.section variants={fadeUp} className="mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <GitMerge className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            Architectural Trade-offs
          </h2>
          <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
            <h3 className="font-semibold text-lg mb-2">Why traditional REST over GraphQL?</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              While GraphQL excels in highly interconnected client-driven applications, the data access patterns for the AMA ACLC enrollment system were highly predictable and strictly defined by administrative roles. Implementing traditional REST APIs allowed for simpler server-side caching, easier rate-limiting, and a faster path to MVP without the overhead of maintaining a complex GraphQL schema.
            </p>
          </div>
        </motion.section>

        {/* 4. POST-MORTEM */}
        <motion.section variants={fadeUp} className="mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-amber-600 dark:text-amber-400" />
            Lessons Learned in State Management
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed border-l-4 border-amber-500 pl-6">
            <p>
              <strong>The Challenge:</strong> Early iterations of the multi-step enrollment form suffered from aggressive re-rendering. Because standard React state was lifting every keystroke to the top of the component tree, the UI felt sluggish on lower-end devices.
            </p>
            <p className="mt-4">
              <strong>The Fix:</strong> I refactored the form architecture to isolate re-renders at the input level using uncontrolled components where possible, completely resolving the performance bottleneck and ensuring a smooth UX even on legacy hardware.
            </p>
          </div>
        </motion.section>

        {/* 5. RESULTS */}
        <motion.section variants={fadeUp}>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <CheckCircle2 className="w-6 h-6 mr-3 text-emerald-600 dark:text-emerald-400" />
            Impact
          </h2>
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 p-6 rounded-xl mt-6">
            <p className="text-emerald-900 dark:text-emerald-100 font-medium leading-relaxed">
              Successfully transitioned the administrative workflow from physical, fragmented data entry into a unified digital ecosystem. The custom analytics dashboard now provides immediate visibility into enrollment metrics, allowing the administration to make data-driven decisions regarding resource allocation.
            </p>
          </div>
        </motion.section>
      </motion.article>
    </main>
  );
}