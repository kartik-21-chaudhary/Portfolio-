import React, { useState } from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import {
  GitHubIcon,
  LinkedInIcon,
  LeetCodeIcon,
  GeeksforGeeksIcon,
  ArrowUpRightIcon,
  DownloadIcon,
  CopyIcon,
  CheckIcon,
} from './icons/Icons';

export const Hero: React.FC = () => {
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const codeSnippet = `public class Solution {
    // Two Pointers: O(N) Time, O(1) Auxiliary Space
    public int[] twoSum(int[] numbers, int target) {
        int left = 0, right = numbers.length - 1;
        while (left < right) {
            int sum = numbers[left] + numbers[right];
            if (sum == target) return new int[]{left + 1, right + 1};
            else if (sum < target) left++;
            else right--;
        }
        return new int[]{-1, -1};
    }
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
    >
      {/* Subtle background glow - kept minimal and non-flashy */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-zinc-900 border border-zinc-800 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Software Engineering Internships</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-100">
                Hi, I'm{' '}
                <span className="text-emerald-400">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-zinc-300">
                {PERSONAL_INFO.tagline}
              </p>
            </div>

            <p className="text-base text-zinc-400 leading-relaxed max-w-xl">
              {PERSONAL_INFO.shortDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 shadow-sm"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <DownloadIcon className="w-4 h-4 text-emerald-400" />
                View Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60 transition-colors"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-zinc-800/80">
              <span className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
                Coding Profiles & Links
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-zinc-100 text-xs font-medium transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon className="w-4 h-4 text-zinc-300" />
                  <span>GitHub</span>
                  <ArrowUpRightIcon className="w-3 h-3 text-zinc-500" />
                </a>

                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-zinc-100 text-xs font-medium transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRightIcon className="w-3 h-3 text-zinc-500" />
                </a>

                <a
                  href={SOCIAL_LINKS.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-zinc-100 text-xs font-medium transition-colors"
                  aria-label="LeetCode Profile"
                >
                  <LeetCodeIcon className="w-4 h-4 text-amber-500" />
                  <span>LeetCode</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 font-mono font-semibold">
                    200+
                  </span>
                </a>

                <a
                  href={SOCIAL_LINKS.geeksforgeeks}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-zinc-100 text-xs font-medium transition-colors"
                  aria-label="GeeksforGeeks Profile"
                >
                  <GeeksforGeeksIcon className="w-4 h-4 text-emerald-500" />
                  <span>GeeksforGeeks</span>
                  <ArrowUpRightIcon className="w-3 h-3 text-zinc-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Technical Code Visual */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 shadow-2xl overflow-hidden font-mono text-xs">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-950/80 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/70" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  <span className="ml-2 text-zinc-400 text-xs font-sans">
                    TwoSumII.java
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                    Java
                  </span>
                  <button
                    type="button"
                    onClick={copyCode}
                    className="p-1 rounded text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
                    title="Copy code snippet"
                    aria-label="Copy code snippet"
                  >
                    {copiedSnippet ? (
                      <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <CopyIcon className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="p-4 sm:p-5 space-y-1 overflow-x-auto text-zinc-300 leading-relaxed">
                <div>
                  <span className="text-zinc-600 select-none mr-3">01</span>
                  <span className="text-zinc-500">// Two Pointers: O(N) Time, O(1) Space</span>
                </div>
                <div>
                  <span className="text-zinc-600 select-none mr-3">02</span>
                  <span className="text-emerald-400">public class</span>{' '}
                  <span className="text-zinc-100 font-semibold">Solution</span> &#123;
                </div>
                <div>
                  <span className="text-zinc-600 select-none mr-3">03</span>
                  &nbsp;&nbsp;<span className="text-emerald-400">public int</span>[]{' '}
                  <span className="text-sky-300">twoSum</span>(int[] nums, int target) &#123;
                </div>
                <div>
                  <span className="text-zinc-600 select-none mr-3">04</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;int left = 0, right = nums.length - 1;
                </div>
                <div>
                  <span className="text-zinc-600 select-none mr-3">05</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">while</span> (left &lt; right) &#123;
                </div>
                <div>
                  <span className="text-zinc-600 select-none mr-3">06</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int sum = nums[left] + nums[right];
                </div>
                <div>
                  <span className="text-zinc-600 select-none mr-3">07</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">if</span> (sum == target)
                </div>
                <div>
                  <span className="text-zinc-600 select-none mr-3">08</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">return new int</span>[]&#123;left + 1, right + 1&#125;;
                </div>
                <div>
                  <span className="text-zinc-600 select-none mr-3">09</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">else if</span> (sum &lt; target) left++;
                </div>
                <div>
                  <span className="text-zinc-600 select-none mr-3">10</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">else</span> right--;
                </div>
                <div>
                  <span className="text-zinc-600 select-none mr-3">11</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&#125;
                </div>
                <div>
                  <span className="text-zinc-600 select-none mr-3">12</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">return new int</span>[]&#123;-1, -1&#125;;
                </div>
                <div>
                  <span className="text-zinc-600 select-none mr-3">13</span>
                  &nbsp;&nbsp;&#125;
                </div>
                <div>
                  <span className="text-zinc-600 select-none mr-3">14</span>
                  &#125;
                </div>
              </div>

              {/* Terminal Output Footer */}
              <div className="px-4 py-2.5 bg-zinc-950/80 border-t border-zinc-800 text-[11px] text-zinc-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Accepted: 200+ LeetCode Solved
                </span>
                <span className="text-zinc-500">GLA University • 2030</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
