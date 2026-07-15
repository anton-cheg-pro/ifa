import type { ReactElement } from "react";
import "./SocialIconLinks.css";

type SocialLink = {
  id: string;
  label: string;
  href: string;
};

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 9.1a2.9 2.9 0 1 1 0 5.8 2.9 2.9 0 0 1 0-5.8z"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.9 4.6 2.8 11.5c-1.1.4-1.1 1.1-.2 1.4l4.9 1.5 1.9 5.8c.2.6.5.8 1 .8.5 0 .7-.2 1-.7l2.7-2.6 4.7 3.5c.9.5 1.5.2 1.7-.9L23 6.1c.3-1.2-.5-1.7-1.1-1.5z"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-8.7 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.2 1.1-1.7 1.1-.4 0-1-.2-2.4-.8-2.1-.9-3.5-3-3.6-3.1-.1-.2-1-1.3-1-2.5 0-1.2.6-1.8.8-2 .2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.7.8 1.8.1.1.1.3 0 .5-.1.2-.1.2-.3.4-.1.1-.3.3-.4.4-.1.1-.2.3 0 .6.2.3 1 1.5 2.4 2.5 1.7 1.1 2.1 1.2 2.5 1 .3-.1 1-.4 1.1-.8.1-.4.1-.7.3-.7.2 0 .5-.1 1-.4.5-.3 2.8-1.3 3.2-1.6.4-.3.7-.4.8-.6 0-.2 0-1.2-.6-1.8z"
      />
    </svg>
  );
}

const icons: Record<string, () => ReactElement> = {
  instagram: InstagramIcon,
  telegram: TelegramIcon,
  whatsapp: WhatsAppIcon,
};

export function SocialIconLinks({ links }: { links: SocialLink[] }) {
  return (
    <ul className="social-icons">
      {links.map((link) => {
        const Icon = icons[link.id];
        return (
          <li key={link.id}>
            <a
              href={link.href}
              className={`social-icons__link social-icons__link--${link.id}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {Icon ? <Icon /> : null}
              <span className="visually-hidden">{link.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
