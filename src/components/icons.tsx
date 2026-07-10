import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  ...p,
});

export const IconRings = (p: P) => (
  <svg {...base(p)}>
    <circle cx="9" cy="15" r="5" />
    <circle cx="15" cy="15" r="5" />
    <path d="M9 4l2 3M15 4l-2 3M12 4h-1.5M12 4h1.5" />
  </svg>
);

export const IconArch = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 21V11a7 7 0 0 1 14 0v10" />
    <path d="M3 21h18M8 21v-6M16 21v-6" />
  </svg>
);

export const IconCake = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 21h16M5 21v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7" />
    <path d="M4 15c1.2 1 2.3 1 3.5 0s2.3-1 3.5 0 2.3 1 3.5 0 2.3-1 3.5 0" />
    <path d="M12 8V5M12 5c0-1 1-1.5 0-3-1 1.5 0 2 0 3Z" />
  </svg>
);

export const IconGlass = (p: P) => (
  <svg {...base(p)}>
    <path d="M8 3h8l-1 6a3 3 0 0 1-6 0L8 3Z" />
    <path d="M12 15v5M8 21h8" />
  </svg>
);

export const IconCap = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 4 2 9l10 5 10-5-10-5Z" />
    <path d="M6 11v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5M22 9v5" />
  </svg>
);

export const IconHeartHome = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 11 12 4l9 7" />
    <path d="M5 10v10h14V10" />
    <path d="M12 18c-1.6-1.2-3-2.4-3-3.8A1.7 1.7 0 0 1 12 13a1.7 1.7 0 0 1 3 1.2c0 1.4-1.4 2.6-3 3.8Z" />
  </svg>
);

export const IconSparkle = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3c.6 3.8 1.7 5 5.5 5.5C13.7 9 12.6 10.2 12 14c-.6-3.8-1.7-5-5.5-5.5C10.3 8 11.4 6.8 12 3Z" />
    <path d="M18 14c.3 1.6.8 2.2 2.5 2.5-1.7.3-2.2.9-2.5 2.5-.3-1.6-.8-2.2-2.5-2.5 1.7-.3 2.2-.9 2.5-2.5Z" />
  </svg>
);

export const IconMic = (p: P) => (
  <svg {...base(p)}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M6 11a6 6 0 0 0 12 0M12 17v4M8 21h8" />
  </svg>
);

export const IconArrowUpRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const IconArrowLeft = (p: P) => (
  <svg {...base(p)}>
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
);

export const IconArrowRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconPlay = (p: P) => (
  <svg {...base({ ...p, fill: 'currentColor', stroke: 'none' })}>
    <path d="M8 5.2c0-.9 1-1.5 1.8-1L18 9c.8.5.8 1.6 0 2l-8.2 4.8c-.8.5-1.8-.1-1.8-1V5.2Z" />
  </svg>
);

export const IconPhone = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 5c0-1 .8-2 2-2h2l1.5 4-2 1.5a12 12 0 0 0 6 6L15 12l4 1.5V16c0 1.1-.9 2-2 2A14 14 0 0 1 4 5Z" />
  </svg>
);

export const IconTelegram = (p: P) => (
  <svg {...base({ ...p, fill: 'currentColor', stroke: 'none' })}>
    <path d="M21.9 4.3 3.7 11.3c-1 .4-1 1.8.1 2.1l4.5 1.4 1.7 5.2c.2.7 1.1.9 1.6.3l2.5-2.6 4.6 3.4c.6.5 1.6.1 1.8-.7L23 5.6c.2-1-.7-1.7-1.1-1.3ZM9.8 14.4l8.3-5.1c.2-.1.4.2.2.3l-6.8 6.2c-.2.2-.4.5-.4.8l-.2 2.2-1.1-4.4Z" />
  </svg>
);

export const IconMax = (p: P) => (
  <svg {...base({ ...p, viewBox: '0 0 720 720', fill: 'currentColor', stroke: 'none' })}>
    <path d="M350.4 9.6C141.8 20.5 4.1 184.1 12.8 390.4c3.8 90.3 40.1 168 48.7 253.7 2.2 22.2-4.2 49.6 21.4 59.3 31.5 11.9 79.8-8.1 106.2-26.4 9-6.1 17.6-13.2 24.2-22 27.3 18.1 53.2 35.6 85.7 43.4 143.1 34.3 299.9-44.2 369.6-170.3C799.6 291.2 622.5-4.6 350.4 9.6Zm-81 494.4c-11.3 8.8-22.2 20.8-34.7 27.7-18.1 9.7-23.7-.4-30.5-16.4-21.4-50.9-24-137.6-11.5-190.9 16.8-72.5 72.9-136.3 150-143.1 78-6.9 150.4 32.7 183.1 104.2C598.2 444.6 412.9 601.7 269.4 504Z" />
  </svg>
);

export const IconVk = (p: P) => (
  <svg {...base({ ...p, fill: 'currentColor', stroke: 'none' })}>
    <path d="M12.7 16.5c-5.2 0-8.6-3.7-8.7-9.8h2.7c.1 4.5 2.1 6.3 3.6 6.7V6.7h2.5v3.8c1.5-.2 3-1.8 3.6-3.8h2.5c-.4 2.4-2 4-3.1 4.7 1.1.6 2.9 2 3.6 4.4h-2.8c-.5-1.7-1.9-3-3.3-3.2v3.2h-.9Z" />
  </svg>
);

export const IconInstagram = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const IconWhatsapp = (p: P) => (
  <svg {...base({ ...p, fill: 'currentColor', stroke: 'none' })}>
    <path d="M12 2a10 10 0 0 0-8.7 15l-1.2 4.3 4.4-1.1A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.6.7.7-2.5-.2-.3A8 8 0 1 1 12 20Zm4.4-5.7c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.1-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.3 0-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3c-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 1.7.7 2.4.8 3.2.7.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1 0-.1-.2-.2-.4-.3Z" />
  </svg>
);

export const IconMenu = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconClose = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 12.5 9 17.5 20 6.5" />
  </svg>
);
