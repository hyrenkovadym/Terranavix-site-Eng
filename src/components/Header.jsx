const NAV_ITEMS = [
  { id: 'section-product', key: 'product' },
  { id: 'section-tech', key: 'technology' },
  { id: 'section-results', key: 'roi' },
];

function Header({ logoSrc, logoAlt, nav, isNavOpen, onToggleNav, onNavigate }) {
  const handleNavigate = (event, sectionId) => {
    event.preventDefault();
    onNavigate(sectionId);
  };

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#section-top" className="logo-wrap" onClick={(event) => handleNavigate(event, 'section-top')}>
          <img src={logoSrc} alt={logoAlt} className="logo-img" />
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isNavOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation"
          onClick={onToggleNav}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className={`nav ${isNavOpen ? 'nav-open' : ''}`} aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link"
              onClick={(event) => handleNavigate(event, item.id)}
            >
              {nav[item.key]}
            </a>
          ))}

          <a
            href="#section-contact"
            className="nav-link nav-cta"
            onClick={(event) => handleNavigate(event, 'section-contact')}
          >
            {nav.quote}
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
