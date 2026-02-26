"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, HardDrive, Network, GitPullRequest, AlertCircle, TrendingUp, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Required for optimized images

export default function VelociraptorCaseStudy() {
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Velociraptor ISP: Enterprise Logistics System</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            A mission-critical platform that digitizes the provisioning workflow for ISP customers, streamlining lead intake, document verification, and field technician scheduling.
          </p>
          
          {/* Project Links (Live Site & GitHub) */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="https://velociraptortech.vercel.app/" // Replace with your actual live link
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
              <span className="font-medium">Web Developer Intern</span>
            </div>
            <div>
              <span className="block text-slate-500 mb-1">Timeline</span>
              <span className="font-medium">May 2025 - July 2025</span>
            </div>
            <div className="col-span-2">
              <span className="block text-slate-500 mb-1">Core Focus</span>
              <span className="font-medium">Workflow Digitization, Logistics Routing, Data Ops</span>
            </div>
          </div>
        </motion.header>

        {/* Hero Image / App Screenshot */}
        <motion.div variants={fadeUp} className="mb-16 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg bg-white dark:bg-slate-900 relative aspect-video">
          <Image 
            src="/velociraptor.png" // The image you specified
            alt="Velociraptor ISP Enterprise Logistics Dashboard" 
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* 1. THE PROBLEM */}
        <motion.section variants={fadeUp} className="mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <HardDrive className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            The Operational Bottleneck
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Internet Service Provider (ISP) provisioning is historically a logistical nightmare. Before this system, the workflow relied heavily on manual data entry, physical document verification, and disjointed communication between customer support and field technicians. 
            </p>
            <p className="mt-4">
              <strong>The Goal:</strong> Eliminate data silos by architecting a unified digital pipeline that handles a customer from the initial inbound lead all the way to the final hardware installation.
            </p>
          </div>
        </motion.section>

        {/* 2. ARCHITECTURE */}
        <motion.section variants={fadeUp} className="mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Network className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            System Architecture & Pipeline
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              I engineered a multi-stage logistics system designed to handle sensitive customer records securely while keeping operations moving swiftly.
            </p>
            
            

            <ul className="list-disc pl-6 mt-6 space-y-2">
              <li><strong>Lead Intake Engine:</strong> Digitized the initial customer onboarding, automatically categorizing inbound requests and parsing necessary client data.</li>
              <li><strong>Document Verification:</strong> Created a secure staging area for sensitive customer records, allowing administrators to rapidly approve or flag installation requirements.</li>
              <li><strong>Technician Dispatch:</strong> Built a scheduling interface that bridges the gap between verified documents and field technician availability, drastically reducing installation delays.</li>
            </ul>
          </div>
        </motion.section>

        {/* 3. TRADE-OFFS */}
        <motion.section variants={fadeUp} className="mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <GitPullRequest className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            Strategic Trade-offs
          </h2>
          <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
            <h3 className="font-semibold text-lg mb-2">Custom Build vs. Off-the-Shelf CRM</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              While platforms like Salesforce exist, they are often bloated and incredibly expensive for localized operations. We opted to engineer a custom, lightweight solution tailored specifically to the exact daily habits of the ISP technicians and support staff. The trade-off was increased upfront development time, but it resulted in a system with zero unnecessary features and a near-instant user adoption rate.
            </p>
          </div>
        </motion.section>

        {/* 4. POST-MORTEM */}
        <motion.section variants={fadeUp} className="mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <AlertCircle className="w-6 h-6 mr-3 text-amber-600 dark:text-amber-400" />
            Lessons in Data Management
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed border-l-4 border-amber-500 pl-6">
            <p>
              <strong>The Challenge:</strong> Handling inbound calls simultaneously while migrating sensitive customer records highlighted massive inefficiencies in how data was originally indexed.
            </p>
            <p className="mt-4">
              <strong>The Fix:</strong> I restructured the data management protocol, implementing strict relational categories for client records. This not only improved data retrieval speeds during live support calls but fundamentally improved the overall service delivery pipeline.
            </p>
          </div>
        </motion.section>

        {/* 5. RESULTS */}
        <motion.section variants={fadeUp}>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <TrendingUp className="w-6 h-6 mr-3 text-emerald-600 dark:text-emerald-400" />
            Business Impact
          </h2>
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 p-6 rounded-xl mt-6">
            <p className="text-emerald-900 dark:text-emerald-100 font-medium leading-relaxed">
              Transformed a high-friction, manual process into a centralized digital workflow. The system successfully streamlined client communication, secured sensitive data, and significantly reduced the time between lead acquisition and final technician provisioning.
            </p>
          </div>
        </motion.section>
      </motion.article>
    </main>
  );
}