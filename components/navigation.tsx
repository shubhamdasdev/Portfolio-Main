'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Navigation() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  const routes = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full px-8 py-6">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tight text-white"
        >
          SD
        </Link>

        <nav className="flex items-center space-x-12">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'relative text-sm transition-colors',
                pathname === route.href
                  ? 'text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-white'
                  : 'text-neutral-400 hover:text-white'
              )}
            >
              {route.label}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-4 h-10 w-10 rounded-full text-white"
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}