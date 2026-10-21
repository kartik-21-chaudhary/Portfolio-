import React from 'react';
import { CODING_PLATFORMS, SOCIAL_LINKS } from '../data/portfolioData';
import {
  LeetCodeIcon,
  GeeksforGeeksIcon,
  GitHubIcon,
  ArrowUpRightIcon,
  CheckIcon,
} from './icons/Icons';

export const Coding: React.FC = () => {
  return (
    <section id="coding" className="py-20 border-t border-zinc-800/80 bg-zinc-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Prominent Header Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-zinc-900/60 to-zinc-900/40 border border-emerald-500/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Core Milestone
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
                200+ LeetCode Problems Solved
              </h2>
              <p className="text-zinc-400 text-sm max-w-xl">
                Rigorous focus on Data Structures & Algorithms using Java. Practicing standard patterns, time and space complexity optimizations, and daily coding challenges.
              </p>
            </div>

            <div className="shrink-0 flex flex-wrap gap-2.5">
              <a
                href={SOCIAL_LINKS.leetcode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <span>Verify on LeetCode</span>
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Coding Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CODING_PLATFORMS.map((item) => {
            let IconComponent = GitHubIcon;
            if (item.platform === 'LeetCode') IconComponent = LeetCodeIcon;
            if (item.platform === 'GeeksforGeeks') IconComponent = GeeksforGeeksIcon;

            return (
              <div
                key={item.platform}
                className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-200 group-hover:text-emerald-400 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">
                      {item.statBadge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-zinc-100">
                    {item.platform}
                  </h3>
                  <span className="block text-xs font-mono text-zinc-400 mb-3">
                    {item.handle}
                  </span>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <span>View {item.platform} Profile</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Algorithmic Problem Solving Visual */}
        <div className="mt-8 p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/70">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold">
              DSA & Problem-Solving Competencies
            </h4>
            <span className="text-xs font-mono text-emerald-400">
              Primary Language: Java (JDK 17/21)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 text-xs">
            {[
              { topic: 'Arrays & Hashing', count: 'Frequency Maps, Prefix Sums' },
              { topic: 'Two Pointers', count: 'Sorted Arrays, In-place' },
              { topic: 'Sliding Window', count: 'Fixed & Dynamic Bounds' },
              { topic: 'Linked Lists', count: 'Fast/Slow Pointers, Cycles' },
              { topic: 'Binary Trees', count: 'BFS, DFS Traversals' },
              { topic: 'Binary Search', count: 'O(log N) Space Reduction' },
            ].map((item) => (
              <div
                key={item.topic}
                className="p-3 rounded-lg bg-zinc-950/70 border border-zinc-800/80 space-y-1"
              >
                <div className="flex items-center gap-1.5 text-zinc-200 font-medium">
                  <CheckIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{item.topic}</span>
                </div>
                <p className="text-[10px] font-mono text-zinc-500 truncate">
                  {item.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
