import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { hero, mediaAsset } from '../content';
import { IconPlay, IconArrowUpRight } from './icons';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Фоновое фото с параллаксом */}
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <img
          src={mediaAsset('photos/hero.jpg')}
          alt="Юлия Собенина ведёт торжество с микрофоном"
          className="h-full w-full object-cover object-[72%_18%]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />
      </motion.div>

      <motion.div style={{ opacity: fade }} className="container-luxe relative pt-28 pb-20">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow text-champagne before:bg-gold"
          >
            Ведущая мероприятий
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="heading mt-6 text-balance text-[42px] text-milk sm:text-6xl lg:text-[76px]"
          >
            Юлия Собенина —<br />
            <span className="italic text-champagne">ведущая ваших событий</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-base leading-relaxed text-milk/80 sm:text-lg"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#contacts" className="btn-gold">
              Узнать свободную дату
              <IconArrowUpRight width={18} height={18} />
            </a>
            <a href="#showreel" className="btn-ghost-light">
              <IconPlay width={16} height={16} />
              Посмотреть видео
            </a>
          </motion.div>

          {/* Trust-плашки */}
          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-wrap gap-x-6 gap-y-3"
          >
            {hero.trust.map((t) => (
              <li key={t} className="flex items-center gap-2.5 text-sm text-milk/75">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {t}
              </li>
            ))}
          </motion.ul>

          {/* Опциональные цифры опыта (пусто, если не заданы) */}
          {hero.stats.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-10">
              {hero.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-4xl text-champagne">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-milk/60">{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Индикатор скролла */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-milk/60 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-luxe">Листайте</span>
        <span className="relative h-9 w-5 rounded-full border border-milk/40">
          <span className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 animate-float rounded-full bg-gold" />
        </span>
      </motion.div>
    </section>
  );
}
