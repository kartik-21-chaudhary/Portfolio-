import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { GitHubIcon, ExternalLinkIcon } from './icons/Icons';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">
            Projects & Code Repositories
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            Real repositories and project roadmap. No fabricated projects or fake demos.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => {
            const isInProgress = project.status === 'In Progress';
            const isPlanned = project.status === 'Planned';

            return (
              <div
                key={project.id}
                className="rounded-xl bg-zinc-900/40 border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors group"
              >
                <div>
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${
                        isInProgress
                          ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                          : 'bg-zinc-800 text-zinc-400 border-zinc-700'
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {isInProgress ? 'Active Repository' : 'Roadmap'}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors mb-2.5">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: Supports GitHub & Live Demo with accessible disabled states */}
                <div className="flex items-center gap-2 pt-4 border-t border-zinc-800/80">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    >
                      <GitHubIcon className="w-3.5 h-3.5" />
                      <span>Code Repo</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-zinc-900/60 text-zinc-500 border border-zinc-800/80 cursor-not-allowed"
                      title="Code will be linked upon repository launch"
                    >
                      <GitHubIcon className="w-3.5 h-3.5 opacity-40" />
                      <span>Code ({isPlanned ? 'Planned' : 'Pending'})</span>
                    </button>
                  )}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors"
                    >
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-zinc-900/60 text-zinc-500 border border-zinc-800/80 cursor-not-allowed"
                      title="Demo unavailable until release"
                    >
                      <ExternalLinkIcon className="w-3.5 h-3.5 opacity-40" />
                      <span>Demo N/A</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
