import { useEffect, useState } from 'react';

import terraLogo from './assets/terranavix-logo.png';
import displayImg from './assets/display.png';
import wheelImg from './assets/wheel.png';
import antennaImg from './assets/antenna.png';
import imuImg from './assets/imu.png';
import wiringImg from './assets/wiring.png';
import fasteningImg from './assets/fastening.png';
import fieldViewVideo from './assets/terranavix-field-view.mp4';

const KIT_ITEMS = [
  {
    id: '01',
    title: 'Rugged 10.1" display',
    text: 'Sunlight-readable touch display designed for daily use in the cab.',
    image: displayImg,
  },
  {
    id: '02',
    title: 'Electric steering wheel',
    text: 'High-torque steering wheel unit that keeps your tractor on the guidance line.',
    image: wheelImg,
  },
  {
    id: '03',
    title: 'GNSS antenna',
    text: 'Multi-constellation GNSS antenna with an external modem/RTK antenna for high-accuracy corrections.',
    image: antennaImg,
  },
  {
    id: '04',
    title: 'External IMU',
    text: 'Terrain compensation sensor to help maintain accuracy on slopes and rough ground.',
    image: imuImg,
  },
  {
    id: '05',
    title: 'Cables & mounting hardware',
    text: 'Full cable set, brackets and fixing hardware for a clean and reliable install, including wiring for the GNSS and modem/RTK antennas.',
    image: wiringImg,
  },
  {
    id: '06',
    title: 'Installation & user guides',
    text: 'Printed and digital manuals to help your team install and start using TerraNavix quickly.',
    image: fasteningImg,
  },
];

const CONTACT_EMAIL = 'w.cheyney@frendt.ua';
const INITIAL_FORM_VALUES = {
  name: '',
  email: '',
  country: '',
  tractor: '',
  role: 'Farmer',
  message: '',
};

