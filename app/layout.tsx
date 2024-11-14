import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shubham Das | Product Manager',
  description: 'Product Manager specializing in AI and Finance products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Background Overlay for contrast */}
          <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/50 via-black/40 to-black/20 pointer-events-none"></div>
          
          <div className="flex min-h-screen flex-col items-center mx-auto max-w-7xl px-4 relative z-10">
            <Navigation />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
