import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 md:px-6">
          <div className="prose prose-invert max-w-4xl mx-auto">
            <h1 className="font-headline text-5xl font-extrabold uppercase tracking-wider sm:text-6xl text-primary">About Me</h1>
            <p className="mt-6 text-xl leading-8 text-foreground/80">
              I am a passionate Flutter Web Developer dedicated to building modern, secure, and scalable websites. With a keen eye for design and a commitment to clean code, I help businesses and individuals bring their digital visions to life.
            </p>
            <p className="mt-6 text-xl leading-8 text-foreground/80">
              My journey into web development started with a fascination for how technology can solve real-world problems. I specialize in creating high-performance web applications using Flutter, ensuring a seamless user experience across all devices. Whether it's a sleek admin dashboard, a dynamic e-commerce site, or a secure user authentication system, I thrive on tackling challenges and delivering results.
            </p>
            <h2 className="mt-16 font-headline text-4xl font-extrabold uppercase tracking-wider text-primary">My Philosophy</h2>
            <p className="mt-6 text-xl leading-8 text-foreground/80">
              I believe in a "Vibe Coder" philosophy—coding with passion, creativity, and a positive mindset. This approach allows me to not only write effective code but also to build strong, collaborative relationships with my clients. I am committed to understanding your unique needs and delivering a product that exceeds your expectations.
            </p>
            <p className="mt-6 text-xl leading-8 text-foreground/80">
              From initial concept to final deployment and ongoing maintenance, I provide a comprehensive suite of services to ensure your project's success. Thank you for visiting my portfolio. I look forward to the possibility of working together and creating something amazing.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
