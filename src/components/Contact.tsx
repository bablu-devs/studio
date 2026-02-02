'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from './ui/card';
import { useFirebase, FirestorePermissionError, errorEmitter } from '@/firebase';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const { firestore } = useFirebase();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    if (!firestore) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'Firebase is not available. Please try again later.',
      });
      return;
    }

    try {
      const messagesCollection = collection(firestore, 'messages');
      addDoc(messagesCollection, {
        ...data,
        sentAt: serverTimestamp(),
      }).catch(error => {
        console.error(error);
        const contextualError = new FirestorePermissionError({
          path: 'messages',
          operation: 'create',
          requestResourceData: data,
        });
        errorEmitter.emit('permission-error', contextualError);
        
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem sending your message. Please try again.',
        });
      });

      toast({
        title: 'Message Sent! 🚀',
        description: "Thanks for reaching out. I'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
        console.error('Unexpected error during form submission setup:', error);
        toast({
          variant: 'destructive',
          title: 'Uh oh! An unexpected error occurred.',
          description: 'Please try again later.',
        });
    }
  };

  return (
    <section id="contact" className="bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-5xl tracking-widest md:text-6xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/70 md:text-xl">
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>
        <Card className="mx-auto max-w-4xl border-white/10 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Amit Kumar" {...field} className="bg-input/50 focus:bg-input" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="amit.kumar@example.com" {...field} className="bg-input/50 focus:bg-input" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Your Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell me about your project..." {...field} className="min-h-[120px] bg-input/50 focus:bg-input" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-primary-foreground transition-opacity hover:opacity-90" size="lg" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? 'Sending...' : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
