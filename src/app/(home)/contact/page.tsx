"use client"

import type React from "react"

import { useState } from "react"
import { User, Mail, Phone } from "lucide-react"
import { submitContactForm, type ContactFormData } from "@/lib/actions"
import Image from "next/image"
import Link from "next/link"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
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
            const result = await submitContactForm(formData as ContactFormData)
            setFormStatus(result)

            if (result.success) {
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
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
        <div className="flex flex-col gap-20 mt-16 overflow-hidden">
            <Image className="fixed inset-0 -mt-20 w-screen -z-10 bg-contain " src="/images/illustration.jpg" alt="Contact Us" width={1920} height={1080} />
            <div className=" max-w-[85rem] flex mx-auto border border-accent-magenta/30 rounded-2xl">
                {/* Left Section with Illustration */}
                <div className="relative w-md flex justify-start items-end rounded-l-2xl overflow-hidden">
                    <Image className="absolute h-full w-full inset-0 -z-10 rounded-l-2xl blur-[2px]" src="/images/contact_banner.jpg" alt="Contact Us" width={500} height={1080} />
                    <div className="z-10 p-10 flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">CONTACT US</h1>
                        <p className="text-sm text-gray-700">
                            Email, call, or complete the form if you have any questions or
                            would like to learn more about our products.
                        </p>
                        <div className="space-y-3 text-sm mt-3">
                            <div className="flex items-center gap-2 text-gray-700">
                                <Mail className="h-4 w-4" />
                                <a href="mailto:ibksales@ibizkart.com" className="hover:underline">
                                    ibksales@ibizkart.com
                                </a>
                            </div>

                            <div className="flex items-center gap-2 text-gray-700">
                                <Phone className="h-4 w-4" />
                                <a href="tel:321-221-231" className="hover:underline">
                                    +91 8048890627
                                </a>
                            </div>
                            <div className="w-fit flex gap-3 mt-5">
                                <div className="group transition-all duration-300 text-gray-900 p-2 rounded-full flex justify-center items-center bg-accent-magenta/10 hover:bg-accent-magenta/60 hover:cursor-pointer">
                                    <a href="https://wa.me/919880566644" >
                                        <Image className="group-hover:invert transition-all duration-300" src="/images/socials/whatsapp.svg" alt="whatsapp svg" width={20} height={20} />
                                    </a>
                                </div>
                                <div className="group transition-all duration-300 text-gray-900 p-2 rounded-full flex justify-center items-center bg-accent-magenta/10 hover:bg-accent-magenta/60 hover:cursor-pointer">
                                    <a href="https://wa.me/919880566644" >
                                        <Image className="group-hover:invert transition-all duration-300" src="/images/socials/facebook.svg" alt="whatsapp svg" width={20} height={20} />
                                    </a>
                                </div>
                                <div className="group transition-all duration-300 text-gray-900 p-2 rounded-full flex justify-center items-center bg-accent-magenta/10 hover:bg-accent-magenta/60 hover:cursor-pointer">
                                    <a href="https://wa.me/919880566644" >
                                        <Image className="group-hover:invert transition-all duration-300" src="/images/socials/twitter.svg" alt="whatsapp svg" width={20} height={20} />
                                    </a>
                                </div>
                                <div className="group transition-all duration-300 text-gray-900 p-2 rounded-full flex justify-center items-center bg-accent-magenta/10 hover:bg-accent-magenta/60 hover:cursor-pointer">
                                    <a href="https://wa.me/919880566644" >
                                        <Image className="group-hover:invert transition-all duration-300" src="/images/socials/linkedin.svg" alt="whatsapp svg" width={20} height={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section with Form */}
                <div className="w-full md:w-3/5 p-8 backdrop-blur-xl rounded-r-2xl bg-[#E2E7EF]/40">
                    <div className="max-w-lg mx-auto">
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">GET IN TOUCH</h2>
                        <p className="text-gray-500 mb-8">You can reach us anytime</p>

                        {formStatus && (
                            <div
                                className={`mb-6 p-4 rounded-md ${formStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                            >
                                {formStatus.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="text-sm text-gray-600 pl-10 w-full border border-gray-400 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-accent-magenta/60 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div className="relative">
                                    {/* <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> */}
                                    {/*     <User className="h-5 w-5 text-gray-400" /> */}
                                    {/* </div> */}
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="text-sm text-gray-600 pl-10 w-full border border-gray-400 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-accent-magenta/60 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="text-sm text-gray-600 pl-10 w-full border border-gray-400 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-accent-magenta/60 focus:border-transparent"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Phone className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="text-sm text-gray-600 pl-10 w-full border border-gray-400 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-accent-magenta/60 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Describe your query"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="text-sm text-gray-600 w-full border border-gray-400 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-accent-magenta/60 focus:border-transparent"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-accent-magenta/80 hover:bg-accent-magenta/60 text-white font-medium py-3 px-4 rounded-full flex items-center justify-center transition-colors"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center">
                                        <svg
                                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
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

            <div className="py-20 bg-[#CCC6E1]/90 backdrop-blur-sm ">
                <div className="max-w-[82rem] mx-auto flex">
                    <div className="w-1/2 overflow-hidden rounded-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d543.0522158292423!2d77.52016500280573!3d13.032346856900048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ffc04759143%3A0xab1ba4b9005b03ac!2sIBK%20Engineers%20Pvt%20Ltd!5e0!3m2!1sen!2sus!4v1742644396516!5m2!1sen!2sus"
                            width="600"
                            height="450"
                            loading="lazy"
                            style={{ borderRadius: "1rem" }}
                        />
                    </div>
                    <div className="w-1/2 pl-10 flex flex-col justify-center gap-4 ">
                        <h1 className="text-xl text-accent-dark-gray">Our Location</h1>
                        <h1 className="text-4xl font-semibold">Connecting Near and Far</h1>
                        <span className="text-xl font-semibold mt-10">Headquarters</span>
                        <span className="text-accent-dark-gray">
                            IBK Engineers Pvt Ltd
                            <br />
                            4th Cross Rd, Peenya 1st Stage,
                            <br />
                            Netaji Nagar, Peenya,
                            <br />
                            Bengaluru, Karnataka 560058,
                            <br />
                            India
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}
