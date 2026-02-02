import { Mail, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function ContactInfo() {
  return (
    <section id="contact-info" className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center animate-in fade-in slide-in-from-bottom-8 duration-700 ease-in-out">
          <h2 className="font-headline text-5xl tracking-widest md:text-6xl">
            Contact Information
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70 md:text-xl">
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </div>
        <Card className="mx-auto max-w-3xl border-white/10 bg-card/80 p-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-12 duration-700 ease-in-out">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-primary-foreground">
                <Phone className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold">Phone</h3>
                <a href="tel:+916206168057" className="text-sm text-foreground/80 transition-colors hover:text-primary">
                  +91 6206168057
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-primary-foreground">
                <Mail className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold">Email</h3>
                <a href="mailto:bablubabu564@gmail.com" className="text-sm text-foreground/80 transition-colors hover:text-primary">
                  bablubabu564@gmail.com
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
