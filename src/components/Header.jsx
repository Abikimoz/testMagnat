import { useState } from 'react';
import './Header.css';

const NAV_LINKS = [
  { href: '#about', label: 'О конкурсе' },
  { href: '#nominations', label: 'Номинации' },
  { href: '#steps', label: 'Условия участия' },
  { href: '#contacts', label: 'Контакты' },
];

function Header({ onApply }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="brand-mark">
        <img src="/images/brand-mark.svg" alt="" />
        <span>
          Конкурс лучших брендов
          <br />
          гастроиндустрии <span className="no-break">Санкт-Петербурга</span>
        </span>
      </div>

      <div className="support">
        <strong>
          ПРИ
          <br />
          ПОДДЕРЖКЕ
        </strong>
        <div className="support-logo foundation-logo">
          <img
            src="/images/foundation.svg"
            alt="Фонд развития субъектов малого и среднего предпринимательства в Санкт-Петербурге"
          />
          <span>
            Фонд развития субъектов малого
            <br />
            и среднего предпринимательства
            <br />
            в Санкт-Петербурге
          </span>
        </div>
        <div className="support-logo">
          <img src="/images/committee.svg" alt="" />
          <span>
            Комитет по промышленной
            <br />
            политике, инновациям и торговле
            <br />
            Санкт-Петербурга
          </span>
        </div>
      </div>

      <nav className={`nav${menuOpen ? ' is-open' : ''}`} aria-label="Навигация">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <button type="button" className="apply top-apply" onClick={onApply}>
        Подать заявку
      </button>

      <button
        type="button"
        className="menu-button"
        aria-label="Открыть меню"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        ☰
      </button>
    </header>
  );
}

export default Header;
