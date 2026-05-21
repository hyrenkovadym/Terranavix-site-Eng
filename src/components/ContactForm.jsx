function ContactForm({
  sectionId,
  ui,
  roleKeys,
  formValues,
  isSubmitting,
  submitStatus,
  contactName,
  contactPhoneHref,
  contactPhoneDisplay,
  contactEmail,
  onContactChange,
  onContactSubmit,
}) {
  return (
    <section id={sectionId} className="section-contact" aria-labelledby={`${sectionId}-title`}>
      <div className="section-inner contact-inner">
        <div className="contact-text">
          <h2 id={`${sectionId}-title`}>{ui.contact.title}</h2>
          <p>{ui.contact.text}</p>
          <ul>
            {ui.contact.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="intl-sales-contact">
            <p className="intl-sales-label">{ui.contact.intlLabel}</p>
            <p className="intl-sales-name">{contactName}</p>
            {contactPhoneHref ? (
              <a className="intl-sales-phone" href={contactPhoneHref}>
                {contactPhoneDisplay}
              </a>
            ) : (
              <p className="intl-sales-phone">{contactPhoneDisplay}</p>
            )}
            <a className="intl-sales-email" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={onContactSubmit} noValidate>
          <div className="contact-form-grid">
            <div className="field field-half">
              <label htmlFor="name">{ui.contact.form.name}</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder={ui.contact.form.placeholderName}
                value={formValues.name}
                onChange={onContactChange}
                required
              />
            </div>

            <div className="field field-half">
              <label htmlFor="email">{ui.contact.form.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={ui.contact.form.placeholderEmail}
                value={formValues.email}
                onChange={onContactChange}
                required
              />
            </div>

            <div className="field field-half">
              <label htmlFor="country">{ui.contact.form.country}</label>
              <input
                id="country"
                name="country"
                type="text"
                autoComplete="address-level1"
                placeholder={ui.contact.form.placeholderCountry}
                value={formValues.country}
                onChange={onContactChange}
              />
            </div>

            <div className="field field-half">
              <label htmlFor="tractor">{ui.contact.form.tractor}</label>
              <input
                id="tractor"
                name="tractor"
                type="text"
                placeholder={ui.contact.form.placeholderTractor}
                value={formValues.tractor}
                onChange={onContactChange}
              />
            </div>

            <div className="field field-full">
              <label htmlFor="role">{ui.contact.form.role}</label>
              <select id="role" name="role" value={formValues.role} onChange={onContactChange}>
                {roleKeys.map((roleKey) => (
                  <option key={roleKey} value={roleKey}>
                    {ui.contact.form.roleOptions[roleKey]}
                  </option>
                ))}
              </select>
            </div>

            <div className="field field-full">
              <label htmlFor="message">{ui.contact.form.message}</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder={ui.contact.form.placeholderMessage}
                value={formValues.message}
                onChange={onContactChange}
              />
            </div>
          </div>

          {submitStatus.message ? (
            <p
              className={`contact-status ${
                submitStatus.type === 'success' ? 'contact-status-success' : 'contact-status-error'
              }`}
              role={submitStatus.type === 'error' ? 'alert' : 'status'}
              aria-live="polite"
            >
              {submitStatus.message}
            </p>
          ) : null}

          <button type="submit" className="btn-primary contact-submit" disabled={isSubmitting}>
            {isSubmitting ? ui.contact.form.sending : ui.contact.form.submit}
          </button>

          <p className="contact-note">{ui.contact.form.note}</p>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
