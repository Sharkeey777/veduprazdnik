import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IconClose } from './icons';

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export default function LegalModal({ open, onClose, title, children }: Props) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[85vh] w-full max-w-2xl flex-col rounded-3xl bg-milk shadow-card"
          >
            <div className="flex items-center justify-between border-b border-graphite/10 px-6 py-5 sm:px-8">
              <h3 className="font-display text-2xl text-ink sm:text-3xl">{title}</h3>
              <button
                type="button"
                aria-label="Закрыть"
                onClick={onClose}
                className="grid h-10 w-10 place-items-center rounded-full border border-graphite/15 text-graphite transition hover:border-gold hover:text-gold-deep"
              >
                <IconClose width={20} height={20} />
              </button>
            </div>
            <div className="prose-legal overflow-y-auto px-6 py-6 text-sm leading-relaxed text-graphite/80 sm:px-8">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
