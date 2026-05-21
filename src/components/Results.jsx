function Results({ sectionId, title, text, cards }) {
  return (
    <section id={sectionId} className="section-results" aria-labelledby={`${sectionId}-title`}>
      <div className="section-inner">
        <h2 id={`${sectionId}-title`}>{title}</h2>
        <p>{text}</p>

        <div className="results-grid">
          {cards.map((card) => (
            <article className="results-card" key={card.label}>
              <p className="results-label">{card.label}</p>
              <h3 className="results-value">{card.value}</h3>
              <p className="results-text">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Results;
