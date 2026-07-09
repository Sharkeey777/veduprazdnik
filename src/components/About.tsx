import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { about, aboutPhotos } from '../content';
import Reveal from './Reveal';
import { IconCheck } from './icons';

const N = aboutPhotos.length;

// Позиции карточек в «колоде» по глубине (0 = спереди)
const DECK = [
  { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, z: 50 },
  { x: 28, y: 16, rotate: 5, scale: 0.94, opacity: 1, z: 40 },
  { x: -26, y: 26, rotate: -5, scale: 0.9, opacity: 0.95, z: 30 },
  { x: 16, y: 36, rotate: 3, scale: 0.86, opacity: 0, z: 20 },
  { x: -14, y: 42, rotate: -3, scale: 0.84, opacity: 0, z: 10 },
];

export default function About() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Авто-прокрутка по кругу
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % N), 3500);
    return () => clearInterval(t);
  }, [paused]);

  const rel = (i: number) => (i - active + N) % N;
  const prev = () => setActive((a) => (a - 1 + N) % N);
  const next = () => setActive((a) => (a + 1) % N);

  return (
    <section id="about" className="relative overflow-hidden bg-milk py-24 sm:py-32">
      <div className="container-luxe grid items-center gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        {/* Карусель фото — крутится по кругу */}
        <Reveal className="relative">
          <div
            className="relative isolate mx-auto aspect-[4/5] w-full max-w-[400px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="pointer-events-none absolute -left-5 -top-5 z-[60] h-24 w-24 rounded-tl-[2rem] border-l border-t border-gold/40" aria-hidden />
            <div className="pointer-events-none absolute -bottom-5 -right-5 z-[60] h-24 w-24 rounded-br-[2rem] border-b border-r border-gold/40" aria-hidden />

            {aboutPhotos.map((p, i) => {
              const s = DECK[rel(i)];
              const isFront = rel(i) === 0;
              return (
                <motion.button
                  key={p.src}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={isFront ? p.alt : `Показать: ${p.alt}`}
                  initial={false}
                  animate={{ x: s.x, y: s.y, rotate: s.rotate, scale: s.scale, opacity: s.opacity, zIndex: s.z }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-card"
                  style={{ cursor: isFront ? 'default' : 'pointer' }}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                  {!isFront && <span className="absolute inset-0 bg-ink/25" />}
                </motion.button>
              );
            })}

          </div>

          {/* Управление каруселью — стрелки + точки */}
          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={prev}
              aria-label="Предыдущее фото"
              className="grid h-12 w-12 place-items-center rounded-full border border-ink/20 bg-white/70 text-xl text-ink shadow-soft transition hover:-translate-y-0.5 hover:border-gold hover:text-gold-deep"
            >
              ‹
            </button>

            <div className="flex items-center gap-2">
              {aboutPhotos.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Фото ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === active ? 'w-7 bg-gold' : 'w-2.5 bg-graphite/25 hover:bg-graphite/50'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Следующее фото"
              className="grid h-12 w-12 place-items-center rounded-full border border-ink/20 bg-white/70 text-xl text-ink shadow-soft transition hover:-translate-y-0.5 hover:border-gold hover:text-gold-deep"
            >
              ›
            </button>
          </div>
        </Reveal>

        {/* Текст */}
        <div>
          <Reveal>
            <span className="eyebrow">О Юлии</span>
            <h2 className="heading mt-5 text-4xl sm:text-5xl">
              Ведущая, с которой <span className="italic text-gold-deep">спокойно</span> и по-настоящему тепло
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-graphite/80">{about.text}</p>
          </Reveal>

          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {about.cards.map((card, i) => (
              <Reveal as="li" key={card} delay={0.05 * i}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-graphite/10 bg-white/60 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-soft">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-deep">
                    <IconCheck width={14} height={14} strokeWidth={2.2} />
                  </span>
                  <span className="text-sm font-medium text-graphite">{card}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
