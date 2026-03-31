# Olange Solutions Website

A modern React-based marketing website for **Olange Solutions**, built to present the company’s service and supply offering in a polished, responsive, and maintainable format.

The site combines:

- a refined homepage with animated visual sections
- light and dark mode
- service and supply package pages
- a guided quote-request flow
- branded About and team presentation
- reusable React components and data-driven content

## Overview

Olange Solutions positions itself as a practical partner for:

- services
- supplies
- delivery
- operational support for homes, offices, and projects

This website was converted from a legacy multi-page static HTML setup into a **React + Vite** application so it is easier to maintain, extend, and modernize.

## Screenshots

### Homepage Hero

<img width="1414" height="824" alt="Olange Solutions homepage hero" src="https://github.com/user-attachments/assets/2cf05328-280d-4457-a8af-3623db70b269" />

### Services Grid

The services page uses structured category cards, consistent icon treatment, and expandable detail modals.

<img width="1113" height="723" alt="image" src="https://github.com/user-attachments/assets/dd1df261-d9db-4206-8560-a25a1356ab71" />

### Service Detail Modal

The shared modal system presents service details, benefits, and supporting context in a reusable React component.

<img width="1104" height="838" alt="image" src="https://github.com/user-attachments/assets/d0a2f497-408d-4ecd-9097-77ab20041c98" />


### Guided Quote Flow

The quote section is designed as a structured request experience so users can choose between services and supplies with clearer intent.

<img width="1037" height="676" alt="image" src="https://github.com/user-attachments/assets/2a0c3c7e-6d3c-49af-b534-25bde95534ca" />


### About Overview

The About page combines a dark, modern section layout with branded capability cards and clearer operational positioning.

<img width="1057" height="832" alt="image" src="https://github.com/user-attachments/assets/c33bba70-9c70-42b5-8912-ee69ea1ff9ef" />


## Core Experience

### 1. Homepage

The homepage introduces the brand and key offer areas with:

- a modern animated hero
- a branded “Who We Are” feature section
- package overview cards
- a guided quote request section
- animated testimonial rails

### 2. About Page

The About page explains the company’s positioning and capabilities through:

- an element-based hero
- a clearer company overview
- capability cards
- a redesigned team section with editorial-style profile cards

### 3. Services Page

The Services page presents service categories using:

- a modern page hero
- data-driven service cards
- expandable React modals for details and benefits

### 4. Supplies Page

The Supplies page mirrors the services experience for supply categories, including:

- supply-specific hero visuals
- category cards
- modal-based deeper explanations

## Key Features

### Theme Support

The site includes:

- persistent light and dark mode
- localStorage-based theme memory
- theme-aware shared styling

### Quote Flow

The quote form supports:

- service or supply selection
- guided option picking
- structured submission fields
- scroll-to-quote navigation from shared CTAs

### Navigation

The shared header includes:

- homepage, about, and packages navigation
- request quote CTA
- call CTA
- theme toggle

The project uses **HashRouter**, which helps keep navigation deployment-friendly for static hosting.

### Reusable Modal System

Service and supply details use a shared React modal component with:

- title
- intro copy
- sections or bullet lists
- benefit blocks
- proper overlay and close behavior

### Responsive Design

The website is designed to adapt across:

- desktop
- tablet
- mobile

Several sections were specifically refined for smaller viewports, including the hero visuals, quote flow, testimonial movement, and team presentation.

## Tech Stack

- React 18
- Vite
- React Router
- Bootstrap utility/layout classes
- custom CSS design system
- Font Awesome icons
- Bootstrap Icons

## Project Structure

```text
OlangeSolutions/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── img/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   │   ├── BackToTop.jsx
│   │   ├── CatalogSection.jsx
│   │   ├── ContentModal.jsx
│   │   ├── Footer.jsx
│   │   ├── PageHero.jsx
│   │   ├── QuoteSection.jsx
│   │   ├── SiteLayout.jsx
│   │   └── SiteNavbar.jsx
│   ├── data/
│   │   └── siteData.js
│   ├── hooks/
│   │   └── usePageSetup.js
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── ServicesPage.jsx
│   │   └── SuppliesPage.jsx
│   └── styles/
│       └── react-app.css
├── css/
│   ├── bootstrap.min.css
│   └── style.css
└── README.md
```

## Page Architecture

### Shared Layout

`SiteLayout.jsx` wraps the main user-facing structure:

- navbar
- routed page content
- footer
- back-to-top button

### Shared Data

`src/data/siteData.js` centralizes most content, including:

- services
- supplies
- testimonials
- team members
- hero configurations
- package summaries

This makes content changes easier without having to rewrite page components.

### Styling Layers

The UI styling comes from two layers:

- `css/style.css`
  This holds the main design system and large shared visual styling.
- `src/styles/react-app.css`
  This adds React-specific UI refinements, custom section styling, modals, testimonial motion, and layout overrides.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### Update Business Content

Edit:

- `src/data/siteData.js`

This is the main place to update:

- service descriptions
- supplies
- testimonials
- team members
- hero messaging

### Update Layout or UI

Edit:

- `src/pages/*.jsx`
- `src/components/*.jsx`
- `src/styles/react-app.css`
- `css/style.css`

### Update Images

Replace or add assets inside:

- `public/img/`

## Recommended Next Improvements

- replace sample testimonials with verified client quotes
- add dedicated screenshots for About, Services, Supplies, and Quote sections in this README
- introduce SEO metadata per route if needed
- connect the quote form to a dedicated backend or email workflow if the project grows

## Contact

**Olange Solutions**

- Location: Plot 15434, Chalala Shantumbu, Lusaka
- Phone: +260 97 7304359 | +260 97 9974079
- Email: olangesolutions@gmail.com

## License

See [LICENSE.txt](./LICENSE.txt).
