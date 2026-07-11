import { mediaAsset, studio } from '../content';

export default function StudioCredit() {
  const logo = (
    <img
      src={mediaAsset('brand/studio-dalee.png')}
      alt={`Логотип студии ${studio.name}`}
      className="h-14 w-auto mix-blend-screen transition-transform duration-300 group-hover:scale-[1.03] sm:h-16"
    />
  );

  return (
    <div className="border-t border-white/5 bg-[#0c0a09]">
      <div className="container-luxe flex flex-col items-center justify-center gap-3 py-7 sm:flex-row sm:gap-5">
        <span className="text-[11px] uppercase tracking-luxe text-milk/35">{studio.made}</span>
        {studio.href ? (
          <a
            href={studio.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${studio.made} ${studio.name}`}
            className="group rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            {logo}
          </a>
        ) : (
          logo
        )}
      </div>
    </div>
  );
}
