import { mediaAsset, trust } from '../content';
import Reveal from './Reveal';

export default function Trust() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Фон */}
      <div className="absolute inset-0 -z-10">
        <img
          src={mediaAsset('photos/g07.jpg')}
          alt=""
          aria-hidden
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/85" />
        <div className="absolute inset-0 bg-grain opacity-40" />
      </div>

      <div className="container-luxe">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <span className="eyebrow text-champagne before:bg-gold">Доверие</span>
            <h2 className="heading mt-5 text-4xl text-milk sm:text-5xl">Почему со мной спокойно</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-milk/70">
              Организация праздника — это про доверие. Вот что делает вечер предсказуемо хорошим.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {trust.map((item, i) => (
            <Reveal key={item.title} delay={0.05 * (i % 3)}>
              <div className="group flex h-full flex-col bg-graphite/60 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-graphite/40">
                <span className="font-display text-5xl text-gold/40 transition-colors duration-500 group-hover:text-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-display text-2xl text-milk">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-milk/65">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
