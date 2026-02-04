import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 md:px-6">
          <div className="prose prose-invert max-w-4xl mx-auto">
            <h1 className="font-headline text-6xl tracking-widest sm:text-7xl text-primary">Terms &amp; Conditions for Bablu Devs</h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80">
              Last Updated: January 2026
            </p>
            <p className="mt-6 text-lg leading-8 text-foreground/80">
              Please read these Terms &amp; Conditions (“Terms”) carefully before using this website operated by Bablu Devs.
            </p>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              By accessing or using this website, you agree to be bound by these Terms. If you do not agree with any part of these terms, please do not use this website.
            </p>

            <h2 className="mt-12 font-headline text-4xl tracking-widest text-primary">1. Website Use</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              You agree to use this website for lawful purposes and in a way that does not infringe on the rights of others or restrict their use of the site.
            </p>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              You will not use this site to:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-lg text-foreground/80">
              <li>Upload or distribute harmful, offensive, or illegal content</li>
              <li>Attempt unauthorized access or disrupt website functions</li>
            </ul>

            <h2 className="mt-12 font-headline text-4xl tracking-widest text-primary">2. Intellectual Property</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              All content on this website, including text, graphics, logos, designs, and images, is the exclusive property of Bablu Devs unless otherwise stated.
            </p>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              No content may be copied, reproduced, republished, or redistributed without written permission from Bablu Devs.
            </p>

            <h2 className="mt-12 font-headline text-4xl tracking-widest text-primary">3. User Submissions</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              When you submit messages or personal details through the contact form, you consent to receive communication regarding your inquiry. You guarantee that any information you provide is accurate and lawful.
            </p>

            <h2 className="mt-12 font-headline text-4xl tracking-widest text-primary">4. Disclaimer</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              This website and its content are provided “as is” without warranties of any kind, either express or implied. Bablu Devs does not guarantee that the site will be error-free or uninterrupted.
            </p>

            <h2 className="mt-12 font-headline text-4xl tracking-widest text-primary">5. Limitation of Liability</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              In no event shall Bablu Devs be liable for any damages arising from your use of the website, including indirect, incidental, or consequential damages.
            </p>

            <h2 className="mt-12 font-headline text-4xl tracking-widest text-primary">6. Termination</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              Bablu Devs reserves the right to terminate or restrict your access to this website at any time, without notice, for any violation of these Terms.
            </p>
            
            <h2 className="mt-12 font-headline text-4xl tracking-widest text-primary">7. Changes to Terms</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              Bablu Devs may modify these Terms at any time. Continued use of the site indicates acceptance of the updated terms.
            </p>

            <h2 className="mt-12 font-headline text-4xl tracking-widest text-primary">8. Governing Law</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              These Terms shall be governed by the laws of India.
            </p>

            <h2 className="mt-12 font-headline text-4xl tracking-widest text-primary">Contact Information:</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/80">
              📞 +91 6206168057<br />
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
