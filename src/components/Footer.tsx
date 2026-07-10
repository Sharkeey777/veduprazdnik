import { nav, contacts, site } from '../content';
import { IconMax, IconTelegram, IconVk, IconInstagram } from './icons';

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { icon: IconTelegram, href: contacts.telegramHref, label: 'Telegram' },
    { icon: IconMax, href: contacts.maxHref, label: 'MAX' },
    { icon: IconVk, href: contacts.vkPageHref, label: 'ВКонтакте' },
    { icon: IconInstagram, href: contacts.instagramHref, label: 'Instagram' },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink text-milk">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-line" aria-hidden />
      <div className="container-luxe py-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="font-display text-3xl font-semibold">{site.name}</div>
            <div className="mt-1 text-xs uppercase tracking-luxe text-gold/80">{site.role}</div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-milk/60">
              Свадьбы, юбилеи, корпоративы и камерные праздники с живой атмосферой и вниманием к каждому гостю.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-milk/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                >
                  <s.icon width={19} height={19} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-luxe text-milk/50">Разделы</h4>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:flex sm:flex-col">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-milk/70 transition-colors hover:text-gold">
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={contacts.telegramHref} target="_blank" rel="noopener noreferrer" className="text-sm text-milk/70 transition-colors hover:text-gold">
                  Написать в Telegram
                </a>
              </li>
              <li>
                <a href={contacts.maxHref} target="_blank" rel="noopener noreferrer" className="text-sm text-milk/70 transition-colors hover:text-gold">
                  Написать в MAX
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-milk/50">
            © {year} {site.name} — ведущая мероприятий. Все права защищены.
          </p>
          <p className="text-xs text-milk/40">
            Фото и видео — с реальных мероприятий.
          </p>
        </div>
      </div>
    </footer>
  );
}
