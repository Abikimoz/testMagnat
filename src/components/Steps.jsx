import './Steps.css';

const STEPS = [
  {
    type: 'Онлайн',
    date: '14 сентября 2025 – 21 октября 2025',
    lines: ['Сбор заявок'],
  },
  {
    type: 'Онлайн',
    date: '26 октября 2025 – 3 ноября 2025',
    lines: ['Открытое голосование', 'на официальном сайте', 'конкурса'],
  },
  {
    type: 'Онлайн',
    date: '26 октября 2025 – 3 ноября 2025',
    lines: ['Голосование конкурсной', 'комиссии'],
  },
  {
    type: 'Очно',
    date: '11 ноября 2025',
    lines: ['Объявление победителей'],
  },
];

function Steps() {
  return (
    <section id="steps" className="content-section steps">
      <h2 className="side-title">Этапы</h2>
      <div className="steps-list">
        {STEPS.map((step) => (
          <article key={step.lines[0]}>
            <span className={`stage-badge ${step.type === 'Очно' ? 'stage-badge--offline' : ''}`}>
              {step.type}
            </span>
            <time className="stage-date">{step.date}</time>
            <strong className="stage-name">{step.lines.join(' ')}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Steps;
