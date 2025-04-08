"use client"

import React, {
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react"
import { AnimatePresence, motion } from "framer-motion"

interface Logo {
    name: string
    id: number
    img: string
}

interface LogoColumnProps {
    logos: Logo[]
    index: number
    currentTime: number
}

const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
}

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
    const shuffled = shuffleArray(allLogos)
    const columns: Logo[][] = Array.from({ length: columnCount }, () => [])

    shuffled.forEach((logo, index) => {
        columns[index % columnCount].push(logo)
    })

    const maxLength = Math.max(...columns.map((col) => col.length))
    columns.forEach((col) => {
        while (col.length < maxLength) {
            col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
        }
    })

    return columns
}

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
    ({ logos, index, currentTime }) => {
        const cycleInterval = 4000
        const columnDelay = index * 100
        const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
        const currentIndex = Math.floor(adjustedTime / cycleInterval)
        const currentLogo = useMemo(() => logos[currentIndex], [logos, currentIndex])

        return (
            <motion.div
                className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${currentLogo.id}-${currentIndex}`}
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
                        animate={{
                            y: "0%",
                            opacity: 1,
                            filter: "blur(0px)",
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                                mass: 1,
                                bounce: 0.2,
                                duration: 0.5,
                            },
                        }}
                        exit={{
                            y: "-20%",
                            opacity: 0,
                            filter: "blur(6px)",
                            transition: {
                                type: "tween",
                                ease: "easeIn",
                                duration: 0.3,
                            },
                        }}
                    >
                        <img
                            src={currentLogo.img}
                            alt={currentLogo.name}
                            className="h-20 w-20 rounded-lg max-h-[80%] max-w-[80%] object-contain md:h-32 md:w-32"
                        />
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        )
    }
)

interface LogoCarouselProps {
    columnCount?: number
    logos: Logo[]
}

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        if (media.matches !== matches) {
            setMatches(media.matches)
        }
        const listener = () => setMatches(media.matches)
        media.addEventListener("change", listener)
        return () => media.removeEventListener("change", listener)
    }, [matches, query])

    return matches
}

export function LogoCarousel({ columnCount = 2, logos }: LogoCarouselProps) {
    const [logoSets, setLogoSets] = useState<Logo[][]>([])
    const [currentTime, setCurrentTime] = useState(0)
    
    const isMobile = useMediaQuery("(max-width: 640px)")
    const isTablet = useMediaQuery("(max-width: 1024px)")
    
    const responsiveColumnCount = useMemo(() => {
        if (isMobile) return 3
        if (isTablet) return 5
        return columnCount
    }, [isMobile, isTablet, columnCount])

    const updateTime = useCallback(() => {
        setCurrentTime((prevTime) => prevTime + 100)
    }, [])

    useEffect(() => {
        const intervalId = setInterval(updateTime, 100)
        return () => clearInterval(intervalId)
    }, [updateTime])

    useEffect(() => {
        const distributedLogos = distributeLogos(logos, responsiveColumnCount)
        setLogoSets(distributedLogos)
    }, [logos, responsiveColumnCount])

    return (
        <div className={`flex ${isMobile ? 'space-x-2' : 'space-x-4'}`}>
            {logoSets.map((logos, index) => (
                <LogoColumn
                    key={index}
                    logos={logos}
                    index={index}
                    currentTime={currentTime}
                />
            ))}
        </div>
    )
}

export { LogoColumn };

