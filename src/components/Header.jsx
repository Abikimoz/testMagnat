import { useState } from 'react';
import './Header.css';
import { headerContent, navLinks } from '../data/siteContent.js';

function Header({ onApply }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="brand-mark">
        <img src="/images/brand-mark.svg" alt="" />
        <span>
          {headerContent.brandLines[0]}
          <br />
          {headerContent.brandLines[1]}{' '}
          <span className="no-break">{headerContent.brandLocation}</span>
        </span>
      </div>

      <div className="support">
        <strong>
          {headerContent.supportTitle[0]}
          <br />
          {headerContent.supportTitle[1]}
        </strong>
        {headerContent.organizations.map((organization) => (
          <div key={organization.image} className={`support-logo ${organization.className ?? ''}`}>
            <img src={organization.image} alt={organization.imageAlt} />
            <span>
              {organization.lines.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < organization.lines.length - 1 && <br />}
                </span>
              ))}
            </span>
          </div>
        ))}
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
        {headerContent.applyLabel}
      </button>

      <button
        type="button"
        className="menu-button"
        aria-label={headerContent.menuLabel}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        ☰
      </button>
    </header>
  );
}

export default Header;
