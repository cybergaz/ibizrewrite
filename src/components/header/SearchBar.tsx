"use client"

import { useState, useRef, useEffect } from "react"
import { Search, X } from "lucide-react"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { isFuzzyMatch, normalizeSearchQuery } from '@/lib/search-utils'
import { PRODUCTS } from '@/lib/constants'

interface Product {
    id: string;
    name: string;
    category: string;
}

type Items = { title: string, link: string }[]

export const SearchBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState<Items | null>(null);
    const [isLoading, setIsLoading] = useState(false)
    const searchRef = useRef<HTMLDivElement>(null)
    const router = useRouter()

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            if (searchQuery) {
                handleSearch(searchQuery)
            } else {
                setSearchResults([])
            }
        }, 300)

        return () => clearTimeout(debounceTimer)
    }, [searchQuery])

    // const handleSearch = async () => {
    //     setIsLoading(true)
    //     try {
    //         const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
    //         if (!response.ok) {
    //             throw new Error('Search request failed')
    //         }
    //         const data = await response.json()
    //         console.log('Search results:', data) // Debug log
    //         setSearchResults(data)
    //     } catch (error) {
    //         console.error('Search error:', error)
    //         setSearchResults([])
    //     } finally {
    //         setIsLoading(false)
    //     }
    // }
    const handleSearch = (query: string) => {
        if (!query.trim()) {
            setSearchResults(null);
            return;
        }

        const searchTerms = normalizeSearchQuery(query);
        const results: { title: string, link: string }[] = [];

        PRODUCTS.forEach(category => {
            let shouldIncludeCategory = false;

            // Check if any search term matches the category
            shouldIncludeCategory = searchTerms.some(term =>
                isFuzzyMatch(category.category, term)
            );

            // Check if any search term matches any brand
            if (!shouldIncludeCategory && category.brands) {
                shouldIncludeCategory = category.brands.some(brand =>
                    searchTerms.some(term => isFuzzyMatch(brand, term))
                );
            }

            // If category or brand matches, include all items
            if (shouldIncludeCategory) {
                results.push(...category.items);
            } else {
                // Check individual items
                const matchingItems = category.items.filter(item =>
                    searchTerms.some(term => {
                        // Check for matches in the title
                        if (isFuzzyMatch(item.title, term)) return true;

                        // Split title into words and check each word
                        const titleWords = item.title.toLowerCase().split(/\s+/);
                        return titleWords.some(word => isFuzzyMatch(word, term));
                    })
                );
                results.push(...matchingItems);
            }
        });

        // Remove duplicates and sort by relevance
        const uniqueResults = [...new Map(results.map(item => [item.title, item])).values()];
        setSearchResults(uniqueResults);
    }


    const handleProductClick = (productId: string) => {
        router.push(productId)
        setIsOpen(false)
        setSearchQuery("")
    }

    return (
        <div ref={searchRef} className="relative">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:bg-accent-magenta/10 cursor-pointer"
            >
                <Search className="h-5 w-5 text-accent-dark-gray hover:text-accent-magenta" />
            </Button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white/70 backdrop-blur-md rounded-xl shadow-xl border p-4 z-50">
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search products..."
                            className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-magenta/20"
                            autoFocus
                        />
                        {searchQuery && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setSearchQuery("")}
                                className="hover:bg-accent-magenta/10"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        )}
                    </div>

                    {isLoading && (
                        <div className="py-4 text-center text-sm text-gray-500">
                            Loading...
                        </div>
                    )}

                    {searchResults?.length! > 0 && (
                        <div className="mt-4 max-h-60 overflow-auto">
                            {searchResults?.map((product, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleProductClick(product.link)}
                                    className={cn(
                                        "w-full text-left p-2 hover:bg-accent-magenta/5 rounded-md",
                                        "transition-colors duration-200 cursor-pointer"
                                    )}
                                >
                                    <div className="flex flex-col">
                                        <span className="font-medium">{product.title}</span>
                                        {/* <span className="text-sm text-gray-500">{product.category}</span> */}
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}

                    {!isLoading && searchQuery && searchResults?.length! === 0 && (
                        <div className="py-4 text-center text-sm text-gray-500">
                            No products found for "{searchQuery}"
                        </div>
                    )}
                </div>
            )}
        </div>
    )
} 
