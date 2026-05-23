/**
 * Site-wide metadata. Update these in one place — everything else reads from here.
 */

export const site = {
  name: 'Andrea Gomez Lavin',
  role: 'Product Designer',
  email: 'andreaglavin@gmail.com',
  linkedin: 'https://www.linkedin.com/in/andreagola',
  copyrightYear: 2026,
} as const;

export const navLinks = [
  { href: '#ai-native', label: 'AI-Native' },
  { href: '#work', label: 'Work' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#timeline', label: 'Experience' },
] as const;

export const mobileMenuLinks = [
  { href: '#work', label: 'Work' },
  { href: '#ai-native', label: 'AI-Native' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: "Let's Talk" },
] as const;

export const sectionIds = ['ai-native', 'work', 'testimonials', 'timeline'] as const;
