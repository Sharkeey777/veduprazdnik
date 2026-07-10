import { studio } from '../content';

/**
 * Фирменный знак студии «Далее» — двойной шеврон «вперёд»,
 * обыгрывающий смысл названия (далее / вперёд / дальше).
 */
function StudioMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      width={38}
      height={38}
      role="img"
      aria-label={`Логотип студии ${studio.name}`}
    >
      <defs>
        <linearGradient id="dalee-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E7C989" />
          <stop offset="0.5" stopColor="#C29A54" />
          <stop offset="1" stopColor="#A57C38" />
        </linearGradient>
      </defs>
      <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="11" fill="url(#dalee-gold)" />
      <rect
        x="1.25"
        y="1.25"
        width="37.5"
        height="37.5"
        rx="11"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.25"
        strokeWidth="1"
      />
      <g
        fill="none"
        stroke="#151210"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.92"
      >
        <path d="M13 12 L21 20 L13 28" />
        <path d="M21 12 L29 20 L21 28" />
      </g>
    </svg>
  );
}

export default function StudioCredit() {
  const inner = (
    <span className="group inline-flex items-center gap-3">
      <span className="grid place-items-center rounded-[12px] shadow-[0_0_0_1px_rgba(194,154,84,0.25),0_18px_40px_-24px_rgba(194,154,84,0.6)] transition-transform duration-500 group-hover:-translate-y-0.5">
        <StudioMark className="transition-transform duration-500 group-hover:scale-[1.04]" />
      </span>
      <span className="text-left leading-tight">
        <span className="block font-display text-lg font-semibold text-milk transition-colors duration-300 group-hover:text-gold">
          {studio.name}
        </span>
        <span className="block text-[10px] uppercase tracking-luxe text-milk/40">
          {studio.tagline}
        </span>
      </span>
    </span>
  );

  return (
    <div className="border-t border-white/5 bg-[#0c0a09]">
      <div className="container-luxe flex flex-col items-center justify-center gap-4 py-8 sm:flex-row sm:gap-5">
        <span className="text-[11px] uppercase tracking-luxe text-milk/35">{studio.made}</span>
        {studio.href ? (
          <a
            href={studio.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${studio.made} ${studio.name}`}
            className="outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded-xl"
          >
            {inner}
          </a>
        ) : (
          inner
        )}
      </div>
    </div>
  );
}
