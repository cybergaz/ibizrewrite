"use server"

import { z } from "zod"
import { sendContactEmail, type ContactFormData } from './email';

// Form validation schema
const ContactFormSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    countryCode: z.string(),
    phone: z.string().min(1, "Phone number is required"),
    message: z.string().min(1, "Message is required").max(120, "Message is too long"),
})

// Use the imported ContactFormData type
export { ContactFormData };

export async function submitContactForm(data: ContactFormData) {
    try {
        const result = await sendContactEmail(data);
        return result;
    } catch (error) {
        console.error('Error in submitContactForm:', error);
        return {
            success: false,
            message: 'An unexpected error occurred. Please try again later.',
        };
    }
}


