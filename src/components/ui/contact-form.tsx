"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitContactForm, type ContactFormData } from "@/lib/actions"
import { toast } from "sonner";
import { LucideMail } from "lucide-react"

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    })

    const [countryCode, setCountryCode] = useState("+91")
    const [charCount, setCharCount] = useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target

        if (name === "message") {
            setCharCount(value.length)
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const contactData: ContactFormData = {
                ...formData,
                countryCode,
            }

            const result = await submitContactForm(contactData)

            if (result.success) {
                toast.success(result.message)

                // Reset form
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
                })
                setCharCount(0)
            } else {
                toast.error(result.message)
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="bg-white rounded-3xl shadow-sm p-8 w-[28rem]">
            <div className="space-y-6">
                <div className="flex flex-col gap-2">
                    <h2 className="text-4xl font-semibold text-gray-900">Get in Touch</h2>
                    <p className="text-gray-600 mt-1">You can reach us anytime</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            name="firstName"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="rounded-full p-5 border-gray-200"
                            required
                        />

                        <Input
                            name="lastName"
                            placeholder="Last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="rounded-full p-5 border-gray-200"
                            required
                        />
                    </div>

                    <div className="flex justify-center items-center border rounded-full border-gray-200 px-5 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]">
                        <LucideMail className="h-5 w-5 text-accent-light-gray" />
                        <Input
                            name="email"
                            type="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="rounded-full p-5 border-transparent focus-visible:ring-0 focus-visible:border-transparent placeholder:text-accent-light-gray "
                            required
                        />
                    </div>

                    <div className="flex gap-2">
                        <Select value={countryCode} onValueChange={setCountryCode}>
                            <SelectTrigger className="w-[100px] rounded-full p-5 border-gray-200">
                                <SelectValue placeholder="+91" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="+1">+1</SelectItem>
                                <SelectItem value="+44">+44</SelectItem>
                                <SelectItem value="+91">+91</SelectItem>
                                <SelectItem value="+81">+81</SelectItem>
                                <SelectItem value="+86">+86</SelectItem>
                            </SelectContent>
                        </Select>

                        <Input
                            name="phone"
                            placeholder="Phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="flex-1 rounded-full p-5 border-gray-200"
                            required
                        />
                    </div>

                    <div className="relative">
                        <Textarea
                            name="message"
                            placeholder="How can we help?"
                            value={formData.message}
                            onChange={handleChange}
                            className="min-h-[120px] resize-none rounded-3xl border-gray-200 pt-4 px-4"
                            maxLength={120}
                            required
                        />
                        <div className="absolute bottom-2 right-4 text-xs text-gray-400">{charCount}/120</div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full rounded-full bg-blue-500 hover:bg-blue-600 text-white py-6"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>

                    <p className="text-center text-sm text-gray-500">
                        By contacting us, you agree to our{" "}
                        <a href="#terms" className="font-medium text-gray-900">
                            Terms of service
                        </a>{" "}
                        and{" "}
                        <a href="#privacy" className="font-medium text-gray-900">
                            Privacy Policy
                        </a>
                    </p>
                </form>
            </div>
        </div>
    )
}


