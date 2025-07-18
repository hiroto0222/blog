'use client';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MainNav() {
  const pathName = usePathname();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      <Link
        href="/blog"
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathName === '/blog' ? 'text-foreground' : 'text-foreground/60',
        )}
      >
        Blog
      </Link>
      <Link
        href="/about"
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathName === '/about' ? 'text-foreground' : 'text-foreground/60',
        )}
      >
        About
      </Link>
    </nav>
  );
}
