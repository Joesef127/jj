import type { Metadata, Viewport } from 'next';

export const siteConfig = {
  name: 'J&J Clothing',
  description: 'Discover stylish and affordable clothing at J&J Clothing. Shop the latest trends in men\'s, women\'s, and kids\' fashion. Quality apparel for every occasion.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://jjclothing.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/jjclothing',
    instagram: 'https://instagram.com/jjclothing',
    facebook: 'https://facebook.com/jjclothing',
  },
  keywords: [
    'clothing',
    'fashion',
    'ecommerce',
    'online shopping',
    'men\'s clothing',
    'women\'s clothing',
    'kids clothing',
    'apparel',
    'style',
    'trendy fashion',
    'affordable clothing',
    'J&J Clothing'
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: 'J&J Clothing',
      url: siteConfig.url,
    },
  ],
  creator: 'J&J Clothing',
  publisher: 'J&J Clothing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@jjclothing',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};
