# LearnSphere – Responsive Learning Platform

A responsive student learning dashboard built with **React + Vite + Tailwind CSS v4**.
Students can explore courses, search and filter them, and track learning progress.

## Tech Stack

- React 19 (JavaScript)
- Vite 8
- Tailwind CSS v4 (CSS-first configuration via `@theme`)
- React Icons
- Google Fonts (Poppins + Inter)

## Setup Instructions

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the printed URL (usually http://localhost:5173)
```

Production build: `npm run build` then `npm run preview`.

## How Tailwind Was Installed (v4)

Tailwind v4 no longer needs `tailwind.config.js` or PostCSS setup:

1. `npm install tailwindcss @tailwindcss/vite`
2. Added the plugin in [vite.config.js](vite.config.js): `plugins: [react(), tailwindcss()]`
3. Added `@import "tailwindcss";` at the top of [src/index.css](src/index.css)
4. Verified by applying a utility class (e.g. `bg-primary`) and seeing it render.

## Custom Theme & Fonts

Defined in [src/index.css](src/index.css) inside an `@theme` block:

- `--color-primary` (blue) → generates `bg-primary`, `text-primary`, etc.
- `--color-secondary` (purple), plus light/dark variants
- `--font-heading` (Poppins) → `font-heading`
- `--font-body` (Inter) → applied to `body` globally

Fonts are loaded from Google Fonts in [index.html](index.html).

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Responsive nav + mobile hamburger menu
│   ├── HeroSection.jsx     # Welcome banner (flex-col → md:flex-row)
│   ├── StatsCard.jsx       # Reusable stat card (icon, number, title)
│   ├── SearchBar.jsx       # Controlled search input
│   ├── CategoryFilter.jsx  # Filter buttons with active state
│   ├── CourseCard.jsx      # Reusable course card + progress bar
│   ├── CourseGrid.jsx      # Responsive grid + empty state
│   └── Footer.jsx
├── data/
│   └── courses.js          # 10 sample courses + categories
├── App.jsx                 # State (search, category) + page layout
├── main.jsx
└── index.css               # Tailwind import + @theme design system
```

## Key Implementation Notes

- **Mobile-first**: base classes target mobile; `md:` / `lg:` enhance larger screens
  (e.g. course grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- **Flexbox** used in: Navbar, Hero section, filter buttons, footer, icon+text rows.
- **Grid** used in: statistics cards (`lg:grid-cols-4`) and course cards — grid fits
  uniform two-dimensional card layouts better than flexbox.
- **Conditional classes**: active category button and course status badge use a
  `statusStyles` lookup object with **complete class names** (no `bg-${color}-500`),
  so Tailwind's scanner can find every class.
- **Progress bar**: width is the only dynamic value, set via `style={{ width: `${progress}%` }}`
  — this is the safe approach since Tailwind cannot generate arbitrary runtime widths.
- **Search** is case-insensitive and combines with the category filter; an empty
  state ("No courses found.") is shown when nothing matches.

## Responsive Breakpoints Tested

| Device        | Width  | Layout                          |
| ------------- | ------ | ------------------------------- |
| Mobile        | 375px  | 1 column, hamburger menu        |
| Tablet        | 768px  | 2 columns, full navbar          |
| Laptop        | 1024px | 3 course columns, 4 stat cards  |
| Large Desktop | 1440px | Centered max-width container    |
