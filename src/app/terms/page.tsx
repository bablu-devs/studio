import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Terms of Service</h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            By accessing this website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>

          <h2 className="mt-10 text-2xl font-bold tracking-tight text-primary">1. Use License</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            Permission is granted to temporarily download one copy of the materials (information or software) on Bablu Devs' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-lg text-foreground/80">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on Bablu Devs' website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold tracking-tight text-primary">2. Disclaimer</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            The materials on Bablu Devs' website are provided on an 'as is' basis. Bablu Devs makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="mt-10 text-2xl font-bold tracking-tight text-primary">3. Limitations</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            In no event shall Bablu Devs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Bablu Devs' website, even if Bablu Devs or a Bablu Devs authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2 className="mt-10 text-2xl font-bold tracking-tight text-primary">4. Governing Law</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
