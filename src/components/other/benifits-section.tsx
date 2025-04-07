"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Building2, Leaf, Users } from "lucide-react"

interface BenefitCardProps {
    icon: React.ReactNode
    title: string
    description: string
    delay: number
}

function BenefitCard({ icon, title, description, delay }: BenefitCardProps) {
    return (
        <div
            className={`bg-white/80 rounded-xl p-8 shadow-xl transition-all duration-700 transform opacity-100 translate-y-0`}
        >
            <div className="bg-accent-magenta/5 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <div className="text-accent-magenta">{icon}</div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>

            <p className="text-gray-500 leading-relaxed">{description}</p>
        </div>
    )
}

export default function BenefitsSection() {

    const benefits = [
        {
            icon: <Building2 className="h-6 w-6" />,
            title: "Innovative Engineering Solutions",
            description:
                "Stay ahead with cutting - edge industrial components designed for precision, durability, and efficiency.We bring you top- tier technology to streamline your operations.",
        },
        {
            icon: <Leaf className="h-6 w-6" />,
            title: "Reliable & Proven Products",
            description: "Every product we offer is tested for quality and reliability. Our extensive portfolio features trusted brands, ensuring you get only the best for your industry.",
        },
        {
            icon: <Users className="h-6 w-6" />,
            title: "Strong Industry Partnerships",
            description:
                "We believe in building long-term relationships, working closely with clients and global manufacturers to deliver tailored solutions that truly make an impact.",
        },
    ]

    return (
        <section className="bg-[#CAC0E3]/60 border py-16 px-20 rounded-3xl">
            <div className="max-w-6xl mx-auto">
                <div
                    className={`text-center mb-16 transition-all duration-700 opacity-100 translate-y-0`}
                >
                    <h2 className="text-4xl font-medium text-gray-900 mb-4">Our Key Advantages</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Quality, Efficiency, and Lasting Partnerships
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <BenefitCard
                            key={index}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            delay={300 + index * 200}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

