import { useState } from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import { GiSoccerBall } from 'react-icons/gi';
import { Link, NavLink } from 'react-router-dom';
import { navigation } from '../data/siteData';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" onClick={closeMenu} aria-label="Northstar Athletic Club home">
          <span className="brand-mark"><GiSoccerBall aria-hidden="true" /><span>+</span></span>
          <span className="brand-name">NORTHSTAR <small>ATHLETIC CLUB</small></span>
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link className="button button--lime nav-join" to="/membership" onClick={closeMenu}>
            Join the club <FiArrowUpRight />
          </Link>
        </nav>
      </div>
    </header>
  );
}
