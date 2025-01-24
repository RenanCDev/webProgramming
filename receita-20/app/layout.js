import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-800 text-gray-100 shadow-md">
          <ul className="flex gap-6 p-4 justify-center">
            <li className="hover:text-blue-400">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link href="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}

