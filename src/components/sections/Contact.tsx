import { useState } from 'react';

import { LinkedInIcon } from '@/components/icons/LinkedInIcon';

const EMAIL = 'andreaglavin@gmail.com';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // navigator.clipboard isn't available (older browsers / non-secure contexts).
      // Silently fail — the email is still visible and the mailto button still works.
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <div className="contact-content">
          <p className="section-label">Let's Connect</p>
          <h2 className="contact-title">Let's design with the user in mind. Get in touch.</h2>
          <p className="contact-description">I'm always open to discussing new products and big ideas. Say hello!</p>
          <a href={`mailto:${EMAIL}`} className="btn btn-primary btn-large">Contact Me</a>

          <button
            type="button"
            className="email-copy"
            onClick={copyEmail}
            aria-label={copied ? 'Email copied' : 'Copy email address'}
          >
            <span className="email-copy-address">{EMAIL}</span>
            <span className="email-copy-icon" aria-hidden="true">
              {copied ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </span>
            <span className="email-copy-feedback" aria-live="polite">
              {copied ? 'Copied!' : ''}
            </span>
          </button>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/andreagola" target="_blank" rel="noreferrer noopener" className="social-link" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
