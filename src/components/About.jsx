import './About.css';
import { aboutParagraphs } from '../data/siteContent.js';

function About() {
  return (
    <section id="about" className="content-section about">
      <h2 className="side-title">О конкурсе</h2>
      <div className="about-body">
        {aboutParagraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
        <button type="button" className="btn-details">Подробные условия участия</button>
      </div>
    </section>
  );
}

export default About;
