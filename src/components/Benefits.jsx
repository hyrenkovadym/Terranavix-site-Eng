function Benefits({ sectionId, title, text, cards }) {
  return (
    <section id={sectionId} className="section-light" aria-labelledby={`${sectionId}-title`}>
      <div className="section-inner">
        <h2 id={`${sectionId}-title`}>{title}</h2>
        <p>{text}</p>

        <div className="features-grid">
          {cards.map((card) => (
            <article className="feature-card" key={card.title}>
              <p className="feature-tag">{card.tag}</p>
              <h3 className="feature-title">{card.title}</h3>
              <p className="feature-text">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
