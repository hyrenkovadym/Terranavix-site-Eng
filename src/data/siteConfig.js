const readEnv = (key) => {
  const value = import.meta.env[key];
  return typeof value === 'string' ? value.trim() : '';
};

export const CONTACT_EMAIL = readEnv('VITE_CONTACT_EMAIL');
export const CONTACT_FORM_ENDPOINT =
  readEnv('VITE_CONTACT_FORM_ENDPOINT') || (CONTACT_EMAIL ? `https://formsubmit.co/ajax/${CONTACT_EMAIL}` : '');
export const CONTACT_NAME = readEnv('VITE_CONTACT_NAME') || 'TerraNavix Sales Team';
export const CONTACT_PHONE = readEnv('VITE_CONTACT_PHONE');
export const CONTACT_EMAIL_DISPLAY = CONTACT_EMAIL || 'sales@example.com';
export const CONTACT_PHONE_DISPLAY = CONTACT_PHONE || '+1 000 000 0000';
export const CONTACT_PHONE_HREF = CONTACT_PHONE ? `tel:${CONTACT_PHONE.replace(/[^\d+]/g, '')}` : '';
