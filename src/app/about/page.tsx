import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">About Bablu Devs</h1>
          <p className="mt-6 text-xl leading-8 text-foreground/80">
            Welcome to the digital home of Bablu Devs. I am a passionate Flutter Web Developer dedicated to building modern, secure, and scalable websites. With a keen eye for design and a commitment to clean code, I help businesses and individuals bring their digital visions to life.
          </p>
          <p className="mt-6 text-xl leading-8 text-foreground/80">
            My journey into web development started with a fascination for how technology can solve real-world problems. I specialize in creating high-performance web applications using Flutter, ensuring a seamless user experience across all devices. Whether it's a sleek admin dashboard, a dynamic e-commerce site, or a secure user authentication system, I thrive on tackling challenges and delivering results.
          </p>
          <h2 className="mt-16 text-3xl font-bold tracking-tight text-primary">My Philosophy</h2>
          <p className="mt-6 text-xl leading-8 text-foreground/80">
            I believe in a "Vibe Coder" philosophy—coding with passion, creativity, and a positive mindset. This approach allows me to not only write effective code but also to build strong, collaborative relationships with my clients. I am committed to understanding your unique needs and delivering a product that exceeds your expectations.
          </p>
          <p className="mt-6 text-xl leading-8 text-foreground/80">
            Thank you for visiting my portfolio. I look forward to the possibility of working together and creating something amazing.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
