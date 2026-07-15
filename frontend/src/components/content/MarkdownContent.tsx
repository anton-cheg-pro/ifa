/**
 * Renders simple markdown from docs/content/pages/*.md
 * Supports: paragraphs, ## h2, ### h3, - lists, [text](url), **bold**
 */

import type { ReactNode } from "react";
import "./MarkdownContent.css";

type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

function inlineFormat(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    const token = match[0];
    if (token.startsWith("**")) {
      parts.push(<strong key={match.index}>{token.slice(2, -2)}</strong>);
    } else {
      const linkMatch = /\[([^\]]+)\]\(([^)]+)\)/.exec(token);
      if (linkMatch) {
        parts.push(
          <a key={match.index} href={linkMatch[2]} target="_blank" rel="noopener noreferrer">
            {linkMatch[1]}
          </a>,
        );
      }
    }
    last = match.index + token.length;
  }

  if (last < text.length) {
    parts.push(text.slice(last));
  }

  return parts.length ? parts : [text];
}

function parseMarkdown(source: string): Block[] {
  const lines = source.split(/\r?\n/);
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    const text = paragraph.join(" ").trim();
    if (text) blocks.push({ type: "p", text });
    paragraph = [];
  };

  const flushList = () => {
    if (list.length) blocks.push({ type: "ul", items: list });
    list = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("<!--")) continue;

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h2", text: trimmed.slice(3).trim() });
      continue;
    }
    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h3", text: trimmed.slice(4).trim() });
      continue;
    }
    if (trimmed.startsWith("- ")) {
      flushParagraph();
      list.push(trimmed.slice(2).trim());
      continue;
    }

    flushList();
    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();
  return blocks;
}

type MarkdownContentProps = {
  source: string;
  className?: string;
};

export function MarkdownContent({ source, className = "" }: MarkdownContentProps) {
  const blocks = parseMarkdown(source);

  return (
    <div className={`markdown-content ${className}`.trim()}>
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2 key={index} className="markdown-content__h2">
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3 key={index} className="markdown-content__h3">
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={index} className="markdown-content__ul">
              {block.items.map((item) => (
                <li key={item}>{inlineFormat(item)}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index} className="markdown-content__p">
            {inlineFormat(block.text)}
          </p>
        );
      })}
    </div>
  );
}
