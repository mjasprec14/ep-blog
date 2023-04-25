import { Header, SocialMedia } from '@/src/components';
import '../globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Manny Piñol',
  description: 'Emmanuel Piñol Blogs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} relative`}>
        <Header />
        <SocialMedia />
        {children}
      </body>
    </html>
  );
}
