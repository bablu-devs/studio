import Link from 'next/link';
import { Github, Instagram, Facebook, Twitter, CodeXml } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const year = 2026;

  return (
    <footer className="relative z-10 border-t border-white/10 bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
          {/* Legal Links */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <h3 className="font-headline text-lg font-semibold tracking-widest text-primary">Legal</h3>
            <nav className="flex flex-col gap-2 text-sm font-medium text-foreground/60">
              <Link href="/about" className="transition-colors hover:text-foreground">
                About
              </Link>
              <Link href="/privacy" className="transition-colors hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-foreground">
                Terms
              </Link>
            </nav>
          </div>

          {/* Center Logo */}
          <div className="flex order-first md:order-none flex-col items-center justify-start md:justify-center gap-2">
            <Link href="/" className="flex items-center space-x-3">
                <CodeXml className="h-7 w-7 text-primary" />
                <span className="font-bold text-lg">Bablu Devs</span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-4 md:items-end">
            <h3 className="font-headline text-lg font-semibold tracking-widest text-primary">Follow Us</h3>
            <div className="flex items-center gap-2 md:flex-col md:items-end">
              <Button asChild variant="ghost" size="icon" className="text-foreground/60 transition-colors hover:text-primary hover:bg-primary/10">
                <Link href="https://github.com/bablu-devs" target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-foreground/60 transition-colors hover:text-primary hover:bg-primary/10">
                <Link href="https://www.instagram.com/code.x.bablu?igsh=MXIxOXJnNTZ4N3M1ag==" target="_blank" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-foreground/60 transition-colors hover:text-primary hover:bg-primary/10">
                <Link href="https://x.com/bablu_56" target="_blank" aria-label="X / Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-foreground/60 transition-colors hover:text-primary hover:bg-primary/10">
                <Link href="https://www.facebook.com/profile.php?id=100042030234004" target="_blank" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center">
            <p className="text-sm text-foreground/60">
                &copy; {year} Bablu Devs. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