function App() {
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [activeKitIndex, setActiveKitIndex] = useState(0);

  const handleContactChange = (event) => {
    const { id, value } = event.target;
    setFormValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const trimmedName = formValues.name.trim();
    const trimmedEmail = formValues.email.trim();
    const trimmedMessage = formValues.message.trim();

    if (!trimmedName || !trimmedEmail) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in Name and Email before sending.',
      });
      return;
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
    if (!emailIsValid) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          country: formValues.country.trim(),
          tractor: formValues.tractor.trim(),
          role: formValues.role,
          message: trimmedMessage,
          _subject: `TerraNavix quote request from ${trimmedName}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setFormValues(INITIAL_FORM_VALUES);
      setSubmitStatus({
        type: 'success',
        message: 'Thanks! Your request was sent. We will reply to your email soon.',
      });
    } catch {
      setSubmitStatus({
        type: 'error',
        message: `Could not send the request now. Please write us directly at ${CONTACT_EMAIL}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    // Preload kit images.
    KIT_ITEMS.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });

    const timer = setInterval(() => {
      setActiveKitIndex((prev) => (prev + 1) % KIT_ITEMS.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page">
      {/* HEADER */}
      <header className="site-header">
        <div className="site-header-inner">
          <div className="logo-wrap">
            <img src={terraLogo} alt="TerraNavix logo" className="logo-img" />
          </div>

          <nav className="nav">
            <button onClick={() => scrollToSection('section-product')}>Product</button>
            <button onClick={() => scrollToSection('section-tech')}>Technology</button>
            <button onClick={() => scrollToSection('section-results')}>ROI</button>
            <button className="nav-cta" onClick={() => scrollToSection('section-contact')}>
              Request a quote
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="hero" id="section-top">
          <div className="hero-inner">
            <div>
              <div className="hero-eyebrow">AUTOSTEER GUIDANCE KIT</div>
              <h1 className="hero-title">
                Autosteer that keeps your rows straight - every pass, every field.
              </h1>
              <p className="hero-subtitle">
                TerraNavix is an all-in-one guidance kit that turns your tractor into a precision
                autosteer machine with high accuracy and simple controls.
              </p>

              <ul className="hero-bullets">
                <li>Fast installation - typically ready to work in about one day.</li>
                <li>Universal kit for different tractors and implements.</li>
                <li>High accuracy with GNSS and terrain compensation.</li>
                <li>Simple interface operators can learn in a day.</li>
              </ul>

              <div className="hero-cta-row">
                <button className="btn-primary" onClick={() => scrollToSection('section-contact')}>
                  Request a quote
                </button>
                <button className="btn-secondary" onClick={() => scrollToSection('section-product')}>
                  Explore the product
                </button>
              </div>
            </div>

            <div className="hero-mock">
              <div className="hero-mock-screen">
                <div className="hero-mock-chip">TerraNavix field view</div>
                <div className="hero-mock-map">
                  <div className="hero-mock-field">
                    <video
                      className="hero-mock-video"
                      src={fieldViewVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                  <div className="hero-mock-sidebar">
                    <span>AB line: A-B North</span>
                    <span>Pass-to-pass: high accuracy</span>
                    <span>Speed: 7.5 km/h</span>
                    <span>Overlap: reduced</span>
                    <span>Operator: hands off the wheel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY TERRANAVIX */}
        <section id="section-product" className="section-light">
          <div className="section-inner">
            <h2>Why farmers choose TerraNavix</h2>
            <p>
              TerraNavix is built to keep guidance simple in real fields: straight rows, less overlap
              and a calmer day in the cab - even for seasonal operators.
            </p>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-tag">Straight passes</div>
                <div className="feature-title">Straighter rows with less effort</div>
                <div className="feature-text">
                  Let TerraNavix keep the tractor on line, so your operator can focus on the
                  implement and the job, not on fighting the steering wheel.
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-tag">Low speed ready</div>
                <div className="feature-title">Works at low speeds</div>
                <div className="feature-text">
                  Maintain accurate guidance even at low speeds, ideal for planting, specialty crops
                  and operations where precision really matters.
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-tag">Terrain compensation</div>
                <div className="feature-title">Handles slopes and rough ground</div>
                <div className="feature-text">
                  External sensors help maintain guidance accuracy on uneven fields, slopes and rough
                  conditions throughout the season.
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-tag">Easy to learn</div>
                <div className="feature-title">Simple, clean interface</div>
                <div className="feature-text">
                  A modern layout with clear maps and guidance view, so new and seasonal operators
                  can get comfortable in a single day.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KIT - WHAT'S IN THE BOX */}
        <section id="section-tech" className="section-kit">
          <div className="section-inner">
            <h2>What's in the TerraNavix kit</h2>
            <p>
              TerraNavix is delivered as a complete autosteer kit. All major components, cables and
              mounting hardware are included - so you can go from box to field without hunting for
              extra parts.
            </p>

            <div className="kit-layout">
              <div className="kit-image-placeholder">
                <img
                  src={KIT_ITEMS[activeKitIndex].image}
                  alt={KIT_ITEMS[activeKitIndex].title}
                  className="kit-main-img"
                />
              </div>

              <div className="kit-list">
                {KIT_ITEMS.map((item, index) => (
                  <div
                    key={item.id}
                    className={`kit-item ${index === activeKitIndex ? 'kit-item-active' : ''}`}
                    onClick={() => setActiveKitIndex(index)}
                  >
                    <div className="kit-badge">{item.id}</div>
                    <div>
                      <div className="kit-title">{item.title}</div>
                      <div className="kit-text">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

                {/* FIELD COMPARISON */}
        <section className="section-field" id="section-field">
          <div className="section-inner">
            <h2>Manual driving vs TerraNavix</h2>
            <p>
              The same field, two different outcomes. Here is what changes when steering precision
              is automated.
            </p>

            <div className="field-grid">
              <article className="field-card">
                <div className="field-label">Without Autosteer</div>
                <p className="field-text">
                  Manual steering creates small pass-to-pass errors that compound over the day.
                </p>
                <div className="field-subtitle">What happens in the field</div>
                <ul className="field-list">
                  <li>Up to 15% overlap across the field.</li>
                  <li>Occasional double application of fertilizers and crop protection products.</li>
                  <li>The operator constantly corrects the line and gets tired faster.</li>
                </ul>
              </article>

              <article className="field-card">
                <div className="field-label">With TerraNavix</div>
                <p className="field-text">
                  Guidance stays steady with straight passes and consistent field geometry.
                </p>
                <div className="field-subtitle">What TerraNavix changes</div>
                <ul className="field-list">
                  <li>Overlap can drop to around 3%.</li>
                  <li>Up to 10-12% savings on fertilizers, crop protection products, and fuel.</li>
                  <li>Straighter rows, calmer night shifts, and lower operator fatigue.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="section-dark-block">
          <div className="section-inner">
            <h2>Where TerraNavix helps the most</h2>
            <p>
              One autosteer system for many operations across the season - from the first pass in
              spring to the last loads at harvest.
            </p>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-tag">Planting & seeding</div>
                <div className="feature-title">Consistent row spacing</div>
                <div className="feature-text">
                  Keep rows straight and spacing uniform so emergence is more even and harvest is
                  easier.
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-tag">Spraying & fertilizing</div>
                <div className="feature-title">Less overlap, fewer skips</div>
                <div className="feature-text">
                  Reduce wasted inputs and protect crops by following guidance lines instead of
                  guessing in tall or thick crops.
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-tag">Tillage</div>
                <div className="feature-title">Straight passes in low visibility</div>
                <div className="feature-text">
                  Dust, night work or long days - TerraNavix keeps the tractor on line when it's hard
                  to see markers.
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-tag">Harvest</div>
                <div className="feature-title">Follow previous passes</div>
                <div className="feature-text">
                  Track previous operations accurately so the header stays full and operators stay
                  calmer during busy harvest days.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS / ROI */}
        <section id="section-results" className="section-results">
          <div className="section-inner">
            <h2>See the impact in your fields</h2>
            <p>
              TerraNavix helps reduce overlaps and skips, save fuel and inputs, and keep operators
              fresher over long work days. Even on smaller farms, these gains add up over the season.
            </p>

            <div className="results-grid">
              <div className="results-card">
                <div className="results-label">Overlap</div>
                <div className="results-value">Less wasted passes</div>
                <div className="results-text">
                  Straighter passes and more accurate tracking mean fewer wasted trips over the same
                  ground.
                </div>
              </div>
              <div className="results-card">
                <div className="results-label">Inputs</div>
                <div className="results-value">More efficient use</div>
                <div className="results-text">
                  Reduce double-applied areas and misses when spraying and fertilizing.
                </div>
              </div>
              <div className="results-card">
                <div className="results-label">Operator</div>
                <div className="results-value">Less fatigue</div>
                <div className="results-text">
                  Autosteer takes over the repetitive steering, so operators stay calmer and make fewer
                  mistakes.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT / REQUEST A QUOTE */}
        <section id="section-contact" className="section-contact">
          <div className="section-inner contact-inner">
            <div className="contact-text">
              <h2>Let's talk about your fields</h2>
              <p>
                Tell us a bit about your tractor, implements and how you work today. We'll help you
                understand if TerraNavix is a good fit and what configuration makes the most sense.
              </p>
              <ul>
                <li>No obligation - just a conversation.</li>
                <li>We respond by email within a few business days.</li>
              </ul>

              <div className="intl-sales-contact">
                <div className="intl-sales-label">International sales contact</div>
                <div className="intl-sales-name">William Cheyney</div>
                <a className="intl-sales-phone" href="tel:+447472664547">
                  +44 7472 664547
                </a>
                <a className="intl-sales-email" href="mailto:w.cheyney@frendt.ua">
                  w.cheyney@frendt.ua
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="contact-form-grid">
                <div className="field field-half">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Smith"
                    value={formValues.name}
                    onChange={handleContactChange}
                    required
                  />
                </div>

                <div className="field field-half">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formValues.email}
                    onChange={handleContactChange}
                    required
                  />
                </div>

                <div className="field field-half">
                  <label htmlFor="country">Country / State</label>
                  <input
                    id="country"
                    type="text"
                    placeholder="Ukraine, Lviv region"
                    value={formValues.country}
                    onChange={handleContactChange}
                  />
                </div>

                <div className="field field-half">
                  <label htmlFor="tractor">Tractor brand / model</label>
                  <input
                    id="tractor"
                    type="text"
                    placeholder="John Deere 8R / New Holland T7"
                    value={formValues.tractor}
                    onChange={handleContactChange}
                  />
                </div>

                <div className="field field-full">
                  <label htmlFor="role">I am a</label>
                  <select id="role" value={formValues.role} onChange={handleContactChange}>
                    <option>Farmer</option>
                    <option>Contractor</option>
                    <option>Dealer</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="field field-full">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Tell us about your fields and how you plan to use autosteer."
                    value={formValues.message}
                    onChange={handleContactChange}
                  />
                </div>
              </div>

              {submitStatus.message ? (
                <p
                  className={`contact-status ${
                    submitStatus.type === 'success' ? 'contact-status-success' : 'contact-status-error'
                  }`}
                  role="status"
                >
                  {submitStatus.message}
                </p>
              ) : null}

              <button type="submit" className="btn-primary contact-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send my request'}
              </button>

              <p className="contact-note">
                We only use your details to respond to your request. No spam, no sharing with third
                parties.
              </p>
            </form>
          </div>
        </section>

        <footer className="site-footer">
          <div className="section-inner footer-inner">
            <div className="footer-left">(c) {new Date().getFullYear()} TerraNavix. All rights reserved.</div>

            <div className="footer-right">Autosteer guidance kit for modern fields.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
