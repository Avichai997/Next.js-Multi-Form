import { Inter } from 'next/font/google';
import './styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Multi-Step Form',
  description: 'A simple multi-step form built with Next.js and SCSS modules.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='app-container'>{children}</div>
      </body>
    </html>
  );
}
