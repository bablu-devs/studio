'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/#services' },
  { name: 'Clients', href: '/#clients' },
  { name: 'Contact', href: '/#contact' },
  { name: 'About', href: '/about' },
];

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'border-b border-white/10 bg-background/80 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Code2 className="h-7 w-7 text-primary" />
          <span className="font-bold text-lg">Bablu Devs</span>
        </Link>
        
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium text-foreground/60 transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="rounded-full font-bold bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground transition-opacity hover:opacity-90">
            <Link href="/#contact">Let's Talk</Link>
          </Button>
        </nav>

        {isMounted && (
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary/10">
                <Menu className="h-5 w-5 text-primary" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/90 backdrop-blur-xl">
              <SheetHeader>
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  A list of navigation links for the site.
                </SheetDescription>
              </SheetHeader>
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setSheetOpen(false)}
              >
                <Code2 className="h-6 w-6 text-primary" />
                <span className="ml-2 font-bold">Bablu Devs</span>
              </Link>
              <div className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setSheetOpen(false)}
                    className="rounded-md p-2 text-lg font-medium hover:bg-accent hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
}
