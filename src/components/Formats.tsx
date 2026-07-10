import type { ComponentType, SVGProps } from 'react';
import { formats } from '../content';
import Reveal from './Reveal';
import {
  IconRings,
  IconArch,
  IconCake,
  IconGlass,
  IconCap,
  IconHeartHome,
  IconSparkle,
  IconMic,
  IconArrowUpRight,
} from './icons';

const icons: ComponentType<SVGProps<SVGSVGElement>>[] = [
  IconRings,
  IconArch,
  IconCake,
  IconGlass,
  IconCap,
  IconHeartHome,
  IconSparkle,
  IconMic,
];

export default function Formats() {
  return (
    <section id="formats" className="relative overflow-hidden bg-graphite py-24 text-milk sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />

      <div className="container-luxe relative">
        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow text-champagne before:bg-gold">Форматы</span>
              <h2 className="heading mt-5 text-4xl text-milk sm:text-5xl">Какие события я веду</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-milk/70">
                От камерных семейных вечеров до больших торжеств — под каждый формат собирается своя
                программа и свой ритм. Восемь направлений, в которых я чувствую себя как дома.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <dl className="flex gap-8 border-l border-gold/30 pl-6">
              {[
                { v: '8', l: 'форматов' },
                { v: '10 лет', l: 'на сцене' },
                { v: '100+', l: 'событий' },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-3xl text-gold sm:text-4xl">{s.v}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-luxe text-milk/50">{s.l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {formats.map((f, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal as="article" key={f.title} delay={0.05 * (i % 4)}>
                <a
                  href="#contacts"
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.07]"
                >
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/25"
                    aria-hidden
                  />
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-graphite">
                    <Icon width={22} height={22} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl text-milk">{f.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-milk/65">{f.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gold/60 transition-colors duration-500 group-hover:text-gold">
                    Обсудить формат
                    <IconArrowUpRight
                      width={16}
                      height={16}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
