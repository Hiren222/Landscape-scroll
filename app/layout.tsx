import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Landscaping Company | Professional Landscaping in Austin, TX',
  description: 'Transforming Outdoor Spaces, One Garden at a Time. Lawn care, garden design, hardscaping, and landscaping services in Austin, Texas.',
  openGraph: {
    title: 'Landscaping Company | Professional Landscaping in Austin, TX',
    description: 'Transforming Outdoor Spaces, One Garden at a Time. Lawn care, garden design, hardscaping, and landscaping services in Austin, Texas.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landscaping Company | Austin, Texas',
    description: 'Transforming Outdoor Spaces, One Garden at a Time.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
