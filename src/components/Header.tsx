import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { nav, site } from '../content';
import { IconMenu, IconClose } from './icons';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-milk/85 py-3 shadow-[0_10px_40px_-24px_rgba(21,18,16,0.5)] backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-luxe flex items-center justify-between">
        <a href="#top" className="group flex flex-col leading-none">
          <span className="font-display text-2xl font-semibold text-ink transition-colors group-hover:text-gold-deep sm:text-[26px]">
            {site.name}
          </span>
          <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-luxe text-gold-deep/80 sm:text-[10px]">
            {site.role}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-graphite/80 transition-colors hover:text-ink"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a href="#contacts" className="btn-gold hidden text-xs lg:inline-flex">
          Узнать свободную дату
        </a>

        <button
          type="button"
          aria-label="Открыть меню"
          onClick={() => setOpen(true)}
          className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition hover:border-gold hover:text-gold-deep lg:hidden"
        >
          <IconMenu />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-milk px-7 py-7 shadow-card"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.45 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-semibold text-ink">{site.name}</span>
                <button
                  type="button"
                  aria-label="Закрыть меню"
                  onClick={() => setOpen(false)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition hover:border-gold hover:text-gold-deep"
                >
                  <IconClose />
                </button>
              </div>

              <nav className="mt-10 flex flex-col gap-1">
                {nav.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    className="border-b border-ink/5 py-4 font-display text-2xl text-graphite transition-colors hover:text-gold-deep"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <a href="#contacts" onClick={() => setOpen(false)} className="btn-gold mt-auto w-full">
                Узнать свободную дату
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
