import { Mail, Phone } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section id="contact-info" className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-card/50 p-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-8 duration-700 ease-in-out">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 md:text-left">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-primary-foreground">
                <Phone className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold">Phone</h3>
                <a href="tel:+916206168057" className="text-lg text-foreground/80 transition-colors hover:text-primary">
                  +91 6206168057
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 border-t border-white/10 pt-8 md:flex-row md:border-t-0 md:border-l md:pl-8 md:pt-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-primary-foreground">
                <Mail className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold">Email</h3>
                <a href="mailto:bablubabu564@gmail.com" className="text-lg text-foreground/80 transition-colors hover:text-primary">
                  bablubabu564@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
