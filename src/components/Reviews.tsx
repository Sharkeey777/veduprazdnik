import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { reviews } from '../content';
import Reveal from './Reveal';
import { IconClose } from './icons';

export default function Reviews() {
  const [zoom, setZoom] = useState<string | null>(null);
  // Дублируем список, чтобы лента прокручивалась бесшовно
  const track = [...reviews, ...reviews];

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setZoom(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoom]);

  return (
    <section id="reviews" className="relative overflow-hidden bg-milk py-24 sm:py-32">
      <div className="container-luxe">
        <div className="mb-12 max-w-xl">
          <Reveal>
            <span className="eyebrow">Отзывы</span>
            <h2 className="heading mt-5 text-4xl sm:text-5xl">Что говорят клиенты</h2>
            <p className="mt-5 text-graphite/70">
              Живые отклики гостей и молодожёнов. Нажмите на скриншот, чтобы прочитать целиком.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Бегущая лента отзывов — плавно едет, останавливается при наведении */}
      <div className="marquee-mask relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-milk to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-milk to-transparent sm:w-28" />

        <div className="flex w-max animate-marquee gap-5 px-2.5">
          {track.map((r, i) => (
            <button
              key={`${r.src}-${i}`}
              type="button"
              onClick={() => setZoom(r.src)}
              aria-label={`Открыть ${r.alt}`}
              className="group block shrink-0 overflow-hidden rounded-2xl border border-graphite/10 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
            >
              <img
                src={r.src}
                alt={r.alt}
                loading="lazy"
                className="h-[340px] w-auto transition-transform duration-700 group-hover:scale-[1.02] sm:h-[400px]"
              />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {zoom && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-sm sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoom(null)}
          >
            <button
              type="button"
              aria-label="Закрыть"
              onClick={() => setZoom(null)}
              className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition hover:border-gold hover:text-gold sm:right-8 sm:top-8"
            >
              <IconClose />
            </button>
            <motion.img
              src={zoom}
              alt="Отзыв клиента"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] max-w-full rounded-lg object-contain shadow-card"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
