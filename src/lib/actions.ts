"use server"

import { z } from "zod"

// Form validation schema
const ContactFormSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    countryCode: z.string(),
    phone: z.string().min(1, "Phone number is required"),
    message: z.string().min(1, "Message is required").max(120, "Message is too long"),
})

export type ContactFormData = z.infer<typeof ContactFormSchema>

export async function submitContactForm(formData: ContactFormData) {
    try {
        // Validate form data
        const validatedData = ContactFormSchema.parse(formData)

        // Here you would typically:
        // 1. Save to database
        // 2. Send email notification
        // 3. Log the contact request

        console.log("Form submitted:", validatedData)

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        return { success: true, message: "Thank you for your message. We'll get back to you soon!" }
    } catch (error) {
        console.error("Form submission error:", error)
        if (error instanceof z.ZodError) {
            return {
                success: false,
                message: "Please check your information and try again.",
                errors: error.errors,
            }
        }

        return { success: false, message: "Something went wrong. Please try again later." }
    }
}


