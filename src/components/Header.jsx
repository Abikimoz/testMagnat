import { useState } from 'react';
import './Header.css';
import { navLinks } from '../data/siteContent.js';

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
        {navLinks.map((link) =>
          link.href ? (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ) : (
            <button key={link.label} type="button" className="nav-action">
              {link.label}
            </button>
          ),
        )}
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
