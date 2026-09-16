import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function IconPhone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6.2 3.75h2.05c.55 0 1.02.38 1.16.91l.7 2.55c.12.46-.04.95-.4 1.25L8.6 9.5a11 11 0 0 0 5.9 5.9l1.04-1.12c.3-.36.79-.52 1.25-.4l2.55.7c.53.14.91.61.91 1.16v2.05c0 .73-.6 1.32-1.33 1.28C11.3 20.72 3.28 12.7 3.47 5.08c.03-.73.62-1.33 1.35-1.33h1.38z" />
    </svg>
  );
}

export function IconDrain(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="7.25" />
      <path d="M12 8.5v7M9 10.5c1.2 1 2.1 1.5 3 1.5s1.8-.5 3-1.5M9 13.5c1.2 1 2.1 1.5 3 1.5s1.8-.5 3-1.5" />
    </svg>
  );
}

export function IconDrop(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 4.5c0 0-5.5 6.4-5.5 10.2A5.5 5.5 0 0 0 12 20.2a5.5 5.5 0 0 0 5.5-5.5C17.5 10.9 12 4.5 12 4.5z" />
    </svg>
  );
}

export function IconHeater(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="7" y="3.75" width="10" height="16.5" rx="1.5" />
      <path d="M10 8h4M10 12h4M10 16h2" />
    </svg>
  );
}

export function IconFaucet(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 14V9.5A3.5 3.5 0 0 1 8.5 6H12" />
      <path d="M12 6h5.5A2.5 2.5 0 0 1 20 8.5V11" />
      <path d="M20 11h-2.5" />
      <path d="M5 14h4" />
      <path d="M17.5 13.5c0 1.2-.7 2.2-1.2 3" />
    </svg>
  );
}

export function IconHome(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4.5 11.5 12 5l7.5 6.5V19a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 4.5 19z" />
      <path d="M10 20.5v-6h4v6" />
    </svg>
  );
}

export function IconWrench(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M14.5 6.5a4 4 0 0 1 4.7 4.7L13 17.4 8.6 13l6-6.5z" />
      <path d="M8.6 13 5.2 16.4a1.8 1.8 0 0 0 2.5 2.5L11 15.6" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0 0 5.5 10.8C5.5 15.8 12 21 12 21z" />
      <circle cx="12" cy="10.5" r="2.2" />
    </svg>
  );
}

export const serviceIcons = [
  IconDrain,
  IconDrop,
  IconHeater,
  IconFaucet,
  IconHome,
  IconWrench,
] as const;
