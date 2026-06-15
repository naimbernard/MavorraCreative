import './globals.css';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mavorracreative.com'),
  title: {
    default: 'Mavorra Creative | Premium Marketing, Branding, Websites & Campaigns',
    template: '%s | Mavorra Creative'
  },
  description:
    'Mavorra Creative is a premium marketing company for ambitious brands and small businesses. We create branding, websites, campaign visuals, adverts, content and Marketing Buffet packages built to be noticed and remembered.',
  keywords: [
    'Mavorra Creative',
    'premium marketing company',
    'creative marketing agency',
    'branding agency',
    'website design',
    'social media content',
    'advert design',
    'marketing strategy',
    'Marketing Buffet',
    'à la carte marketing',
    'government communication design',
    'India marketing agency',
    'Ghana marketing agency',
    'UK marketing agency'
  ],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Mavorra Creative | Built to be noticed. Designed to be remembered.',
    description:
      'Premium à la carte marketing and affordable Marketing Buffet packages for brands that need trust, clarity and demand.',
    url: '/',
    siteName: 'Mavorra Creative',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mavorra Creative logo'
      }
    ],
    locale: 'en_GB',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mavorra Creative | Premium Marketing Company',
    description:
      'Branding, websites, adverts, content and campaign visuals built to make businesses easier to trust, remember and choose.',
    images: ['/logo.png']
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Mavorra Creative',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mavorracreative.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://mavorracreative.com'}/logo.png`,
    slogan: 'Built to be noticed. Designed to be remembered.',
    description:
      'Premium marketing, branding, websites, campaign visuals, adverts, content and Marketing Buffet packages for ambitious brands and small businesses.',
    areaServed: ['India', 'Ghana', 'United Kingdom'],
    sameAs: [
      'https://www.instagram.com/mavorracreative',
      'https://www.facebook.com/share/1Y4aCrn8jT/'
    ],
    serviceType: [
      'Branding',
      'Website design',
      'Campaign visuals',
      'Advert design',
      'Social media content',
      'Marketing strategy',
      'Monthly marketing packages'
    ]
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
