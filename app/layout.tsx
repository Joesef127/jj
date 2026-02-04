import type { Metadata } from 'next';
import { Inter, Archivo } from 'next/font/google';
import './globals.css';
import { metadata as siteMetadata, viewport } from './config/metadata';
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const archivo = Archivo({ 
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

export { viewport };
export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${archivo.variable}`}>
      <head>
        <link rel="icon" href="/jj_logo_green.png" type="image/png" />
        <link rel="apple-touch-icon" href="/jj_logo_green.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
