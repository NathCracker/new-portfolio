"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, MonitorSmartphone, Layers, Zap, PenTool, CheckCircle, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Required for optimized images

export default function GuildBaseCaseStudy() {
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">GuildBase: Dynamic Web Application</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            A performance-first web application engineered for scalable data handling, reliable state management, and an accessible, responsive user interface.
          </p>
          
          {/* Project Links (Live Site & GitHub) */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="https://guild-base.vercel.app/" // Replace with your actual live link
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
              <span className="font-medium">Frontend Architect</span>
            </div>
            <div>
              <span className="block text-slate-500 mb-1">Timeline</span>
              <span className="font-medium">2025</span>
            </div>
            <div className="col-span-2">
              <span className="block text-slate-500 mb-1">Core Tech</span>
              <span className="font-medium">React, Next.js, Tailwind CSS, State Management</span>
            </div>
          </div>
        </motion.header>

        {/* Hero Image / App Screenshot */}
        <motion.div variants={fadeUp} className="mb-16 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg bg-white dark:bg-slate-900 relative aspect-video">
          <Image 
            src="/guildbase.png" // The image you specified
            alt="GuildBase Web Application Interface" 
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* 1. THE PROBLEM */}
        <motion.section variants={fadeUp} className="mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <MonitorSmartphone className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            The Frontend Challenge
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Modern web applications often suffer from two major flaws: bloated bundle sizes that drastically increase Time to Interactive (TTI), and poor layout stability that causes layout shifts as dynamic data loads. 
            </p>
            <p className="mt-4">
              <strong>The Goal:</strong> Build a highly interactive, data-rich frontend that maintains a strict 60fps frame rate during animations and strictly adheres to WCAG accessibility standards, regardless of the user's device capabilities.
            </p>
          </div>
        </motion.section>

        {/* 2. ARCHITECTURE */}
        <motion.section variants={fadeUp} className="mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Layers className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            Component & State Architecture
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              To guarantee performance, I utilized a strict component-driven design philosophy paired with advanced rendering strategies.
            </p>
            
            
            
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Rendering Strategy:</strong> Leveraged Next.js Server Components to render static UI on the edge, shipping zero JavaScript to the client for non-interactive elements.</li>
              <li><strong>State Management:</strong> Implemented centralized state management to avoid prop-drilling, ensuring UI components remain decoupled and highly reusable.</li>
              <li><strong>Optimistic UI:</strong> Designed asynchronous mutations to update the UI instantly (optimistic updates), masking network latency and creating a snappy, app-like feel.</li>
            </ul>
          </div>
        </motion.section>

        {/* 3. TRADE-OFFS */}
        <motion.section variants={fadeUp} className="mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            Architectural Trade-offs
          </h2>
          <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
            <h3 className="font-semibold text-lg mb-2">SSR vs. Traditional SPA (Vite/CRA)</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              I opted for Server-Side Rendering (SSR) via Next.js rather than a traditional Single Page Application. While SPAs are easier to initially configure, the SEO benefits and massive reduction in First Contentful Paint (FCP) that SSR provides were non-negotiable for a public-facing application. The trade-off was increased routing complexity, which I mitigated by heavily utilizing Next.js layout patterns.
            </p>
          </div>
        </motion.section>

        {/* 4. POST-MORTEM */}
        <motion.section variants={fadeUp} className="mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <PenTool className="w-6 h-6 mr-3 text-amber-600 dark:text-amber-400" />
            Lessons Learned in Accessibility
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed border-l-4 border-amber-500 pl-6">
            <p>
              <strong>What Failed:</strong> Initial builds relied too heavily on visual cues (like color alone) to indicate form validation states, which failed early accessibility audits. 
            </p>
            <p className="mt-4">
              <strong>The Fix:</strong> I overhauled the UI component library to strictly implement ARIA labels, semantic HTML tags, and redundant visual indicators (icons + text + color). This not only made the site accessible to screen readers but vastly improved the UX for all users.
            </p>
          </div>
        </motion.section>

        {/* 5. RESULTS */}
        <motion.section variants={fadeUp}>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <CheckCircle className="w-6 h-6 mr-3 text-emerald-600 dark:text-emerald-400" />
            The Result
          </h2>
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 p-6 rounded-xl mt-6">
            <p className="text-emerald-900 dark:text-emerald-100 font-medium leading-relaxed">
              Delivered a highly resilient web application boasting near-perfect Lighthouse scores across Performance, Accessibility, Best Practices, and SEO. The codebase remains highly modular, allowing for rapid iteration and feature additions without accumulating technical debt.
            </p>
          </div>
        </motion.section>
      </motion.article>
    </main>
  );
}