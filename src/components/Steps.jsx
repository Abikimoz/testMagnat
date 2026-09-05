import './Steps.css';
import { steps } from '../data/siteContent.js';

function Steps() {
  return (
    <section id="steps" className="content-section steps">
      <h2 className="side-title">ЭТАПЫ</h2>
      <div className="steps-list">
        {steps.map((step) => (
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
