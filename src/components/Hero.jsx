import './Hero.css';
import { competition } from '../data/siteContent.js';
import { useCountdown } from '../hooks/useCountdown.js';

function plural(n, one, few, many) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}

function formatCountdown({ days, hours, minutes, seconds }) {
  return (
    `${competition.countdownLabel} ${days} ${plural(days, 'день', 'дня', 'дней')} ` +
    `${hours} ${plural(hours, 'час', 'часа', 'часов')} ` +
    `${minutes} ${plural(minutes, 'минута', 'минуты', 'минут')} ` +
    `${seconds} ${plural(seconds, 'секунда', 'секунды', 'секунд')}`
  );
}

function Hero({ onApply }) {
  const countdown = useCountdown(
    new Date(competition.start).getTime(),
    new Date(competition.end).getTime(),
  );

  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>
          {competition.title}
          <br />
          <span className="hero-year">{competition.year}</span>
        </h1>
        <button type="button" className="apply hero-apply" onClick={onApply}>
          {competition.applyLabel}
        </button>
      </div>

      <div className="deadline">
        <div className="deadline-inner">
          <h2>
            {competition.deadlineTitle[0]}
            <br />
            {competition.deadlineTitle[1]}
          </h2>
          <p>
            {competition.periodLabel[0]}
            <br />
            {competition.periodLabel[1]}
          </p>
          <span id="countdown">{formatCountdown(countdown)}</span>
          <div className="deadline-progress" aria-hidden="true">
            <span className="deadline-progress-fill" />
          </div>
        </div>
      </div>

      <img className="hero-food" src="/images/hero-food.png" alt={competition.imageAlt} />
    </section>
  );
}

export default Hero;
