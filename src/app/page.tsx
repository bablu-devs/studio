import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ContactInfo from '@/components/ContactInfo';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Clients />
        <ContactInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
