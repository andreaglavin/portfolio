# Design System

The single source of truth for visual decisions across the portfolio. Every
component, page, and section consumes values from this folder — never hardcode
colors, spacing, or font sizes inline.

## Files

| File              | Purpose                                                                 |
| ----------------- | ----------------------------------------------------------------------- |
| `tokens.css`      | Colors, spacing scale, radius, elevation, motion, z-index.              |
| `typography.css`  | Font families, type scale, weights, line-heights, gradient text helper. |
| `reset.css`       | Modern reset + body defaults.                                           |
| `animations.css`  | Shared scroll-reveal classes used with the `useFadeIn` hook.            |
| `index.css`       | Entry point — imports the above in the correct order.                   |

## Using tokens in CSS Modules

```css
/* MyComponent.module.css */
.card {
  background: var(--color-surface-2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  transition: border-color var(--transition-medium);
}

.card:hover {
  border-color: var(--color-border-hover);
}

.title {
  font-family: var(--font-heading);
  font-size: var(--text-h4);
  font-weight: var(--weight-bold);
  letter-spacing: var(--tracking-snug);
}
```

## Token reference

### Color

- **Surface** — `--color-bg`, `--color-surface`, `--color-surface-2`,
  `--color-surface-3`, `--color-section-alt`, `--color-section-elevated`
- **Border** — `--color-border`, `--color-border-hover`
- **Text** — `--color-text`, `--color-text-secondary`, `--color-text-tertiary`
- **Accent** — `--color-accent`, `--color-accent-hover`,
  `--color-accent-glow`, `--color-accent-subtle`
- **Gradients** — `--gradient-brand` (2-stop), `--gradient-brand-tri` (3-stop)

### Layout

- `--container-max` (1200px), `--container-padding` (24px),
  `--section-padding` (responsive: 120 / 80 / 64px), `--nav-height` (72px)

### Spacing

`--space-1` (4px) through `--space-24` (96px) on a 4-px grid.

### Radius

`--radius-sm` (8) · `--radius-md` (12) · `--radius-lg` (20) · `--radius-xl` (28) ·
`--radius-full`

### Motion

- Easing — `--ease-out-soft`
- Durations — `--transition-fast` (200ms) · `--transition-medium` (400ms) ·
  `--transition-slow` (600ms)

### Typography

- Families — `--font-heading` (Inter), `--font-body` (Krub)
- Weights — `--weight-regular` (400) through `--weight-extrabold` (800)
- Body sizes — `--text-xs` (12) through `--text-lg` (18)
- Heading sizes — `--text-h6` (18) up to `--text-h1` (fluid 40–64px),
  `--text-display` (fluid 36–56px)
- Line-heights — `--leading-tight` · `--leading-snug` · `--leading-normal` ·
  `--leading-relaxed`
- Tracking — `--tracking-tight` · `--tracking-snug` · `--tracking-wide` ·
  `--tracking-wider` · `--tracking-widest`

## Conventions

1. **Never hardcode colors or sizes.** If a value is missing, add it to a token
   file first and reference it.
2. **CSS Modules per component.** Co-locate `Foo.tsx` and `Foo.module.css`.
3. **Semantic HTML.** Headings are styled via the global `h1`–`h6` rules in
   `typography.css`; components rarely need to override.
4. **Gradient text** — wrap with the `gradient-text` className (global) or use
   `<em>` inline for emphasis.
