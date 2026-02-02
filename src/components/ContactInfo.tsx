import { Mail, Phone } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

export default function ContactInfo() {
  return (
    <section id="contact-info">
        <div className="container mx-auto px-4 md:px-6">
            <div className="mb-16 text-center">
                <h2 className="font-headline text-5xl tracking-widest md:text-6xl">
                    Contact Information
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/70 md:text-xl">
                    Feel free to reach out to me through phone or email.
                </p>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
                 <Card className="group relative transform overflow-hidden rounded-2xl border border-white/10 bg-card/80 p-2 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_20px_theme(colors.primary/20)]">
                    <CardHeader className="items-center">
                        <div className="mb-4 rounded-full bg-primary/10 p-4 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:bg-primary/20">
                            <Phone className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="font-headline text-xl font-bold">Phone</CardTitle>
                        <CardDescription className="mt-2 text-foreground/60">
                            <a href="tel:+916206168057" className="transition-colors hover:text-primary">+91 6206168057</a>
                        </CardDescription>
                    </CardHeader>
                </Card>
                 <Card className="group relative transform overflow-hidden rounded-2xl border border-white/10 bg-card/80 p-2 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_20px_theme(colors.primary/20)]">
                    <CardHeader className="items-center">
                         <div className="mb-4 rounded-full bg-primary/10 p-4 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:bg-primary/20">
                            <Mail className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="font-headline text-xl font-bold">Email</CardTitle>
                        <CardDescription className="mt-2 text-foreground/60">
                            <a href="mailto:bablubabu564@gmail.com" className="transition-colors hover:text-primary">bablubabu564@gmail.com</a>
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
    </section>
  );
}
