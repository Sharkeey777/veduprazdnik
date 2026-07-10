import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { galleryCategories, type GalleryMedia } from '../content';
import Reveal from './Reveal';
import { IconClose, IconPlay } from './icons';

function Tile({ media, onOpen }: { media: GalleryMedia; onOpen: () => void }) {
  const poster = media.type === 'video' ? media.poster : media.src;
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block w-full overflow-hidden rounded-xl bg-ink/5"
      aria-label={media.type === 'video' ? `Смотреть видео: ${media.alt}` : `Открыть фото: ${media.alt}`}
    >
      <img
        src={poster}
        alt={media.alt}
        loading="lazy"
        className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />
      <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
      <span className="absolute inset-0 ring-1 ring-inset ring-white/0 transition group-hover:ring-white/30" />
      {media.type === 'video' && (
        <>
          <span className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
          <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-white">
            <IconPlay width={22} height={22} className="translate-x-0.5" />
          </span>
          <span className="absolute bottom-3 left-3 rounded-full bg-ink/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-milk/90 backdrop-blur-sm">
            Видео
          </span>
        </>
      )}
    </button>
  );
}

export default function Gallery() {
  const [tab, setTab] = useState(0);
  const [index, setIndex] = useState<number | null>(null);

  const items = useMemo(() => galleryCategories[tab].items, [tab]);
  const isOpen = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length]
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

  const active = index !== null ? items[index] : null;

  return (
    <section id="gallery" className="relative bg-cream py-24 sm:py-32">
      <div className="container-luxe">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <span className="eyebrow">Галерея</span>
            <h2 className="heading mt-5 max-w-xl text-4xl sm:text-5xl">
              Живые моменты с праздников
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-graphite/70">
              Свадьбы, дни рождения и Новый год — фото и видео с реальных событий. Выберите формат и
              посмотрите, как проходят праздники с Юлией.
            </p>
          </Reveal>
        </div>

        {/* Вкладки категорий */}
        <Reveal delay={0.05}>
          <div className="mb-10 flex flex-wrap gap-2.5">
            {galleryCategories.map((cat, i) => {
              const activeTab = i === tab;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setTab(i);
                    setIndex(null);
                  }}
                  className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    activeTab
                      ? 'bg-ink text-milk shadow-soft'
                      : 'border border-graphite/15 bg-white/50 text-graphite/70 hover:border-gold/50 hover:text-gold-deep'
                  }`}
                >
                  {cat.label}
                  <span className={`ml-2 text-xs ${activeTab ? 'text-gold/90' : 'text-graphite/40'}`}>
                    {cat.items.length}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-8 max-w-xl text-sm text-graphite/60">{galleryCategories[tab].caption}</p>
            <div className="columns-2 gap-4 [column-fill:_balance] sm:columns-3 lg:columns-4">
              {items.map((media, i) => (
                <motion.div
                  key={media.src}
                  className="mb-4 break-inside-avoid"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.035, 0.4), ease: [0.22, 1, 0.36, 1] }}
                >
                  <Tile media={media} onOpen={() => setIndex(i)} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && active && (
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
              aria-label="Предыдущее"
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
              aria-label="Следующее"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 text-white transition hover:border-gold hover:text-gold sm:right-8"
            >
              <span className="text-2xl">›</span>
            </button>

            {active.type === 'photo' ? (
              <motion.img
                key={active.src}
                src={active.src}
                alt={active.alt}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-card"
              />
            ) : (
              <motion.video
                key={active.src}
                src={active.src}
                poster={active.poster}
                controls
                autoPlay
                playsInline
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-card"
              />
            )}
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-white/60">
              {index + 1} / {items.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
