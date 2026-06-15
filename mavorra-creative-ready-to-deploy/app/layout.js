import './globals.css';

export const metadata = {
  title: 'Mavorra Creative',
  description: 'Premium à la carte marketing and Marketing Buffet packages for brands that need to be noticed and remembered.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
