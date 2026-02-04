import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from '@/firebase';
import Starfield from '@/components/Starfield';

export const metadata: Metadata = {
  title: 'Bablu Devs | Flutter Web Developer',
  description: 'Bablu Devs is a professional Flutter web development service offering modern, responsive, and scalable websites for schools, coaching centers, small businesses, and startups across India.',
  keywords: ['Bablu Devs', 'Flutter web developer', 'Flutter website development', 'web developer India', 'coaching website development', 'school website developer', 'startup web development', 'responsive Flutter websites', 'modern web design', 'small business website', 'Flutter web services'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffc800" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
        <meta name="theme-color" content="#ffc800" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=VT323&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <Starfield />
        <FirebaseClientProvider>
          {children}
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
