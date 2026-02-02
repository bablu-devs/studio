import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profilePicture');

  return (
    <section id="home" className="relative w-full py-32 md:py-48">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 text-center md:px-6">
        <div className="group relative mb-8">
          <div className="relative h-48 w-48 md:h-56 md:w-56">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt="Bablu Devs profile picture"
                fill
                className="rounded-full object-cover shadow-2xl transition-all duration-500 group-hover:scale-105"
                data-ai-hint={profileImage.imageHint}
                priority
                sizes="(max-width: 768px) 192px, 224px"
              />
            )}
            <div className="absolute inset-0 rounded-full ring-4 ring-primary/30 ring-offset-4 ring-offset-background transition-all duration-500 group-hover:ring-primary animate-pulse group-hover:animate-none"></div>
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-full bg-primary p-3 text-primary-foreground shadow-lg transition-transform duration-500 group-hover:scale-110">
            <div className="origin-[70%_70%] animate-wave text-4xl">👋</div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="font-headline text-6xl tracking-widest sm:text-7xl md:text-8xl lg:text-9xl">
            Bablu Devs
          </h1>
          <h2 className="text-xl font-medium text-primary md:text-2xl">
            Flutter Web Developer | <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Vibe Coder</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-foreground/70 md:text-xl">
            Building modern, secure & scalable Flutter websites.
          </p>
        </div>
        <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="rounded-full font-bold bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground transition-opacity hover:opacity-90">
            <Link href="#contact">Get In Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 bg-transparent text-foreground/80 hover:bg-white/10 hover:text-white">
            <Link href="#services">
              My Services <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
