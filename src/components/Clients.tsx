import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { School, Presentation, Store, Lightbulb } from 'lucide-react';

const clientTypes = [
  {
    icon: <School className="h-10 w-10 text-primary" />,
    title: 'Schools',
    description: 'Digital solutions for educational institutions.',
  },
  {
    icon: <Presentation className="h-10 w-10 text-primary" />,
    title: 'Coachings',
    description: 'Websites and platforms for coaching centers.',
  },
  {
    icon: <Store className="h-10 w-10 text-primary" />,
    title: 'Small Businesses',
    description: 'Establishing a strong online presence for local businesses.',
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: 'Startups',
    description: 'Building MVPs and scalable web apps for new ventures.',
  },
];

export default function Clients() {
  return (
    <section id="clients">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl font-extrabold uppercase tracking-wider md:text-5xl">
            Who I Build For
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/70 md:text-xl">
            I partner with a diverse range of clients to help them achieve their goals.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {clientTypes.map((client, index) => (
            <Card key={index} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/80 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_theme(colors.primary/20)] animate-in fade-in slide-in-from-bottom-8" style={{ animationDelay: `${index * 150}ms`}}>
              <CardHeader className="items-center p-8">
                <div className="mb-5 rounded-full bg-accent p-5 transition-transform duration-500 ease-in-out group-hover:scale-110">
                  {client.icon}
                </div>
                <CardTitle className="font-headline text-2xl font-bold">{client.title}</CardTitle>
                <CardDescription className="mt-2 text-foreground/60">{client.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
