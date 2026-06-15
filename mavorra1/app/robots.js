export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mavorracreative.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
