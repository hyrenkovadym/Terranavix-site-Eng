import { useEffect, useMemo, useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ProductOverview from './components/ProductOverview';
import FieldComparison from './components/FieldComparison';
import UseCases from './components/UseCases';
import Results from './components/Results';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import terraLogo from './assets/terranavix-logo.png';
import displayImg from './assets/display.png';
import wheelImg from './assets/wheel.png';
import antennaImg from './assets/antenna.png';
import imuImg from './assets/imu.png';
import wiringImg from './assets/wiring.png';
import fasteningImg from './assets/fastening.png';
import fieldViewVideo from './assets/terranavix-field-view.mp4';

import { DEFAULT_LOCALE, INITIAL_FORM_VALUES, ROLE_KEYS, SUPPORTED_LOCALES, TRANSLATIONS } from './data/content';
import {
  CONTACT_EMAIL_DISPLAY,
  CONTACT_FORM_ENDPOINT,
  CONTACT_NAME,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
} from './data/siteConfig';

const KIT_IMAGES = [displayImg, wheelImg, antennaImg, imuImg, wiringImg, fasteningImg];

const normalizeLocale = (value) => value.toLowerCase().split('-')[0];

const detectLocale = () => {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE;

  const preferred = [];
  if (Array.isArray(navigator.languages) && navigator.languages.length > 0) {
    preferred.push(...navigator.languages);
  }

  if (navigator.language) {
    preferred.push(navigator.language);
  }

  for (const candidate of preferred) {
    const normalized = normalizeLocale(candidate);
    if (SUPPORTED_LOCALES.includes(normalized)) {
      return normalized;
    }
  }

  return DEFAULT_LOCALE;
};

function App() {
  const [locale] = useState(detectLocale);
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [activeKitIndex, setActiveKitIndex] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const ui = TRANSLATIONS[locale] ?? TRANSLATIONS[DEFAULT_LOCALE];
  const kitItems = useMemo(
    () =>
      ui.kit.items.map((item, index) => ({
        id: String(index + 1).padStart(2, '0'),
        title: item.title,
        text: item.text,
        image: KIT_IMAGES[index],
      })),
    [ui],
  );

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
        message: ui.contact.form.validationRequired,
      });
      return;
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
    if (!emailIsValid) {
      setSubmitStatus({
        type: 'error',
        message: ui.contact.form.validationEmail,
      });
      return;
    }

    if (!CONTACT_FORM_ENDPOINT) {
      setSubmitStatus({
        type: 'error',
        message: 'Form endpoint is not configured. Set VITE_CONTACT_FORM_ENDPOINT or VITE_CONTACT_EMAIL.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
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
          role: ui.contact.form.roleOptions[formValues.role] ?? formValues.role,
          message: trimmedMessage,
          _subject: `${ui.contact.form.subjectPrefix} ${trimmedName}`,
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
        message: ui.contact.form.success,
      });
    } catch {
      setSubmitStatus({
        type: 'error',
        message: `${ui.contact.form.errorPrefix} ${CONTACT_EMAIL_DISPLAY}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    el.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });

    setIsNavOpen(false);
  };

  const handleFooterNavigate = (event, sectionId) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    kitItems.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });

    const timer = setInterval(() => {
      setActiveKitIndex((prev) => (prev + 1) % kitItems.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [kitItems]);

  return (
    <div className="page">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Header
        logoSrc={terraLogo}
        logoAlt={ui.logoAlt}
        nav={ui.nav}
        isNavOpen={isNavOpen}
        onToggleNav={() => setIsNavOpen((prev) => !prev)}
        onNavigate={scrollToSection}
      />

      <main id="main-content">
        <Hero
          hero={ui.hero}
          videoSrc={fieldViewVideo}
          onPrimaryAction={() => scrollToSection('section-contact')}
          onSecondaryAction={() => scrollToSection('section-product')}
        />

        <Benefits sectionId="section-product" title={ui.why.title} text={ui.why.text} cards={ui.why.cards} />

        <ProductOverview
          sectionId="section-tech"
          title={ui.kit.title}
          text={ui.kit.text}
          kitItems={kitItems}
          activeKitIndex={activeKitIndex}
          onSelectKit={setActiveKitIndex}
        />

        <FieldComparison sectionId="section-field" field={ui.field} />

        <UseCases title={ui.useCases.title} text={ui.useCases.text} cards={ui.useCases.cards} />

        <Results sectionId="section-results" title={ui.results.title} text={ui.results.text} cards={ui.results.cards} />

        <ContactForm
          sectionId="section-contact"
          ui={ui}
          roleKeys={ROLE_KEYS}
          formValues={formValues}
          isSubmitting={isSubmitting}
          submitStatus={submitStatus}
          contactName={CONTACT_NAME}
          contactPhoneHref={CONTACT_PHONE_HREF}
          contactPhoneDisplay={CONTACT_PHONE_DISPLAY}
          contactEmail={CONTACT_EMAIL_DISPLAY}
          onContactChange={handleContactChange}
          onContactSubmit={handleContactSubmit}
        />
      </main>

      <Footer footer={ui.footer} nav={ui.nav} onNavigate={handleFooterNavigate} />
    </div>
  );
}

export default App;
