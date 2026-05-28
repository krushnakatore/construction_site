import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { metadata as siteMetadata } from '../data/content';

export const metadata = {
  ...siteMetadata,
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
