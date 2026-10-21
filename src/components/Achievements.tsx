import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { AwardIcon, ArrowUpRightIcon } from './icons/Icons';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 border-t border-zinc-800/80 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            Milestones
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">
            Achievements & Campus Activities
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            Key milestones in competitive programming, technical communities, and university initiatives.
          </p>
        </div>

        {/* Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors flex items-start gap-4 group"
            >
              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 mt-0.5 group-hover:bg-emerald-500/20 transition-colors">
                <AwardIcon className="w-5 h-5" />
              </div>

              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                    {item.tag}
                  </span>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-zinc-400 hover:text-emerald-400 inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Profile</span>
                      <ArrowUpRightIcon className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <h3 className="text-base font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-emerald-400/90 font-mono">
                  {item.subtitle}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
