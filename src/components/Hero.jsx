import { useEffect, useState } from 'react';
import './Hero.css';
import { competition } from '../data/siteContent.js';

function plural(n, one, few, many) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}

function useCountdown(target, end) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  // Отсчёт «после начала»: сколько времени прошло с даты старта.
  const diff = Math.max(0, now - target);
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);

  // Процент прошедшего периода конкурса (от старта до окончания).
  const period = end - target;
  const percent = Math.min(100, Math.max(0, (diff / period) * 100));

  return { days, hours, minutes, seconds, percent };
}

function formatCountdown({ days, hours, minutes, seconds }) {
  return (
    `После начала ${days} ${plural(days, 'день', 'дня', 'дней')} ` +
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
          Подать заявку
        </button>
      </div>

      <div className="deadline">
        <div className="deadline-inner">
          <h2>
            Сроки проведения
            <br />
            конкурса
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

      <img className="hero-food" src="/images/hero-food.png" alt="Гастрономическая композиция" />
    </section>
  );
}

export default Hero;
