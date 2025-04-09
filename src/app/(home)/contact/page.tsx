"use client"

import { useState } from "react"
import { User, Mail, Phone } from "lucide-react"
import { submitContactForm, type ContactFormData } from "@/lib/actions"
import Image from "next/image"

// Add structured data for better SEO
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact IBK Engineers",
    "description": "Contact IBK Engineers for industrial products, automation solutions, and engineering components",
    "url": "https://ibizkart.com/contact",
    "mainEntity": {
        "@type": "Organization",
        "name": "IBK Engineers",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-8048890627",
            "contactType": "customer service",
            "email": "ibksales@ibizkart.com",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "4th Cross Rd, Peenya 1st Stage, Netaji Nagar, Peenya",
            "addressLocality": "Bengaluru",
            "addressRegion": "Karnataka",
            "postalCode": "560058",
            "addressCountry": "IN"
        }
    }
};

export default function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        countryCode: "+91",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formStatus, setFormStatus] = useState<{
        success?: boolean
        message?: string
    } | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setFormStatus(null)

        try {
            const result = await submitContactForm(formData)
            setFormStatus(result)

            if (result.success) {
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
                    countryCode: "+91",
                })
            }
        } catch (error) {
            setFormStatus({
                success: false,
                message: "An unexpected error occurred. Please try again.",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="flex flex-col gap-10 md:gap-20 mt-8 md:mt-16 overflow-hidden" role="main">
            <Image 
                className="fixed inset-0 -mt-20 w-screen -z-10 bg-contain" 
                src="/images/illustration.jpg" 
                alt="Decorative background pattern" 
                width={1920} 
                height={1080}
                aria-hidden="true"
            />
            <div className="max-w-[85rem] flex flex-col md:flex-row mx-auto border border-accent-magenta/30 rounded-2xl">
                {/* Left Section with Illustration */}
                <div className="relative w-full md:w-md flex justify-start items-end rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
                    <Image 
                        className="absolute h-full w-full inset-0 -z-10 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none blur-[2px]" 
                        src="/images/contact_banner.jpg" 
                        alt="Contact Us Banner" 
                        width={500} 
                        height={1080}
                        priority
                    />
                    <div className="z-10 p-6 md:p-10 flex flex-col gap-2">
                        <h1 className="text-xl md:text-2xl font-bold">CONTACT US</h1>
                        <p className="text-xs md:textsm text-gray-700">
                            Email, call, or complete the form if you have any questions or
                            would like to learn more about our products.
                        </p>
                        <div className="space-y-2 md:space-y-3 text-xs md:text-sm mt-3" role="contentinfo" aria-label="Contact information">
                            <div className="flex items-center gap-2 text-gray-700">
                                <Mail className="h-3 w-3 md:h-4 md:w-4" aria-hidden="true" />
                                <a href="mailto:ibksales@ibizkart.com" className="hover:underline" aria-label="Send us an email">
                                    ibksales@ibizkart.com
                                </a>
                            </div>

                            <div className="flex items-center gap-2 text-gray-700">
                                <Phone className="h-3 w-3 md:h-4 md:w-4" aria-hidden="true" />
                                <a href="tel:+918048890627" className="hover:underline" aria-label="Call us">
                                    +91 8048890627
                                </a>
                            </div>
                            <div className="w-fit flex gap-2 md:gap-3 mt-3 md:mt-5" role="list" aria-label="Social media links">
                                <div className="group transition-all duration-300 text-gray-900 p-1.5 md:p-2 rounded-full flex justify-center items-center bg-accent-magenta/10 hover:bg-accent-magenta/60 hover:cursor-pointer">
                                    <a href="https://wa.me/919880566644" aria-label="Contact us on WhatsApp">
                                        <Image className="group-hover:invert transition-all duration-300" src="/images/socials/whatsapp.svg" alt="WhatsApp icon" width={16} height={16} />
                                    </a>
                                </div>
                                <div className="group transition-all duration-300 text-gray-900 p-1.5 md:p-2 rounded-full flex justify-center items-center bg-accent-magenta/10 hover:bg-accent-magenta/60 hover:cursor-pointer">
                                    <a href="https://facebook.com/ibizkart.In" aria-label="Follow us on Facebook">
                                        <Image className="group-hover:invert transition-all duration-300" src="/images/socials/facebook.svg" alt="Facebook icon" width={16} height={16} />
                                    </a>
                                </div>
                                <div className="group transition-all duration-300 text-gray-900 p-1.5 md:p-2 rounded-full flex justify-center items-center bg-accent-magenta/10 hover:bg-accent-magenta/60 hover:cursor-pointer">
                                    <a href="https://twitter.com/ibizkart" aria-label="Follow us on Twitter">
                                        <Image className="group-hover:invert transition-all duration-300" src="/images/socials/twitter.svg" alt="Twitter icon" width={16} height={16} />
                                    </a>
                                </div>
                                <div className="group transition-all duration-300 text-gray-900 p-1.5 md:p-2 rounded-full flex justify-center items-center bg-accent-magenta/10 hover:bg-accent-magenta/60 hover:cursor-pointer">
                                    <a href="https://linkedin.com/company/ibizkart" aria-label="Follow us on LinkedIn">
                                        <Image className="group-hover:invert transition-all duration-300" src="/images/socials/linkedin.svg" alt="LinkedIn icon" width={16} height={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section with Form */}
                <div className="w-full md:w-3/5 p-6 md:p-8 backdrop-blur-xl rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none bg-[#E2E7EF]/40">
                    <div className="max-w-lg mx-auto">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">GET IN TOUCH</h2>
                        <p className="text-sm md:text-base text-gray-500 mb-6 md:mb-8">You can reach us anytime</p>

                        {formStatus && (
                            <div
                                className={`mb-4 md:mb-6 p-3 md:p-4 rounded-md text-sm ${formStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                                role="alert"
                                aria-live="polite"
                            >
                                {formStatus.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4" aria-label="Contact form">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                <div className="relative">
                                    <label htmlFor="firstName" className="sr-only">First Name</label>
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-4 w-4 md:h-5 md:w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="firstName"
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="text-xs md:text-sm text-gray-600 pl-9 md:pl-10 w-full border border-gray-400 rounded-full py-2.5 md:py-3 px-4 focus:outline-none focus:ring-2 focus:ring-accent-magenta/60 focus:border-transparent"
                                        required
                                        aria-required="true"
                                    />
                                </div>

                                <div className="relative">
                                    <label htmlFor="lastName" className="sr-only">Last Name</label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="text-xs md:text-sm text-gray-600 pl-9 md:pl-10 w-full border border-gray-400 rounded-full py-2.5 md:py-3 px-4 focus:outline-none focus:ring-2 focus:ring-accent-magenta/60 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <label htmlFor="email" className="sr-only">Email</label>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="text-xs md:text-sm text-gray-600 pl-9 md:pl-10 w-full border border-gray-400 rounded-full py-2.5 md:py-3 px-4 focus:outline-none focus:ring-2 focus:ring-accent-magenta/60 focus:border-transparent"
                                    required
                                    aria-required="true"
                                />
                            </div>

                            <div className="relative">
                                <label htmlFor="phone" className="sr-only">Phone</label>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="text-xs md:text-sm text-gray-600 pl-9 md:pl-10 w-full border border-gray-400 rounded-full py-2.5 md:py-3 px-4 focus:outline-none focus:ring-2 focus:ring-accent-magenta/60 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Describe your query"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="text-xs md:text-sm text-gray-600 w-full border border-gray-400 rounded-2xl py-2.5 md:py-3 px-4 focus:outline-none focus:ring-2 focus:ring-accent-magenta/60 focus:border-transparent"
                                    required
                                    aria-required="true"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-accent-magenta/80 hover:bg-accent-magenta/60 text-white text-sm md:text-base font-medium py-2.5 md:py-3 px-4 rounded-full flex items-center justify-center transition-colors"
                                disabled={isSubmitting}
                                aria-busy={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center">
                                        <svg
                                            className="animate-spin -ml-1 mr-2 h-3 w-3 md:h-4 md:w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Processing...
                                    </span>
                                ) : (
                                    <span>Send</span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="py-10 md:py-20 bg-[#CCC6E1]/90 backdrop-blur-sm">
                <div className="max-w-[82rem] mx-auto flex flex-col md:flex-row px-4 md:px-0">
                    <div className="w-full md:w-1/2 overflow-hidden rounded-2xl mb-6 md:mb-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d543.0522158292423!2d77.52016500280573!3d13.032346856900048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ffc04759143%3A0xab1ba4b9005b03ac!2sIBK%20Engineers%20Pvt%20Ltd!5e0!3m2!1sen!2sus!4v1742644396516!5m2!1sen!2sus"
                            width="100%"
                            height="300"
                            loading="lazy"
                            style={{ borderRadius: "1rem" }}
                            title="IBK Engineers Location Map"
                            aria-label="Map showing IBK Engineers location in Bangalore"
                        />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-10 flex flex-col justify-center gap-3 md:gap-4">
                        <h2 className="text-lg md:text-xl text-accent-dark-gray">Our Location</h2>
                        <h3 className="text-2xl md:text-4xl font-semibold">Connecting Near and Far</h3>
                        <span className="text-lg md:text-xl font-semibold mt-6 md:mt-10">Headquarters</span>
                        <address className="text-sm md:text-base text-accent-dark-gray not-italic">
                            IBK Engineers Pvt Ltd
                            <br />
                            4th Cross Rd, Peenya 1st Stage,
                            <br />
                            Netaji Nagar, Peenya,
                            <br />
                            Bengaluru, Karnataka 560058,
                            <br />
                            India
                        </address>
                    </div>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    )
}
