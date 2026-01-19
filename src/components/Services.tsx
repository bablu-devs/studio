import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  AppWindow, 
  LayoutTemplate, 
  LayoutDashboard, 
  ShieldCheck, 
  DatabaseZap, 
  Rocket, 
  Wrench 
} from 'lucide-react';

const services = [
  {
    icon: <AppWindow className="h-8 w-8 text-primary" />,
    title: 'Flutter Web Development',
    description: 'Crafting high-performance, responsive websites with Flutter.',
  },
  {
    icon: <LayoutTemplate className="h-8 w-8 text-primary" />,
    title: 'Modern UI (Static & Dynamic)',
    description: 'Designing beautiful and intuitive user interfaces that users love.',
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
    title: 'Admin Dashboard',
    description: 'Building powerful and easy-to-use admin panels for your applications.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Secure Login & Authentication',
    description: 'Implementing robust and secure user authentication systems.',
  },
  {
    icon: <DatabaseZap className="h-8 w-8 text-primary" />,
    title: 'Backend Integration',
    description: 'Connecting your frontend to Firebase or any custom APIs seamlessly.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: 'Fast & Future-Proof',
    description: 'Developing with scalability and performance in mind for long-term success.',
  },
  {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: 'Full Maintenance Support',
    description: 'Providing ongoing support and maintenance to keep your site running smoothly.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-accent/50 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Services I Offer
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl/relaxed">
            A comprehensive suite of services to bring your digital vision to life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="flex h-full transform flex-col justify-start text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
