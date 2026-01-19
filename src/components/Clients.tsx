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
    <section id="clients" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Who I Build For
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl/relaxed">
            I partner with a diverse range of clients to help them achieve their goals.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {clientTypes.map((client, index) => (
            <Card key={index} className="group overflow-hidden rounded-lg border-2 border-transparent text-center transition-all duration-300 hover:border-primary hover:shadow-2xl">
              <CardHeader className="items-center p-8">
                <div className="mb-4 rounded-full bg-accent p-5 transition-transform duration-300 group-hover:scale-110">
                  {client.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{client.title}</CardTitle>
                <CardDescription className="mt-2 text-foreground/70">{client.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
