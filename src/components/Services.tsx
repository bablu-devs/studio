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
    title: 'Modern UI',
    description: 'Designing beautiful and intuitive user interfaces that users love.',
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
    title: 'Admin Dashboard',
    description: 'Building powerful and easy-to-use admin panels for your applications.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Secure Authentication',
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
    title: 'Maintenance Support',
    description: 'Providing ongoing support to keep your site running smoothly.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-5xl tracking-widest md:text-6xl">
            Services I Offer
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/70 md:text-xl">
            A comprehensive suite of services to bring your digital vision to life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="group relative flex h-full transform flex-col justify-start overflow-hidden rounded-2xl border border-white/10 bg-card/80 p-2 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_20px_theme(colors.primary/20)] animate-in fade-in slide-in-from-bottom-8" style={{ animationDelay: `${index * 100}ms`}}>
              <CardHeader className="items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:bg-primary/20">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="mt-2 text-foreground/60">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
