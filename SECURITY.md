# Security Policy

## Security Principles
- Do not commit secrets, tokens, passwords, or private keys.
- Do not hardcode private emails, phone numbers, or internal endpoints in source code.
- Prefer environment variables for runtime configuration.
- Validate and sanitize form inputs before processing.
- Review third-party form services and their data handling policies.

## Environment Variables
Use `.env` for local values and keep `.env` out of version control.

Public frontend variables (`VITE_*`) are exposed in built assets, so never place secrets in them.

## Contact Form Safety
- Keep endpoint configuration externalized (`VITE_CONTACT_FORM_ENDPOINT` / `VITE_CONTACT_EMAIL`).
- Validate required fields and email format client-side.
- If adding a backend later, re-validate input server-side.

## Dependency and Build Hygiene
- Regularly run dependency updates and vulnerability audits.
- Keep CI checks enabled for lint/build verification.

## Reporting Security Issues
If you discover a security issue, please open a private security report with:
- affected file/area,
- reproduction steps,
- potential impact,
- suggested mitigation.

Do not publish sensitive exploit details in public issue threads.
