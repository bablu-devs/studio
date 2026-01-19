import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Privacy Policy</h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            Your privacy is important to us. It is Bablu Devs' policy to respect your privacy regarding any information we may collect from you across our website.
          </p>

          <h2 className="mt-10 text-2xl font-bold tracking-tight text-primary">1. Information we collect</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            We only collect information about you if we have a reason to do so—for example, to provide our services, to communicate with you, or to make our services better. We collect this information from three sources: if and when you provide information to us, automatically through operating our services, and from outside sources.
          </p>

          <h2 className="mt-10 text-2xl font-bold tracking-tight text-primary">2. How we use information</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            We use information about you as mentioned above and for the purposes listed below:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-lg text-foreground/80">
            <li>To provide our services—for example, to set up and maintain your account, or to process payments and orders.</li>
            <li>To further develop and improve our services—for example by adding new features that we think our users will enjoy.</li>
            <li>To monitor and analyze trends and better understand how users interact with our services, which helps us improve our services and make them easier to use.</li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold tracking-tight text-primary">3. Sharing information</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            We do not share your personal information with any third parties, except as described in this Privacy Policy or in connection with providing the services.
          </p>
          
          <h2 className="mt-10 text-2xl font-bold tracking-tight text-primary">Contact Us</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
