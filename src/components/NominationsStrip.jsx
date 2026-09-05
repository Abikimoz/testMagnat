import './NominationsStrip.css';
import { nominations } from '../data/siteContent.js';

function NominationsStrip() {
  return (
    <section id="nominations" className="scroll-nominations" aria-label="Номинации">
      {nominations.map((name) => (
        <div key={name}>{name}</div>
      ))}
    </section>
  );
}

export default NominationsStrip;
