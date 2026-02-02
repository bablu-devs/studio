import Link from 'next/link';
import { Github, Instagram, Facebook, Twitter, CodeXml } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <CodeXml className="h-5 w-5 text-primary" />
          <p className="text-sm text-foreground/60">
            &copy; {year} Bablu Devs. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium text-foreground/60 sm:gap-6">
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
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" className="text-foreground/60 transition-colors hover:text-primary hover:bg-primary/10">
            <Link href="https://github.com/bablu-devs" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-foreground/60 transition-colors hover:text-primary hover:bg-primary/10">
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-foreground/60 transition-colors hover:text-primary hover:bg-primary/10">
            <Link href="https://x.com" target="_blank" aria-label="X / Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-foreground/60 transition-colors hover:text-primary hover:bg-primary/10">
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
