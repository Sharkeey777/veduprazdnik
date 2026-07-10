import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { reviews } from '../content';
import Reveal from './Reveal';
import { IconArrowLeft, IconArrowRight, IconClose } from './icons';

export default function Reviews() {
  const [zoom, setZoom] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollReviews = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * Math.min(track.clientWidth * 0.82, 360), behavior: 'smooth' });
  };

  useEffect(() => {
    if (!zoom) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setZoom(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoom]);

  return (
    <section id="reviews" className="relative overflow-hidden bg-milk py-24 sm:py-32">
      <div className="container-luxe">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <div className="max-w-xl">
              <span className="eyebrow">Отзывы</span>
              <h2 className="heading mt-5 text-4xl sm:text-5xl">Что говорят клиенты</h2>
              <p className="mt-5 text-graphite/70">
                Живые отклики гостей и молодожёнов. Листайте стрелками или свайпом, нажмите на
                скриншот, чтобы прочитать целиком.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => scrollReviews(-1)}
                aria-label="Предыдущие отзывы"
                className="grid h-12 w-12 place-items-center rounded-full border border-graphite/15 bg-white text-ink shadow-soft transition hover:-translate-y-0.5 hover:border-gold hover:text-gold-deep"
              >
                <IconArrowLeft width={20} height={20} />
              </button>
              <button
                type="button"
                onClick={() => scrollReviews(1)}
                aria-label="Следующие отзывы"
                className="grid h-12 w-12 place-items-center rounded-full border border-graphite/15 bg-white text-ink shadow-soft transition hover:-translate-y-0.5 hover:border-gold hover:text-gold-deep"
              >
                <IconArrowRight width={20} height={20} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-milk to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-milk to-transparent sm:w-20" />

        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-3 sm:px-8 lg:px-12"
        >
          {reviews.map((review) => (
            <button
              key={review.src}
              type="button"
              onClick={() => setZoom(review.src)}
              aria-label={`Открыть ${review.alt}`}
              className="group block shrink-0 snap-start overflow-hidden rounded-2xl border border-graphite/10 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
            >
              <img
                src={review.src}
                alt={review.alt}
                loading="lazy"
                className="h-[340px] max-w-[78vw] object-contain transition-transform duration-700 group-hover:scale-[1.02] sm:h-[400px] sm:max-w-[320px]"
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
              onClick={(event) => event.stopPropagation()}
              className="max-h-[88vh] max-w-full rounded-lg object-contain shadow-card"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
