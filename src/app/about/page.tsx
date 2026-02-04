import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 md:px-6">
          <div className="prose prose-invert max-w-4xl mx-auto">
            <h1 className="font-headline text-6xl tracking-widest sm:text-7xl text-primary text-center">About Bablu Devs</h1>
            <p className="mt-8 text-xl text-center leading-8 text-foreground/80">
              Welcome to Bablu Devs — where innovation meets precision in Flutter Web Development.
            </p>
            <p className="mt-6 text-lg leading-8 text-foreground/70">
              At Bablu Devs, I specialize in creating modern, responsive, and efficient Flutter websites tailored to meet the unique needs of individuals, businesses, and organizations. My goal is to help you build an impactful online presence that engages your audience and grows your digital footprint.
            </p>
            <p className="mt-4 text-lg leading-8 text-foreground/70">
              With a deep passion for clean design, smooth performance, and user-friendly interfaces, each project is crafted with care, expertise, and attention to detail.
            </p>

            <h2 className="mt-16 font-headline text-5xl tracking-widest text-primary">What I Offer</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-lg not-prose">
                <div className="rounded-lg border border-white/10 p-6 bg-card/50">
                    <h3 className="font-bold text-primary">Custom Flutter Websites</h3>
                    <p className="text-foreground/80 mt-2">Built for speed, scalability, and seamless performance.</p>
                </div>
                <div className="rounded-lg border border-white/10 p-6 bg-card/50">
                    <h3 className="font-bold text-primary">Responsive Designs</h3>
                    <p className="text-foreground/80 mt-2">Optimized for all devices (mobile, tablet, desktop).</p>
                </div>
                <div className="rounded-lg border border-white/10 p-6 bg-card/50">
                    <h3 className="font-bold text-primary">Business Solutions</h3>
                    <p className="text-foreground/80 mt-2">Digital platforms to support small businesses &amp; startups.</p>
                </div>
                <div className="rounded-lg border border-white/10 p-6 bg-card/50">
                    <h3 className="font-bold text-primary">Startup Tools</h3>
                    <p className="text-foreground/80 mt-2">MVPs and project-ready web applications.</p>
                </div>
            </div>
            
            <h2 className="mt-16 font-headline text-5xl tracking-widest text-primary">Why Choose Bablu Devs</h2>
             <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-lg not-prose">
                <div className="rounded-lg border border-white/10 p-6 bg-card/50">
                    <h3 className="font-bold text-primary">Personalized & Professional Service</h3>
                    <p className="text-foreground/80 mt-2">Client-first communication and support.</p>
                </div>
                <div className="rounded-lg border border-white/10 p-6 bg-card/50">
                    <h3 className="font-bold text-primary">On-Time Project Delivery</h3>
                    <p className="text-foreground/80 mt-2">With clean, secure, and maintainable code.</p>
                </div>
            </div>

            <h2 className="mt-16 font-headline text-5xl tracking-widest text-primary">Mission</h2>
            <blockquote className="mt-6 text-xl italic text-center leading-8 text-foreground/80 border-l-4 border-primary/50 pl-4">
              To empower clients with affordable, reliable, and high-performance digital solutions that help them succeed online.
            </blockquote>

            <div className="mt-16 text-center border-t border-white/10 pt-8">
              <h2 className="font-headline text-4xl tracking-widest text-primary">Contact</h2>
              <p className="mt-4 text-lg leading-8 text-foreground/80">
                📞 <a href="tel:+916206168057" className="hover:text-primary">+91 6206168057</a><br/>
                ✉️ <a href="mailto:bablubabu564@gmail.com" className="hover:text-primary">bablubabu564@gmail.com</a>
              </p>
              <p className="mt-8 text-sm text-foreground/60">
                  © 2026 Bablu Devs. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
