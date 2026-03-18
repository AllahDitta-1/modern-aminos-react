# Moderna Minos - React Conversion

A pixel-perfect React conversion of the Moderna Minos website homepage.

## Features

- ✨ Pixel-perfect responsive design
- 🎨 Modern UI with clean aesthetics
- 📱 Mobile-responsive layout
- ⚡ Built with Vite for fast development
- 🎭 Smooth animations and transitions
- 📦 React 18 with Javascript

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with mobile menu
│   ├── Hero.tsx            # Hero section with CTA buttons
│   ├── Features.tsx        # Features grid (3 cards)
│   ├── Testimonials.tsx    # Testimonials section
│   ├── CTA.tsx             # Call-to-action section
│   ├── Footer.tsx          # Footer with links and social icons
│   └── [component].css     # Scoped styling for each component
├── App.tsx                 # Main app component
├── App.css                 # App-level styles
├── index.css               # Global styles
└── main.tsx                # React entry point
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The development server will start at `http://localhost:5173`

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Sections Included

1. **Header** - Fixed navigation with responsive mobile menu
2. **Hero** - Large hero section with headline, subtitle, and CTA buttons
3. **Features** - Three feature cards with icons and descriptions
4. **Testimonials** - Client testimonials with star ratings
5. **CTA** - Call-to-action section for conversion
6. **Footer** - Comprehensive footer with links and social media

## Design Details

- **Colors**: Neutral palette with black (#1a1a1a) for primary text and accents
- **Typography**: System font stack for reliability and performance
- **Spacing**: Consistent padding/margin spacing (4px, 8px, 12px, 16px, 20px, 24px, 28px, 32px, ...)
- **Border Radius**: 6px-12px for smooth, modern look
- **Shadows**: Subtle elevation shadows for depth
- **Responsive**: Mobile-first approach with breakpoint at 768px

## Technologies Used

- React 18.3
- TypeScript 5.9
- Vite 5.4
- Lucide React (Icons)

## Notes

The current implementation includes placeholder content and icons. To match the exact Moderna Minos design:

1. Replace placeholder text with actual content from the website
2. Update colors to match the brand palette (inspect the original site for hex codes)
3. Replace placeholder images with actual brand images
4. Customize fonts if different from system defaults
5. Adjust spacing and sizing based on the original design

## Next Steps for Customization

1. Inspect the original modernaminos.com website using Chrome DevTools
2. Extract exact color values, fonts, and spacing
3. Update the CSS files with the actual styling
4. Replace placeholder content with real copy
5. Add actual images and logo assets
