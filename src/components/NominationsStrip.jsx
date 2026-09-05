import './NominationsStrip.css';

const NOMINATIONS = [
  'ЛУЧШИЙ КОНДИТЕРСКИЙ БРЕНД',
  'Лучшая кофейня',
  'Лучший стрит-фуд',
  'Открытие года',
  'Молодой ресторатор',
];

function NominationsStrip() {
  return (
    <section className="scroll-nominations" aria-label="Номинации">
      {NOMINATIONS.map((name) => (
        <div key={name}>{name}</div>
      ))}
    </section>
  );
}

export default NominationsStrip;