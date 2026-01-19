import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profilePicture');

  return (
    <section id="home" className="relative w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center">
            <div className="relative h-48 w-48 md:h-64 md:w-64">
              {profileImage && (
                <Image
                  src={profileImage.imageUrl}
                  alt={profileImage.description}
                  width={256}
                  height={256}
                  className="rounded-full object-cover shadow-2xl ring-4 ring-primary/20"
                  data-ai-hint={profileImage.imageHint}
                  priority
                />
              )}
              <div className="absolute -bottom-4 -right-4 rounded-full bg-primary p-3 text-primary-foreground shadow-lg">
                <div className="origin-[70%_70%] animate-wave text-4xl">👋</div>
              </div>
            </div>
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              MD.BABLU
            </h1>
            <h2 className="text-xl font-medium text-primary md:text-2xl">
              Flutter Web Developer | <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Vibe Coder</span>
            </h2>
            <p className="mx-auto max-w-[600px] text-foreground/80 md:mx-0 md:text-xl/relaxed">
              Building modern, secure & scalable Flutter websites.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="#services">
                  My Services <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
