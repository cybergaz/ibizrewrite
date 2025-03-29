'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Package2 } from 'lucide-react'

interface ProductPortfolioCardProps {
    title?: string
    description?: string
    onClick?: () => void
}

export default function ProductPortfolioCard({
    title = "Extensive Product Portfolio",
    description = "A one-stop solution for diverse industrial needs.",
    onClick
}: ProductPortfolioCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    // Track mouse position for the 3D effect
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return

        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        setMousePosition({ x, y })
    }

    // Calculate rotation based on mouse position
    const calculateRotation = () => {
        if (!cardRef.current) return { x: 0, y: 0 }

        const rect = cardRef.current.getBoundingClientRect()
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        // Calculate rotation (limited to a small range)
        const rotateY = ((mousePosition.x - centerX) / centerX) * 5
        const rotateX = ((centerY - mousePosition.y) / centerY) * 5

        return { x: rotateX, y: rotateY }
    }

    const rotation = calculateRotation()

    return (
        <motion.div
            ref={cardRef}
            className="relative w-full max-w-md overflow-hidden rounded-2xl cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            onClick={onClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                perspective: '1000px'
            }}
        >
            {/* Background gradient with animated movement */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400"
                animate={{
                    background: isHovered
                        ? 'linear-gradient(135deg, rgb(203, 213, 225) 0%, rgb(226, 232, 240) 50%, rgb(148, 163, 184) 100%)'
                        : 'linear-gradient(135deg, rgb(209, 213, 219) 0%, rgb(156, 163, 175) 100%)'
                }}
                transition={{ duration: 0.3 }}
            />

            {/* Animated light effect */}
            <motion.div
                className="absolute inset-0 opacity-0 bg-white"
                animate={{
                    opacity: isHovered ? [0, 0.1, 0] : 0,
                    scale: isHovered ? [1, 1.2, 1] : 1
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                }}
            />

            {/* Card content with 3D rotation */}
            <motion.div
                className="relative z-10 p-8 h-full"
                animate={{
                    rotateX: rotation.x,
                    rotateY: rotation.y,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <div className="flex flex-col h-full">
                    <div className="mb-4">
                        <motion.div
                            initial={{ scale: 1 }}
                            animate={{ scale: isHovered ? 1.1 : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Package2 className="w-10 h-10 text-gray-800 mb-2" />
                        </motion.div>

                        <motion.h3
                            className="text-2xl font-bold text-gray-800"
                            animate={{
                                y: isHovered ? -5 : 0,
                                x: isHovered ? 5 : 0
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {title}
                        </motion.h3>

                        <motion.p
                            className="mt-2 text-gray-700"
                            animate={{ opacity: isHovered ? 1 : 0.8 }}
                            transition={{ duration: 0.3 }}
                        >
                            {description}
                        </motion.p>
                    </div>

                    <motion.div
                        className="mt-auto"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            x: isHovered ? 0 : -20
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-center text-blue-600 font-medium">
                            Explore our catalog
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Animated border */}
            <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                animate={{
                    boxShadow: isHovered
                        ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 2px rgba(59, 130, 246, 0.5)'
                        : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
                transition={{ duration: 0.3 }}
            />

            {/* Particle effect on hover */}
            {isHovered && (
                <>
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-blue-400"
                            initial={{
                                opacity: 0,
                                x: '50%',
                                y: '50%',
                                scale: 0
                            }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0],
                                x: `calc(50% + ${Math.random() * 100 - 50}px)`,
                                y: `calc(50% + ${Math.random() * 100 - 50}px)`
                            }}
                            transition={{
                                duration: 1 + Math.random(),
                                delay: i * 0.1,
                                repeat: Infinity,
                                repeatDelay: 2
                            }}
                        />
                    ))}
                </>
            )}
        </motion.div>
    )
}

