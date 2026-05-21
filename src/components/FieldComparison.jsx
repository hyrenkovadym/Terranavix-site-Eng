function FieldComparison({ sectionId, field }) {
  return (
    <section id={sectionId} className="section-field" aria-labelledby={`${sectionId}-title`}>
      <div className="section-inner">
        <h2 id={`${sectionId}-title`}>{field.title}</h2>
        <p>{field.text}</p>

        <div className="field-grid">
          <article className="field-card">
            <p className="field-label">{field.withoutLabel}</p>
            <p className="field-text">{field.withoutText}</p>
            <p className="field-subtitle">{field.withoutSubtitle}</p>
            <ul className="field-list">
              {field.withoutList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="field-card">
            <p className="field-label">{field.withLabel}</p>
            <p className="field-text">{field.withText}</p>
            <p className="field-subtitle">{field.withSubtitle}</p>
            <ul className="field-list">
              {field.withList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default FieldComparison;
