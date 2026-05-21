function ProductOverview({ sectionId, title, text, kitItems, activeKitIndex, onSelectKit }) {
  const activeItem = kitItems[activeKitIndex];

  return (
    <section id={sectionId} className="section-kit" aria-labelledby={`${sectionId}-title`}>
      <div className="section-inner">
        <h2 id={`${sectionId}-title`}>{title}</h2>
        <p>{text}</p>

        <div className="kit-layout">
          <div className="kit-image-placeholder">
            <img src={activeItem.image} alt={activeItem.title} className="kit-main-img" />
          </div>

          <div className="kit-list" role="list" aria-label="TerraNavix kit components">
            {kitItems.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={`kit-item ${index === activeKitIndex ? 'kit-item-active' : ''}`}
                onClick={() => onSelectKit(index)}
                aria-pressed={index === activeKitIndex}
              >
                <span className="kit-badge" aria-hidden="true">
                  {item.id}
                </span>
                <span>
                  <span className="kit-title">{item.title}</span>
                  <span className="kit-text">{item.text}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductOverview;
