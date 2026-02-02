import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
  canonicalUrl?: string;
}

/**
 * Generate metadata for individual pages
 * @param props - SEO configuration options
 * @returns Metadata object for Next.js
 */
export function generateMetadata({
  title,
  description,
  image = '/og-image.jpg',
  keywords = [],
  noIndex = false,
  canonicalUrl,
}: SEOProps = {}): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jjclothing.com';
  const fullTitle = title ? `${title} | J&J Clothing` : 'J&J Clothing';
  const fullDescription = description || 'Discover stylish and affordable clothing at J&J Clothing.';

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: canonicalUrl || siteUrl,
      siteName: 'J&J Clothing',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [image],
      creator: '@jjclothing',
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
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
  };
}

/**
 * JSON-LD structured data generators
 */

export interface OrganizationSchema {
  name: string;
  url: string;
  logo: string;
  sameAs?: string[];
}

export function generateOrganizationSchema({
  name = 'J&J Clothing',
  url = 'https://jjclothing.com',
  logo = '/logo-color.png',
  sameAs = [
    'https://twitter.com/jjclothing',
    'https://instagram.com/jjclothing',
    'https://facebook.com/jjclothing',
  ],
}: Partial<OrganizationSchema> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo: `${url}${logo}`,
    sameAs,
  };
}

export interface ProductSchema {
  name: string;
  image: string[];
  description: string;
  brand: string;
  offers: {
    price: string;
    priceCurrency: string;
    availability: string;
    url: string;
  };
}

export function generateProductSchema(product: ProductSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    offers: {
      '@type': 'Offer',
      ...product.offers,
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jjclothing.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}

export function generateWebsiteSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jjclothing.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'J&J Clothing',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
