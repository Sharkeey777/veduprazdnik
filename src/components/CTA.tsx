import { cta, contacts } from '../content';
import Reveal from './Reveal';
import { IconMax, IconTelegram, IconVk, IconInstagram } from './icons';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-graphite py-20 sm:py-24">
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 -top-10 h-72 w-72 rounded-full bg-wine/20 blur-3xl"
        aria-hidden
      />

      <div className="container-luxe relative">
        <div className="glass-card overflow-hidden border-white/10 bg-white/[0.05] p-8 sm:p-12 lg:p-16">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <Reveal>
                <h2 className="heading text-4xl text-milk sm:text-5xl">{cta.title}</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-lg leading-relaxed text-milk/70">{cta.text}</p>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="w-full lg:w-auto">
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col">
                <a href={contacts.telegramHref} target="_blank" rel="noopener noreferrer" className="btn-gold">
                  <IconTelegram width={18} height={18} /> Написать в Telegram
                </a>
                <a href={contacts.maxHref} target="_blank" rel="noopener noreferrer" className="btn-ghost-light">
                  <IconMax width={18} height={18} /> Написать в MAX
                </a>
                <a href={contacts.vkPageHref} target="_blank" rel="noopener noreferrer" className="btn-ghost-light">
                  <IconVk width={18} height={18} /> ВКонтакте
                </a>
                <a href={contacts.instagramHref} target="_blank" rel="noopener noreferrer" className="btn-ghost-light">
                  <IconInstagram width={18} height={18} /> Instagram
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
