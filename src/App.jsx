import terraLogo from './assets/terranavix-logo.png'

function App() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

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
            <button
              className="nav-cta"
              onClick={() => scrollToSection('section-contact')}
            >
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
                Autosteer that keeps your rows straight — every pass, every field.
              </h1>
              <p className="hero-subtitle">
                TerraNavix is an all-in-one guidance kit that turns your tractor into a precision
                autosteer machine with high accuracy and simple controls.
              </p>

              <ul className="hero-bullets">
                <li>Fast installation — typically ready to work in about one day.</li>
                <li>Universal kit for different tractors and implements.</li>
                <li>High accuracy with GNSS and terrain compensation.</li>
                <li>Simple interface operators can learn in a day.</li>
              </ul>

              <div className="hero-cta-row">
                <button
                  className="btn-primary"
                  onClick={() => scrollToSection('section-contact')}
                >
                  Request a quote
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => scrollToSection('section-product')}
                >
                  Explore the product
                </button>
              </div>
            </div>

            <div className="hero-mock">
              <div className="hero-mock-screen">
                <div className="hero-mock-chip">TerraNavix field view</div>
                <div className="hero-mock-map">
                  <div className="hero-mock-field">
                    <div className="hero-mock-path" />
                  </div>
                  <div className="hero-mock-sidebar">
                    <span>AB line: A–B North</span>
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
              TerraNavix is built to keep guidance simple in real fields: straight rows, less
              overlap and a calmer day in the cab — even for seasonal operators.
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
                  External sensors help maintain guidance accuracy on uneven fields, slopes and
                  rough conditions throughout the season.
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




        {/* KIT – WHAT'S IN THE BOX */}
        <section id="section-tech" className="section-kit">
          <div className="section-inner">
            <h2>What’s in the TerraNavix kit</h2>
            <p>
              TerraNavix is delivered as a complete autosteer kit. All major components, cables and
              mounting hardware are included — so you can go from box to field without hunting for
              extra parts.
            </p>

            <div className="kit-layout">
              <div className="kit-image-placeholder">
                {/* Сюди потім поставимо реальне фото комплекту */}
                <span>Kit photo goes here</span>
              </div>

              <div className="kit-list">
                <div className="kit-item">
                  <div className="kit-badge">01</div>
                  <div>
                    <div className="kit-title">Rugged 10.1″ display</div>
                    <div className="kit-text">
                      Sunlight-readable touch display designed for daily use in the cab.
                    </div>
                  </div>
                </div>

                <div className="kit-item">
                  <div className="kit-badge">02</div>
                  <div>
                    <div className="kit-title">Electric steering wheel</div>
                    <div className="kit-text">
                      High-torque steering wheel unit that keeps your tractor on the guidance line.
                    </div>
                  </div>
                </div>

                <div className="kit-item">
                  <div className="kit-badge">03</div>
                  <div>
                    <div className="kit-title">GNSS antenna</div>
                    <div className="kit-text">
                      Multi-constellation GNSS antenna ready for high-accuracy corrections.
                    </div>
                  </div>
                </div>

                <div className="kit-item">
                  <div className="kit-badge">04</div>
                  <div>
                    <div className="kit-title">External IMU</div>
                    <div className="kit-text">
                      Terrain compensation sensor to help maintain accuracy on slopes and rough
                      ground.
                    </div>
                  </div>
                </div>

                <div className="kit-item">
                  <div className="kit-badge">05</div>
                  <div>
                    <div className="kit-title">Cables & mounting hardware</div>
                    <div className="kit-text">
                      Full cable set, brackets and fixing hardware for a clean and reliable install.
                    </div>
                  </div>
                </div>

                <div className="kit-item">
                  <div className="kit-badge">06</div>
                  <div>
                    <div className="kit-title">Installation & user guides</div>
                    <div className="kit-text">
                      Printed and digital manuals to help your team install and start using
                      TerraNavix quickly.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* USE CASES */}
        <section className="section-light">
          <div className="section-inner">
            <h2>Where TerraNavix helps the most</h2>
            <p>
              One autosteer system for many operations across the season — from the first pass in
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
                  Dust, night work or long days — TerraNavix keeps the tractor on line when it’s
                  hard to see markers.
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
              fresher over long work days. Even on smaller farms, these gains add up over the
              season.
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
                  Autosteer takes over the repetitive steering, so operators stay calmer and make
                  fewer mistakes.
                </div>
              </div>
            </div>
          </div>
        </section>






        {/* CONTACT / REQUEST A QUOTE */}
        <section id="section-contact" className="section-contact">
          <div className="section-inner contact-inner">
            <div className="contact-text">
              <h2>Let’s talk about your fields</h2>
              <p>
                Tell us a bit about your tractor, implements and how you work today. We’ll help you
                understand if TerraNavix is a good fit and what configuration makes the most sense.
              </p>
              <ul>
                <li>No obligation – just a conversation.</li>
                <li>We respond by email within a few business days.</li>
              </ul>
            </div>

            <form className="contact-form">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="John Smith" />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="you@example.com" />
              </div>

              <div className="field">
                <label htmlFor="country">Country / State</label>
                <input id="country" type="text" placeholder="USA, Iowa" />
              </div>

              <div className="field">
                <label htmlFor="tractor">Tractor brand / model</label>
                <input id="tractor" type="text" placeholder="Brand, model" />
              </div>

              <div className="field">
                <label htmlFor="role">I am a</label>
                <select id="role">
                  <option>Farmer</option>
                  <option>Contractor</option>
                  <option>Dealer</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Tell us about your fields and how you plan to use autosteer."
                />
              </div>

              <button type="submit" className="btn-primary contact-submit">
                Send my request
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

          <div className="footer-left">
            © {new Date().getFullYear()} TerraNavix. All rights reserved.
          </div>

          <div className="footer-right">
            Autosteer guidance kit for modern fields.
          </div>
        </div>
      </footer>








      </main>
    </div>
  )
}

export default App
