"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          
          {/* CTA Section */}
          <div className="max-w-md">
            <h2 className="text-xl font-bold tracking-tight mb-2 text-slate-900 dark:text-white">
              Let's build something together.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Looking for a full-stack engineer or technical operations specialist? I'm currently open to new freelance and virtual assistance opportunities.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link 
              href="/contact" 
              className="inline-flex justify-center items-center px-6 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium rounded-md hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-sm whitespace-nowrap"
            >
              Get in Touch
            </Link>
            <a 
              href="mailto:nathaniel.v.faa@gmail.com" 
              className="inline-flex justify-center items-center px-6 py-3 border border-slate-300 dark:border-slate-700 font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors bg-slate-50 dark:bg-slate-900 whitespace-nowrap"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Me
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-400">
          <p>
            © {currentYear} Nathaniel Faa. Built with Next.js & Tailwind.
          </p>

          <div className="flex items-center gap-6">
            <a href="https://github.com/NathCracker" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/nathaniel-faa-874a02211/" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            
            <span className="w-px h-4 bg-slate-300 dark:bg-slate-700"></span> {/* Divider */}
            
            <button 
              onClick={scrollToTop}
              className="flex items-center font-medium hover:text-slate-900 dark:hover:text-white transition-colors group"
            >
              Back to top 
              <ArrowUp className="w-4 h-4 ml-1 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}