import React, { useState } from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  LinkedInIcon,
  GitHubIcon,
  CopyIcon,
  CheckIcon,
  ArrowUpRightIcon,
} from './icons/Icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">
            Contact Details
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            I am currently open to software development internship opportunities, campus tech collaborations, and competitive programming discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details List */}
          <div className="lg:col-span-6 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 flex items-center justify-between gap-4 hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-lg bg-zinc-800 text-emerald-400 shrink-0">
                  <MailIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-mono text-zinc-500 uppercase">
                    Email
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-zinc-200 hover:text-emerald-400 transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <CheckIcon className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <CopyIcon className="w-4 h-4" />
                  )}
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-700 transition-colors"
                  title="Open in mail client"
                  aria-label="Send email"
                >
                  <ArrowUpRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 flex items-center justify-between gap-4 hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-zinc-800 text-emerald-400 shrink-0">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-zinc-500 uppercase">
                    Phone
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm font-semibold text-zinc-200 hover:text-emerald-400 transition-colors"
                  >
                    +91 {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={copyPhone}
                  className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <CheckIcon className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <CopyIcon className="w-4 h-4" />
                  )}
                </button>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-700 transition-colors"
                  title="Call phone number"
                  aria-label="Call phone number"
                >
                  <ArrowUpRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 flex items-center gap-3.5 hover:border-zinc-700 transition-colors">
              <div className="p-2.5 rounded-lg bg-zinc-800 text-emerald-400 shrink-0">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[11px] font-mono text-zinc-500 uppercase">
                  Location
                </span>
                <p className="text-sm font-semibold text-zinc-200">
                  {PERSONAL_INFO.location}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Connect Actions */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-6">
            <h3 className="text-base font-bold text-zinc-100">
              Direct Contact
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Connect directly via email or professional profiles. I check notifications regularly and will respond promptly.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Opportunity%20Inquiry%20-%20Kartik%20Chaudhary`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <MailIcon className="w-4 h-4" />
                <span>Send Email to {PERSONAL_INFO.email}</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700/80 transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4 text-sky-400" />
                  <span>Connect on LinkedIn</span>
                </a>

                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700/80 transition-colors"
                >
                  <GitHubIcon className="w-4 h-4 text-zinc-300" />
                  <span>View GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
