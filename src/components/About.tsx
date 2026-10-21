import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MapPinIcon, GraduationCapIcon, CodeIcon, AwardIcon } from './icons/Icons';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-zinc-800/80 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">
            Background & Engineering Mindset
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story */}
          <div className="lg:col-span-7 space-y-5 text-zinc-300 text-base leading-relaxed">
            {PERSONAL_INFO.aboutStory.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                Core Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Structures & Algorithms',
                  'Competitive Programming',
                  'Java Development',
                  'Artificial Intelligence & Data Science',
                  'Software Development',
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Facts Card Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3.5 hover:border-zinc-700 transition-colors">
              <div className="p-2.5 rounded-lg bg-zinc-800 text-emerald-400 shrink-0">
                <GraduationCapIcon className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-[11px] font-mono text-zinc-500 uppercase">
                  University Education
                </span>
                <p className="text-sm font-semibold text-zinc-200">
                  GLA University
                </p>
                <p className="text-xs text-zinc-400">
                  B.Tech CSE (AI & DS) • Class of 2030
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3.5 hover:border-zinc-700 transition-colors">
              <div className="p-2.5 rounded-lg bg-zinc-800 text-emerald-400 shrink-0">
                <AwardIcon className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-[11px] font-mono text-zinc-500 uppercase">
                  Academic Performance
                </span>
                <p className="text-sm font-semibold text-zinc-200">
                  Current CPI: {PERSONAL_INFO.educationBrief.cpi} / 10.0
                </p>
                <p className="text-xs text-zinc-400">
                  Class XII: 73.2% • Class X: 69%
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3.5 hover:border-zinc-700 transition-colors">
              <div className="p-2.5 rounded-lg bg-zinc-800 text-emerald-400 shrink-0">
                <CodeIcon className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-[11px] font-mono text-zinc-500 uppercase">
                  Coding Benchmark
                </span>
                <p className="text-sm font-semibold text-zinc-200">
                  200+ LeetCode Problems Solved
                </p>
                <p className="text-xs text-zinc-400">
                  Active problem solver on GFG & Unstop POTD
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3.5 hover:border-zinc-700 transition-colors">
              <div className="p-2.5 rounded-lg bg-zinc-800 text-emerald-400 shrink-0">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-[11px] font-mono text-zinc-500 uppercase">
                  Location & Availability
                </span>
                <p className="text-sm font-semibold text-zinc-200">
                  {PERSONAL_INFO.location}
                </p>
                <p className="text-xs text-zinc-400">
                  Open to remote and on-site internships
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
