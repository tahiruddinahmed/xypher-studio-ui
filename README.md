# Xypher Studio

A premium event service provider booking platform built with React, TypeScript, TailwindCSS, and Framer Motion.

## Features

- 🎨 **Modern UI/UX** - Premium, high-end marketplace design
- ✨ **Smooth Animations** - Framer Motion powered animations throughout
- 📱 **Responsive Design** - Mobile-first approach with full responsiveness
- 🎯 **Animated Typography** - Hero section with typing/rotating text animation
- 🚀 **Performance Optimized** - Code splitting, lazy loading, and optimized animations
- ♿ **Accessible** - WCAG AA compliant with keyboard navigation support

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router v6

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── hero/
│   │   ├── AnimatedTypography.tsx  # Typing animation component
│   │   └── HeroSection.tsx          # Hero section with animated typography
│   ├── layout/
│   │   ├── Navbar.tsx               # Navigation bar
│   │   └── Footer.tsx               # Footer component
│   ├── sections/
│   │   ├── ServiceCategories.tsx    # Service categories grid
│   │   ├── TopProviders.tsx        # Top-rated providers section
│   │   ├── HowItWorks.tsx          # How it works section
│   │   └── Testimonials.tsx        # Customer testimonials
│   └── ui/
│       ├── Button.tsx               # Reusable button component
│       ├── Card.tsx                 # Card component with animations
│       └── Section.tsx              # Section wrapper component
├── pages/
│   ├── Home.tsx                     # Home page
│   ├── ProvidersListing.tsx         # Providers listing page
│   ├── ProviderProfile.tsx         # Individual provider profile
│   └── BookingFlow.tsx             # Multi-step booking flow
├── App.tsx                          # Main app component with routing
├── main.tsx                         # Entry point
└── index.css                        # Global styles
```

## Key Features

### Hero Section with Animated Typography
The hero section features a typing animation that cycles through different service categories (Photographers, Makeup Artists, Decorators, DJs, Videographers, Event Professionals).

### Service Categories
Browse through six main service categories with beautiful card layouts and hover animations.

### Provider Listings
Search and filter providers by category with smooth animations and lazy loading.

### Booking Flow
Multi-step booking process with progress indicators and smooth transitions between steps.

## Animation Best Practices

- Uses `transform` and `opacity` for performant animations
- Respects `prefers-reduced-motion` for accessibility
- Staggered animations for list items
- Scroll-triggered animations using `whileInView`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

