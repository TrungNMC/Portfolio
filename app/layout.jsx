import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

// components
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StairTrasition from '@/components/StairTrasition';
import { Toaster } from '@/components/ui/toaster';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio by TrungNMC',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={jetbrainsMono.className}>
        <Header />
        <StairTrasition />
        <PageTransition>{children}</PageTransition>
        <Toaster />
      </body>
    </html>
  );
}
