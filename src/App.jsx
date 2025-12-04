import { useState, useEffect, useRef } from 'react';

import terraLogo from './assets/terranavix-logo.png';
import kitMain from './assets/TerraNavix.png';
import displayImg from './assets/display.png';
import wheelImg from './assets/wheel.png';
import antennaImg from './assets/antenna.png';
import imuImg from './assets/imu.png';
import wiringImg from './assets/wiring.png';
import fasteningImg from './assets/fastening.png';

const KIT_ITEMS = [
  {
    id: '01',
    title: 'Rugged 10.1″ display',
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

function App() {
  const handleContactSubmit = (event) => {
    event.preventDefault();
    alert('Thank you! We will get back to you by email.');
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const [activeKitIndex, setActiveKitIndex] = useState(0);

  useEffect(() => {
    // preload всіх картинок комплекту
    KIT_ITEMS.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });

    const timer = setInterval(() => {
      setActiveKitIndex((prev) => (prev + 1) % KIT_ITEMS.length);
    }, 8000); // 8 секунд

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
              TerraNavix is built to keep guidance simple in real fields: straight rows, less overlap
              and a calmer day in the cab — even for seasonal operators.
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

        {/* FIELD COMPARISON – animated */}
        <section className="section-field" id="section-field">
          <div className="section-inner">
            <h2>Manual driving vs TerraNavix</h2>
            <p>
              On real fields, small steering corrections add up. TerraNavix keeps the tractor
              on a consistent line so rows are straighter and overlap is easier to control.
            </p>

            <FieldCompare />
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

            <form className="contact-form" onSubmit={handleContactSubmit}>
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

            <div className="footer-right">Autosteer guidance kit for modern fields.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* 🔽 ОКРЕМИЙ КОМПОНЕНТ ДЛЯ АНІМОВАНИХ ПОЛІВ */

function FieldCompare() {
  const manualRef = useRef(null);
  const autoRef = useRef(null);

  useEffect(() => {
    const manualCanvas = manualRef.current;
    const autoCanvas = autoRef.current;
    if (!manualCanvas || !autoCanvas) return;

    function setupCanvas(canvas) {
      const ctx = canvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      return { ctx, width: rect.width, height: rect.height };
    }

    const manual = setupCanvas(manualCanvas);
    const auto = setupCanvas(autoCanvas);

    const rows = 8;
    const marginX = 20;
    const marginY = 18;
    const startTime = performance.now();

    function drawFrame(time) {
      const t = (time - startTime) / 1000;

      const configs = [
        { mode: 'manual', ...manual },
        { mode: 'auto', ...auto },
      ];

      for (const cfg of configs) {
        const { ctx, width, height, mode } = cfg;

        // фон поля
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = '#050b05';
        ctx.fillRect(0, 0, width, height);

        const length = width - marginX * 2;
        const spacing = (height - marginY * 2) / (rows - 1);

        for (let i = 0; i < rows; i++) {
          const baseY = marginY + i * spacing;
          const xStart = marginX;
          const xEnd = width - marginX;

          const getY = (x) => {
            if (mode === 'auto') {
              return baseY + Math.sin(x / 120 + t * 0.5) * 1.5;
            }
            return (
              baseY +
              Math.sin(x / 35 + i * 0.8 + t * 0.9) * 7 +
              Math.sin(x / 16 - t * 1.3 + i) * 4
            );
          };

          // тьмяна «база»
          ctx.beginPath();
          ctx.moveTo(xStart, getY(xStart));
          for (let x = xStart; x <= xEnd; x += 4) {
            ctx.lineTo(x, getY(x));
          }
          ctx.strokeStyle =
            mode === 'manual'
              ? 'rgba(255, 123, 87, 0.25)'
              : 'rgba(140, 255, 106, 0.25)';
          ctx.lineWidth = 2;
          ctx.shadowBlur = 0;
          ctx.stroke();

          // яскрава активна частина (рух трактора)
          const speed = mode === 'manual' ? 40 : 75; // px/s
          let head = ((t * speed) + i * 40) % (length + 40) - 20;
          head = Math.max(0, Math.min(head, length));

          ctx.beginPath();
          let first = true;
          for (let x = xStart; x <= xStart + head; x += 3) {
            const y = getY(x);
            if (first) {
              ctx.moveTo(x, y);
              first = false;
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.strokeStyle = mode === 'manual' ? '#ff7b57' : '#8cff6a';
          ctx.lineWidth = 3;
          ctx.shadowColor =
            mode === 'manual'
              ? 'rgba(255, 123, 87, 0.9)'
              : 'rgba(140, 255, 106, 0.9)';
          ctx.shadowBlur = 10;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      }

      requestAnimationFrame(drawFrame);
    }

    const id = requestAnimationFrame(drawFrame);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="field-grid">
      <div className="field-card">
        <div className="field-label">Manual steering</div>
        <canvas ref={manualRef} className="field-canvas" />
        <div className="field-text">
          Small steering errors on each pass lead to visible curves and overlap,
          especially on longer fields and tired days.
        </div>
      </div>

      <div className="field-card">
        <div className="field-label">With TerraNavix autosteer</div>
        <canvas ref={autoRef} className="field-canvas" />
        <div className="field-text">
          Autosteer holds the line on every pass, making rows visually straighter
          and overlaps easier to manage across the whole field.
        </div>
      </div>
    </div>
  );
}

export default App;


// ============ CANVAS FIELD ANIMATION ============

function createFieldAnimation(canvas, mode) {
  if (!canvas) return;

  function setup() {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    if (!width || !height) return;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const padding = 12;

    const spacingGrid = 24; // відстань між жовтими лініями-сіткою
    const spacingAuto = 18; // крок між проходами з автопілотом
    const spacingManual = 18; // крок між проходами без автопілота

    const baseX = padding + 10;
    const maxPasses = Math.floor(
      (width - padding * 2 - 20) / spacingGrid
    );

    function drawBackground() {
      // фон поля
      ctx.fillStyle = '#f7eaa0';
      ctx.fillRect(0, 0, width, height);

      // рамка
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#e0c15a';
      ctx.strokeRect(0.5, 0.5, width - 1, height - 1);

      // горизонтальна сітка
      ctx.strokeStyle = 'rgba(180, 150, 80, 0.5)';
      ctx.lineWidth = 1;
      for (let y = padding; y < height - padding; y += 10) {
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
      }

      // вертикальна сітка
      ctx.lineWidth = 1.2;
      for (let i = 0; i <= maxPasses; i++) {
        const gx = baseX + i * spacingGrid;
        ctx.beginPath();
        ctx.moveTo(gx, padding);
        ctx.lineTo(gx, height - padding);
        ctx.stroke();
      }
    }

    drawBackground();

    const state = {
      ctx,
      width,
      height,
      padding,
      baseX,
      mode,
      passSpacing: mode === 'auto' ? spacingAuto : spacingManual,
      currentPass: 0,
      goingUp: true,
      phase: 'vertical', // vertical | turn
      x: baseX,
      y: height - padding,
      targetX:
        baseX + (mode === 'auto' ? spacingAuto : spacingManual),
      lastTime: null,
    };

    function getPassX(passIndex) {
      const spacing = state.passSpacing;

      if (state.mode === 'auto') {
        // рівно, без хаосу
        return state.baseX + passIndex * spacing;
      } else {
        // manual — трохи гуляємо
        const jitter = (Math.random() - 0.5) * 10;
        return state.baseX + passIndex * spacing + jitter;
      }
    }

    function resetField() {
      drawBackground();
      state.currentPass = 0;
      state.goingUp = true;
      state.phase = 'vertical';
      state.x = getPassX(0);
      state.y = state.height - state.padding;
      state.targetX = getPassX(1);
    }

    resetField();

    function drawStep(dt) {
      const speed = 80; // px/сек
      const step = (speed * dt) / 1000;

      let { x, y, phase, goingUp } = state;
      const topLimit = state.padding;
      const bottomLimit = state.height - state.padding;
      const ctx = state.ctx;

      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.strokeStyle =
        state.mode === 'auto' ? '#00c86b' : '#ff4d4d';

      let newX = x;
      let newY = y;

      if (phase === 'vertical') {
        newY = goingUp ? y - step : y + step;

        if (goingUp && newY <= topLimit) {
          newY = topLimit;
          phase = 'turn';
          state.targetX = getPassX(state.currentPass + 1);
        } else if (!goingUp && newY >= bottomLimit) {
          newY = bottomLimit;
          phase = 'turn';
          state.targetX = getPassX(state.currentPass + 1);
        }
      } else if (phase === 'turn') {
        const dir = state.targetX > x ? 1 : -1;
        newX = x + dir * step;

        if (
          (dir === 1 && newX >= state.targetX) ||
          (dir === -1 && newX <= state.targetX)
        ) {
          newX = state.targetX;
          state.currentPass += 1;

          // дійшли до краю — перезапускаємо поле
          if (newX > state.width - state.padding - 10) {
            resetField();
            return;
          }

          goingUp = !goingUp;
          phase = 'vertical';
        }
      }

      // manual: невеликий дрейф навіть на вертикалі
      if (state.mode === 'manual' && phase === 'vertical') {
        const drift = (Math.random() - 0.5) * 0.6;
        newX += drift;
      }

      // малюємо слід
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(newX, newY);
      ctx.stroke();

      // трактор-кружечок
      const radius = 5;
      ctx.fillStyle =
        state.mode === 'auto' ? '#107912ff' : '#ed293dff';
      ctx.beginPath();
      ctx.arc(newX, newY, radius, 0, Math.PI * 2);
      ctx.fill();

      state.x = newX;
      state.y = newY;
      state.phase = phase;
      state.goingUp = goingUp;
    }

    function loop(timestamp) {
      if (state.lastTime == null) state.lastTime = timestamp;
      const dt = timestamp - state.lastTime;
      state.lastTime = timestamp;

      const maxStep = 40;
      let remaining = dt;
      while (remaining > 0) {
        const stepDt = Math.min(remaining, maxStep);
        drawStep(stepDt);
        remaining -= stepDt;
      }

      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
  }

  setup();
}
