import { useEffect, useState } from 'react';

export function useCountdown(target, end) {
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
