import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from '../data/portfolioData';
import {
  GitHubIcon,
  LinkedInIcon,
  LeetCodeIcon,
  GeeksforGeeksIcon,
} from './icons/Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-12 text-zinc-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity */}
          <div className="space-y-1 text-center md:text-left">
            <span className="text-base font-bold text-zinc-100 tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-zinc-500 text-xs">
              Computer Science Engineering (AI & DS) • GLA University
            </p>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-3">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4 text-sky-400" />
            </a>
            <a
              href={SOCIAL_LINKS.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
              aria-label="LeetCode Profile"
            >
              <LeetCodeIcon className="w-4 h-4 text-amber-500" />
            </a>
            <a
              href={SOCIAL_LINKS.geeksforgeeks}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
              aria-label="GeeksforGeeks Profile"
            >
              <GeeksforGeeksIcon className="w-4 h-4 text-emerald-500" />
            </a>
          </div>
        </div>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-4 border-t border-zinc-900">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-zinc-200 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Copyright & Stack */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-zinc-500 pt-4 border-t border-zinc-900/60 text-[11px] gap-2 text-center">
          <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="font-mono">
            Built with <span className="text-zinc-300">React</span> &{' '}
            <span className="text-zinc-300">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
