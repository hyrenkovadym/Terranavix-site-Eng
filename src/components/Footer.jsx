function Footer({ footer, nav, onNavigate }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="section-inner footer-inner">
        <div className="footer-left">
          <p>
            (c) {year} TerraNavix. {footer.rights}
          </p>
          <p>{footer.text}</p>
        </div>

        <nav className="footer-links" aria-label="Footer links">
          <a href="#section-product" onClick={(event) => onNavigate(event, 'section-product')}>
            {nav.product}
          </a>
          <a href="#section-tech" onClick={(event) => onNavigate(event, 'section-tech')}>
            {nav.technology}
          </a>
          <a href="#section-results" onClick={(event) => onNavigate(event, 'section-results')}>
            {nav.roi}
          </a>
          <a href="#section-contact" onClick={(event) => onNavigate(event, 'section-contact')}>
            {nav.quote}
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
