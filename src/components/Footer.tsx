import Link from 'next/link';
import { Github, Linkedin, Dribbble, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Code2 className="h-5 w-5 text-primary" />
          <p className="text-sm text-foreground/80">
            &copy; {year} Bablu Devs. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon">
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5 text-foreground/60 transition-colors hover:text-foreground" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-foreground/60 transition-colors hover:text-foreground" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href="https://dribbble.com" target="_blank" aria-label="Dribbble">
              <Dribbble className="h-5 w-5 text-foreground/60 transition-colors hover:text-foreground" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
