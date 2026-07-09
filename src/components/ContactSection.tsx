import { contacts, site } from '../content';
import Reveal from './Reveal';
import { IconTelegram, IconVk, IconInstagram } from './icons';

/**
 * Прямой контакт без формы: люди пишут Юлии напрямую в Telegram.
 * (По решению заказчика форма заявки убрана — общение только в мессенджерах / соцсетях.)
 */
export default function ContactSection() {
  const hasCity = Boolean(site.city) && !site.city.startsWith('TODO');

  const socials = [
    { icon: IconTelegram, label: 'Telegram', value: contacts.telegram, href: contacts.telegramHref },
    { icon: IconVk, label: 'ВКонтакте', value: 'vk.com/y.sobenina', href: contacts.vkPageHref },
    { icon: IconInstagram, label: 'Instagram', value: '@sobenina_event', href: contacts.instagramHref },
  ];

  return (
    <section id="contacts" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-wine/10 blur-3xl"
        aria-hidden
      />

      <div id="request" className="container-luxe relative scroll-mt-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">Контакты</span>
            <h2 className="heading mt-5 text-4xl sm:text-5xl">Свяжитесь напрямую</h2>
            <p className="mt-6 text-lg leading-relaxed text-graphite/75">
              Самый быстрый способ — написать Юлии в Telegram. Расскажите про дату, формат и город
              события — она ответит лично и подскажет, свободна ли дата.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-9 flex flex-col items-center">
              <a
                href={contacts.telegramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-9 py-4 text-base"
              >
                <IconTelegram width={20} height={20} /> Написать в Telegram
              </a>
              <span className="mt-3 text-sm text-graphite/50">{contacts.telegram}</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-14 grid max-w-3xl gap-3 sm:grid-cols-3">
            {socials.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-graphite/10 bg-white/70 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-soft"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/12 text-gold-deep transition-colors group-hover:bg-gold group-hover:text-white">
                  <c.icon width={20} height={20} />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-wide text-graphite/50">{c.label}</span>
                  <span className="font-medium text-ink">{c.value}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        {hasCity && (
          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-md text-center text-sm text-graphite/60">
              География работы: <span className="font-medium text-ink">{site.city}</span>
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
