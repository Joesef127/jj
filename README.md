# JJ Clothing Ecommerce - Next.js Frontend

A modern, fully-featured ecommerce platform for JJ Clothing built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create environment file:

```bash
cp .env.local.example .env.local
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── config/            # Configuration files
│   ├── globals.css        # Global styles with CSS variables
│   ├── layout.tsx         # Root layout with SEO
│   └── page.tsx           # Home page
├── components/            # Reusable React components
├── lib/                   # Utility functions and helpers
│   └── seo.ts            # SEO utilities and schema generators
├── public/               # Static assets
│   ├── jj_green_logo.png
│   ├── jj_white_logo.png
│   └── favicon files
└── types/                # TypeScript type definitions
```

## Color System

The project uses CSS variables for consistent theming:

### Brand Colors
- **Primary**: `#7A9E3E` (Olive/Moss Green)
- **Primary Light**: `#C5D93D` (Lime/Yellow-Green)
- **Dark**: `#000000` (Black)
- **Light**: `#FFFFFF` (White)

### Usage
```tsx
// In Tailwind classes
<button className="bg-[rgb(var(--color-action-primary))]">
  Click me
</button>

// Pre-built component classes
<button className="btn btn-primary">
  Click me
</button>
```

## SEO Configuration

The project includes comprehensive SEO setup:

- Metadata configuration in `app/config/metadata.ts`
- Dynamic metadata generation in `lib/seo.ts`
- JSON-LD structured data support
- Open Graph and Twitter Card optimization
- Sitemap and robots.txt

## Development Guidelines

### Adding New Pages

1. Create page in `app/` directory
2. Import and use `generateMetadata()` for SEO
3. Follow color variable conventions

### Component Development

- Use TypeScript for type safety
- Follow naming conventions
- Utilize pre-built CSS classes from globals.css
- Use Lucide React for icons

## Building for Production

```bash
npm run build
npm run start
```

## Deployment

This project is optimized for deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

Proprietary - JJ Clothing

## Support

For support, contact the development team.
