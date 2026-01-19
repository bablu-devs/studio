'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function sendContactMessage(data: z.infer<typeof contactSchema>) {
    const validatedData = contactSchema.parse(data);
    
    // In a real app, you would integrate with an email service or save to a database.
    console.log("Received contact message:", validatedData);
    
    // Simulate a potential error for demonstration purposes.
    if (validatedData.name.toLowerCase() === 'error') {
        throw new Error("Failed to send message.");
    }
    
    return { success: true, message: "Message sent successfully!" };
}
