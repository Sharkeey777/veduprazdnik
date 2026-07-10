import { useRef, useState } from 'react';
import { showreel } from '../content';
import Reveal from './Reveal';
import { IconPlay } from './icons';

function VideoCard({
  src,
  poster,
  vertical = false,
  label,
}: {
  src: string;
  poster: string;
  vertical?: boolean;
  label?: string;
}) {
  const [active, setActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = () => {
    setActive(true);
    // даём React отрендерить video, затем запускаем
    requestAnimationFrame(() => videoRef.current?.play());
  };

  return (
    <div
      className={`group relative w-full overflow-hidden rounded-2xl bg-ink shadow-card ${
        vertical ? 'aspect-[9/16]' : 'aspect-video'
      }`}
    >
      {active ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
      ) : (
        <button
          type="button"
          onClick={play}
          aria-label={label ? `Смотреть: ${label}` : 'Смотреть видео'}
          className="absolute inset-0 h-full w-full"
        >
          <img
            src={poster}
            alt={label ?? 'Кадр из видео с мероприятия'}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent transition-opacity duration-500 group-hover:from-ink/50" />
          <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-white sm:h-20 sm:w-20">
            <IconPlay width={26} height={26} className="translate-x-0.5" />
          </span>
          {label && (
            <span className="absolute bottom-4 left-4 right-4 text-left text-sm font-medium text-milk/90">
              {label}
            </span>
          )}
        </button>
      )}
    </div>
  );
}

export default function Showreel() {
  return (
    <section id="showreel" className="relative overflow-hidden bg-milk py-24 sm:py-32">
      <div className="container-luxe">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <span className="eyebrow">Видео</span>
            <h2 className="heading mt-5 text-4xl sm:text-5xl">{showreel.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-graphite/75">{showreel.text}</p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
          <Reveal>
            <VideoCard
              src={showreel.main.src}
              poster={showreel.main.poster}
              label={showreel.main.label}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <VideoCard
              src={showreel.sde.src}
              poster={showreel.sde.poster}
              label={showreel.sde.label}
            />
          </Reveal>
        </div>

        <div className="mt-10">
          <Reveal>
            <h3 className="font-display text-2xl text-ink sm:text-3xl">Из закулисья и короткие ролики</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-graphite/70">
              Личные видео Юлии и вертикальные фрагменты с площадок — атмосфера и характер ведущей в
              коротком формате.
            </p>
          </Reveal>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
            {showreel.reels.map((r, i) => (
              <Reveal key={r.src} delay={0.06 * (i % 4)}>
                <VideoCard src={r.src} poster={r.poster} vertical />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
