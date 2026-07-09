import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { gallery } from '../content';
import Reveal from './Reveal';
import { IconClose } from './icons';

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const isOpen = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)),
    []
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % gallery.length)),
    []
  );

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, close, prev, next]);

  return (
    <section id="gallery" className="relative bg-cream py-24 sm:py-32">
      <div className="container-luxe">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <span className="eyebrow">Галерея</span>
            <h2 className="heading mt-5 max-w-xl text-4xl sm:text-5xl">
              Живые моменты с праздников
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-graphite/70">
              Эмоции гостей, атмосфера событий и детали, из которых складывается настроение вечера.
            </p>
          </Reveal>
        </div>

        <div className="columns-2 gap-4 [column-fill:_balance] sm:columns-3 lg:columns-4">
          {gallery.map((photo, i) => (
            <Reveal key={photo.src} delay={0.03 * (i % 4)} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block w-full overflow-hidden rounded-xl"
                aria-label={`Открыть фото: ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
                <span className="absolute inset-0 ring-1 ring-inset ring-white/0 transition group-hover:ring-white/30" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-sm sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              type="button"
              aria-label="Закрыть"
              onClick={close}
              className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition hover:border-gold hover:text-gold sm:right-8 sm:top-8"
            >
              <IconClose />
            </button>

            <button
              type="button"
              aria-label="Предыдущее фото"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 text-white transition hover:border-gold hover:text-gold sm:left-8"
            >
              <span className="text-2xl">‹</span>
            </button>
            <button
              type="button"
              aria-label="Следующее фото"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 text-white transition hover:border-gold hover:text-gold sm:right-8"
            >
              <span className="text-2xl">›</span>
            </button>

            <motion.img
              key={gallery[index].src}
              src={gallery[index].src}
              alt={gallery[index].alt}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-card"
            />
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-white/60">
              {index + 1} / {gallery.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
