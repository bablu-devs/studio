import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 md:px-6">
          <div className="prose prose-invert max-w-4xl mx-auto">
            <h1 className="font-headline text-6xl tracking-widest sm:text-7xl text-primary">Privacy Policy</h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80">
              Your privacy is important to us. It is Bablu Devs' policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate. This policy is effective as of January 1, 2024.
            </p>

            <h2 className="mt-12 font-headline text-4xl tracking-widest text-primary">1. Information We Collect</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. The only personal information we collect is what you provide to us through our contact form: your name and email address.
            </p>

            <h2 className="mt-12 font-headline text-4xl tracking-widest text-primary">2. How We Use Information</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification. We use the information you provide solely to respond to your inquiries.
            </p>

            <h2 className="mt-12 font-headline text-4xl tracking-widest text-primary">3. Sharing Information</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              We don’t share any personally identifying information publicly or with third-parties, except when required to by law. Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
            </p>
            
            <h2 className="mt-12 font-headline text-4xl tracking-widest text-primary">Contact Us</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              If you have any questions about how we handle user data and personal information, feel free to contact us.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
