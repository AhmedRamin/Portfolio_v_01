const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const MailIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden {...S} {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);

export const GithubIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.06 10.06 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
  </svg>
);

export const LinkedinIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm6.5 0h3.83v1.64h.05a4.2 4.2 0 0 1 3.78-2.08c4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4V9Z" />
  </svg>
);

export const FacebookIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.87.24-1.46 1.49-1.46h1.6V4.44c-.28-.04-1.23-.12-2.34-.12-2.32 0-3.9 1.4-3.9 3.98v2.2H7.7v3h2.65V21h3.15Z" />
  </svg>
);

export const PinIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden {...S} {...p}>
    <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const ArrowIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden {...S} {...p}>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export const CapsIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden {...S} {...p}>
    <path d="m2.5 8.5 9.5-4.5 9.5 4.5-9.5 4.5-9.5-4.5Z" />
    <path d="M6 10.8V15c0 1.6 2.7 3 6 3s6-1.4 6-3v-4.2M21.5 8.5v5" />
  </svg>
);

export const SparkIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden {...S} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />
  </svg>
);

export const MenuIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden {...S} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden {...S} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const CodeIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden {...S} {...p}>
    <path d="m8.5 8.5-4 3.5 4 3.5M15.5 8.5l4 3.5-4 3.5M13.6 5l-3.2 14" />
  </svg>
);

const groupIcons = {
  layout: (p) => (
    <svg viewBox="0 0 24 24" aria-hidden {...S} {...p}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M9 9v11" />
    </svg>
  ),
  server: (p) => (
    <svg viewBox="0 0 24 24" aria-hidden {...S} {...p}>
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <path d="M7 7h.01M7 17h.01" />
    </svg>
  ),
  database: (p) => (
    <svg viewBox="0 0 24 24" aria-hidden {...S} {...p}>
      <ellipse cx="12" cy="6" rx="8" ry="3.2" />
      <path d="M4 6v12c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2V6" />
      <path d="M4 12c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2" />
    </svg>
  ),
  code: CodeIcon,
  terminal: (p) => (
    <svg viewBox="0 0 24 24" aria-hidden {...S} {...p}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="m7.5 9.5 3 2.5-3 2.5M13 15h4" />
    </svg>
  ),
};

export const GroupIcon = ({ name, ...rest }) => {
  const Cmp = groupIcons[name] || CodeIcon;
  return <Cmp {...rest} />;
};
