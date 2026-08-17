import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

const variants = {
  primary: "lux-button--primary",
  secondary: "lux-button--secondary",
  outline: "lux-button--outline",
};

export function Button(props: ButtonProps | AnchorProps) {
  const { variant = "primary", className = "", ...rest } = props;

  const classes =
    `lux-button ${variants[variant]} ${className}`.trim();

  if ("href" in rest && rest.href) {
    const isExternal = rest.href.startsWith("http");

    if (isExternal) {
      return (
        <a
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {rest.children}
        </a>
      );
    }

    return (
      <Link
        href={rest.href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {rest.children}
      </Link>
    );
  }

  return (
    <button
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      className={classes}
    >
      {rest.children}
    </button>
  );
}