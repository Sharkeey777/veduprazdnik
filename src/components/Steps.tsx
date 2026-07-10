import { motion } from 'framer-motion';
import { steps, contacts } from '../content';
import Reveal from './Reveal';
import { IconArrowUpRight } from './icons';

export default function Steps() {
  return (
    <section id="steps" className="relative overflow-hidden bg-milk py-24 sm:py-32">
      <div
        className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-gold/[0.07] blur-3xl"
        aria-hidden
      />
      <div className="container-luxe relative">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <span className="eyebrow">Подготовка</span>
            <h2 className="heading mt-5 text-4xl sm:text-5xl">Как мы придём к вашему празднику</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-graphite/75">
              Понятный путь от первого сообщения до вечера, за который можно быть спокойным — без
              лишней суеты и с вниманием к деталям на каждом шаге.
            </p>
          </Reveal>
        </div>

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Соединительная линия, «прочерчивается» при попадании в зону видимости */}
          <div
            className="absolute left-0 right-0 top-9 hidden h-px bg-graphite/10 lg:block"
            aria-hidden
          />
          <motion.div
            className="absolute left-0 top-9 hidden h-px origin-left bg-gradient-to-r from-gold/50 via-gold to-gold/50 lg:block"
            style={{ right: 0 }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            aria-hidden
          />

          {steps.map((step, i) => (
            <motion.article
              key={step.n}
              className="group relative flex h-full flex-col rounded-2xl border border-graphite/10 bg-white/60 p-6 shadow-soft backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="relative z-10 grid h-[72px] w-[72px] place-items-center rounded-full border border-gold/40 bg-milk font-display text-2xl text-gold-deep shadow-soft transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-white">
                {step.n}
              </span>
              <h3 className="mt-6 font-display text-2xl text-ink">{step.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite/70">{step.text}</p>
              <span className="mt-5 text-[11px] font-semibold uppercase tracking-luxe text-gold-deep/70">
                Шаг {step.n}
              </span>
            </motion.article>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-gold/25 bg-gradient-to-br from-champagne/50 to-cream/40 px-7 py-6 sm:flex-row sm:items-center">
            <p className="max-w-xl text-graphite/80">
              На подготовку обычно уходит от пары недель до нескольких месяцев — чем раньше
              познакомимся, тем спокойнее пройдёт путь к вашему празднику.
            </p>
            <a
              href={contacts.telegramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold shrink-0"
            >
              Обсудить дату
              <IconArrowUpRight width={17} height={17} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
