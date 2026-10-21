import React from 'react';
import { EDUCATION } from '../data/portfolioData';
import { GraduationCapIcon } from './icons/Icons';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            Academics
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">
            Education Timeline
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            My academic progression in Computer Science and Engineering.
          </p>
        </div>

        {/* Education List */}
        <div className="space-y-5 max-w-4xl">
          {EDUCATION.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col sm:flex-row sm:items-start justify-between gap-5 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-zinc-800 text-emerald-400 shrink-0 mt-0.5 group-hover:bg-emerald-500/10 transition-colors">
                  <GraduationCapIcon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                      {edu.qualification}
                    </h3>
                    {edu.statusBadge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        {edu.statusBadge}
                      </span>
                    )}
                  </div>
                  {edu.field && (
                    <p className="text-xs font-medium text-emerald-400/90 font-mono">
                      {edu.field}
                    </p>
                  )}
                  {edu.institution && (
                    <p className="text-xs text-zinc-300">{edu.institution}</p>
                  )}
                  {edu.details && (
                    <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                      {edu.details}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:text-right shrink-0 font-mono space-y-1 sm:pt-0.5">
                <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-zinc-800 text-zinc-200 border border-zinc-700/80">
                  {edu.score}
                </span>
                <span className="block text-xs text-zinc-500">
                  {edu.periodOrYear}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
