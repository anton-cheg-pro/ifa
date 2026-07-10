import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import "./Button.css";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsLink = BaseProps & {
  to: string;
  children: React.ReactNode;
};

export function Button(props: ButtonAsButton | ButtonAsAnchor | ButtonAsLink) {
  const variant = props.variant ?? "primary";
  const className = `btn btn--${variant} ${props.className ?? ""}`.trim();

  if ("to" in props && props.to) {
    const { to, variant: _, className: __, children, ...rest } = props;
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    const { href, variant: _, className: __, children, ...rest } = props;
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }

  const { variant: _, className: __, children, ...rest } = props as ButtonAsButton;
  return (
    <button type="button" className={className} {...rest}>
      {children}
    </button>
  );
}
