"use client";

import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Clock, Send, Github, Linkedin, Terminal } from "lucide-react";

export default function ContactPage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* HEADER */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-2xl mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let's build something.</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Whether you need a full-stack engineer to architect a secure web platform, or a highly technical virtual assistant to streamline your digital operations, I am currently open to new opportunities. 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT COLUMN: Info & Availability */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-10"
          >
            {/* Services */}
            <motion.div variants={fadeUp}>
              <h3 className="text-sm font-bold tracking-wider text-slate-500 uppercase mb-4">Current Availability</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700 dark:text-slate-300">
                  <Terminal className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
                  Freelance Full-Stack Development
                </li>
                <li className="flex items-center text-slate-700 dark:text-slate-300">
                  <Terminal className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
                  Technical Virtual Assistance & Operations
                </li>
              </ul>
            </motion.div>

            {/* Logistics */}
            <motion.div variants={fadeUp}>
              <h3 className="text-sm font-bold tracking-wider text-slate-500 uppercase mb-4">Logistics</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 text-slate-400" />
                  <div>
                    <p className="font-medium">Manila, Philippines</p>
                    <p className="text-sm text-slate-500">Remote worldwide</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 mt-0.5 text-slate-400" />
                  <div>
                    <p className="font-medium">Philippine Standard Time (UTC+8)</p>
                    <p className="text-sm text-slate-500">Flexible hours for US/EU overlap</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-slate-400" />
                  <a href="mailto:nathaniel.v.faa@gmail.com" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    nathaniel.v.faa@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div variants={fadeUp} className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <a href="https://github.com/nathcracker" target="_blank" rel="noreferrer" className="p-2 bg-slate-200 dark:bg-slate-800 rounded-md hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/nathaniel-faa-874a02211/" target="_blank" rel="noreferrer" className="p-2 bg-slate-200 dark:bg-slate-800 rounded-md hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Contact Form connected to Web3Forms */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm"
          >
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="f507a382-1b9e-492e-9828-33e61f99d1d8" />

              {/* Optional: Add a subject line for the email you receive */}
              <input type="hidden" name="subject" value="New Portfolio Inquiry from Nathaniel's Portfolio" />

              {/* Optional: Prevents spam */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-shadow"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-shadow"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiry_type" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                <input 
                  type="text" 
                  id="inquiry_type" 
                  name="inquiry_type"
                  required
                  className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-shadow"
                  placeholder="Project Inquiry / Role Opening"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-shadow resize-none"
                  placeholder="Tell me about your project, timeline, and goals..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full flex justify-center items-center px-6 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium rounded-md hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}