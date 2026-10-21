import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            Technical Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">
            Skills & Competencies
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            Strictly focused on programming languages, core CS disciplines, and tools I actively practice and write code with.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800">
                  <h3 className="text-sm font-semibold text-zinc-200 font-mono">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {category.skills.length} items
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800/70 text-zinc-300 border border-zinc-700/60 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
