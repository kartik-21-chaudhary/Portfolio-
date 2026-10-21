import React from 'react';
import { DownloadIcon, ExternalLinkIcon } from './icons/Icons';

export const ResumeSection: React.FC = () => {
  return (
    <section className="py-20 border-t border-zinc-800/80 bg-zinc-950/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-center space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              Curriculum Vitae
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">
              Want to know more about my journey?
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              Download my resume to review my academic credentials, problem-solving progress in Java and C, and technical coursework.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/resume.pdf"
              download="Kartik_Chaudhary_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 shadow-sm"
            >
              <DownloadIcon className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              <span>Open in New Tab</span>
            </a>
          </div>

          <p className="text-xs font-mono text-zinc-500">
            Resume file location: <code className="text-emerald-400/90 font-mono">/public/resume.pdf</code>
          </p>
        </div>
      </div>
    </section>
  );
};
