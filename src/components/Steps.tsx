import { steps } from '../content';
import Reveal from './Reveal';

export default function Steps() {
  return (
    <section id="steps" className="relative overflow-hidden bg-milk py-24 sm:py-32">
      <div className="container-luxe">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <span className="eyebrow">Подготовка</span>
            <h2 className="heading mt-5 text-4xl sm:text-5xl">Как мы придём к вашему празднику</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-graphite/75">
              Понятный путь от первого сообщения до вечера, за который можно быть спокойным.
            </p>
          </Reveal>
        </div>

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* соединительная линия на десктопе */}
          <div
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent lg:block"
            aria-hidden
          />
          {steps.map((step, i) => (
            <Reveal as="article" key={step.n} delay={0.1 * i} className="relative">
              <div className="relative flex h-full flex-col">
                <span className="relative z-10 grid h-[72px] w-[72px] place-items-center rounded-full border border-gold/40 bg-milk font-display text-2xl text-gold-deep shadow-soft">
                  {step.n}
                </span>
                <h3 className="mt-6 font-display text-2xl text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite/70">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
