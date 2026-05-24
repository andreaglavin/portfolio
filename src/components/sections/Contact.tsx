import { LinkedInIcon } from '@/components/icons/LinkedInIcon';

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <div className="contact-content">
          <p className="section-label">Let's Connect</p>
          <h2 className="contact-title">Let's design with the user in mind. Get in touch.</h2>
          <p className="contact-description">I'm always open to discussing new products and big ideas. Say hello!</p>
          <a href="mailto:andreaglavin@gmail.com" className="btn btn-primary btn-large">Contact Me</a>
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
