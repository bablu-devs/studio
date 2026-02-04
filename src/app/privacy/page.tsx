import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 md:px-6">
          <div className="prose prose-invert max-w-4xl mx-auto">
            <h1 className="font-headline text-6xl tracking-widest sm:text-7xl text-primary">Privacy Policy for Bablu Devs</h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80">
              Effective Date: January 2026
            </p>
            <p className="mt-6 text-lg leading-8 text-foreground/80">
              At Bablu Devs, your privacy is a priority. This Privacy Policy outlines what information I collect, how it is used, and how it is protected when you visit or interact with this website.
            </p>

            <h2 className="mt-12 font-headline text-4xl tracking-widest text-primary">1. Information I Collect</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              I may collect personal information that you voluntarily provide, including:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-lg text-foreground/80">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Messages or project details</li>
            </ul>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              This information is collected only if you choose to submit it via the contact form.
            </p>

            <h2 className="mt-12 font-headline text-4xl tracking-widest text-primary">2. How Your Information Is Used</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              Your information may be used for the following purposes:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-lg text-foreground/80">
              <li>To respond to your inquiries and messages</li>
              <li>To understand your project needs and provide services</li>
              <li>To send important updates or notifications</li>
              <li>To improve website functionality and user experience</li>
            </ul>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              Your data will never be sold, shared, or rented to third parties for marketing without your consent.
            </p>

            <h2 className="mt-12 font-headline text-4xl tracking-widest text-primary">3. Cookies &amp; Tracking</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              This website may use cookies or similar technologies to enhance your browsing experience. Cookies help remember your preferences and improve site performance.
            </p>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              You can disable cookies through your browser settings, but this may affect some features of the site.
            </p>

            <h2 className="mt-12 font-headline text-4xl tracking-widest text-primary">4. Data Security</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              I implement reasonable technical and administrative safeguards to help protect your data from unauthorized access or misuse. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="mt-12 font-headline text-4xl tracking-widest text-primary">5. Third-Party Links</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              This site may contain links to external websites. I am not responsible for the privacy policies or content of third-party sites. Visit those websites at your own risk.
            </p>
            
            <h2 className="mt-12 font-headline text-4xl tracking-widest text-primary">6. Changes to This Policy</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              I may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
            </p>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              By using this website, you agree to the terms of this Privacy Policy.
            </p>
            
            <h2 className="mt-12 font-headline text-4xl tracking-widest text-primary">Contact for Privacy Questions:</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              ✉️ bablubabu564@gmail.com
            </p>
            <p className="mt-12 text-center text-sm text-foreground/60">
                © 2026 Bablu Devs. All rights reserved.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
