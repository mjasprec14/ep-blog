import '../globals.css';
import { Inter } from 'next/font/google';
import Provider from './Provider';
import { Header, SocialMedia } from '@/src/components';

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
    <html
      lang='en'
      className='dark'
    >
      <body
        className={`${inter.className} relative dark:bg-zinc-900 dark:text-neutral-300`}
      >
        <Provider>
          <Header />
          <SocialMedia />
          {children}
        </Provider>
      </body>
    </html>
  );
}
