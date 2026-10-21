import React from 'react';

interface MarkdownViewProps {
  content: string;
}

export const MarkdownView: React.FC<MarkdownViewProps> = ({ content }) => {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];

  let inList = false;
  let listItems: React.ReactNode[] = [];
  let isNumbered = false;

  const flushList = () => {
    if (inList && listItems.length > 0) {
      if (isNumbered) {
        elements.push(
          <ol key={`list-${elements.length}`} className="list-decimal pl-5 space-y-1.5 my-2 text-zinc-300 text-xs sm:text-sm">
            {listItems}
          </ol>
        );
      } else {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc pl-5 space-y-1 my-2 text-zinc-300 text-xs sm:text-sm">
            {listItems}
          </ul>
        );
      }
      listItems = [];
      inList = false;
    }
  };

  const formatInlineText = (text: string): React.ReactNode => {
    // Process markdown links [label](url), bold **text**, and inline code `code`
    const parts: React.ReactNode[] = [];
    const regex = /(\[.*?\]\(https?:\/\/.*?\)|\*\*.*?\*\*|`.*?`)/g;
    let lastIdx = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIdx) {
        parts.push(text.substring(lastIdx, match.index));
      }

      const token = match[0];
      if (token.startsWith('[') && token.includes('](')) {
        const linkMatch = token.match(/^\[(.*?)\]\((.*?)\)$/);
        if (linkMatch) {
          parts.push(
            <a
              key={match.index}
              href={linkMatch[2]}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:underline font-medium inline-flex items-center gap-0.5"
            >
              {linkMatch[1]}
            </a>
          );
        } else {
          parts.push(token);
        }
      } else if (token.startsWith('**') && token.endsWith('**')) {
        parts.push(
          <strong key={match.index} className="text-zinc-100 font-semibold">
            {token.slice(2, -2)}
          </strong>
        );
      } else if (token.startsWith('`') && token.endsWith('`')) {
        parts.push(
          <code
            key={match.index}
            className="px-1.5 py-0.5 rounded bg-zinc-800 text-emerald-400 font-mono text-xs border border-zinc-700/60"
          >
            {token.slice(1, -1)}
          </code>
        );
      }
      lastIdx = regex.lastIndex;
    }

    if (lastIdx < text.length) {
      parts.push(text.substring(lastIdx));
    }

    return parts.length > 0 ? parts : text;
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (!trimmed || trimmed === '***' || trimmed === '---') {
      flushList();
      return;
    }

    // Headings
    if (trimmed.startsWith('### ')) {
      flushList();
      elements.push(
        <h4 key={index} className="text-xs sm:text-sm font-bold text-emerald-400 pt-2 pb-1 font-mono uppercase tracking-wide">
          {formatInlineText(trimmed.replace(/^###\s+/, ''))}
        </h4>
      );
      return;
    }

    if (trimmed.startsWith('## ')) {
      flushList();
      elements.push(
        <h3 key={index} className="text-sm font-bold text-zinc-100 pt-2 pb-1">
          {formatInlineText(trimmed.replace(/^##\s+/, ''))}
        </h3>
      );
      return;
    }

    // Numbered list item
    const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
    if (numMatch) {
      if (!inList || !isNumbered) {
        flushList();
        inList = true;
        isNumbered = true;
      }
      listItems.push(
        <li key={index} className="leading-relaxed">
          {formatInlineText(numMatch[2])}
        </li>
      );
      return;
    }

    // Bullet list item
    const bulletMatch = trimmed.match(/^[-*]\s+(.*)/);
    if (bulletMatch) {
      if (!inList || isNumbered) {
        flushList();
        inList = true;
        isNumbered = false;
      }
      listItems.push(
        <li key={index} className="leading-relaxed">
          {formatInlineText(bulletMatch[1])}
        </li>
      );
      return;
    }

    // Regular line
    flushList();
    elements.push(
      <p key={index} className="leading-relaxed my-1 text-xs sm:text-sm">
        {formatInlineText(trimmed)}
      </p>
    );
  });

  flushList();

  return <div className="space-y-1">{elements}</div>;
};
