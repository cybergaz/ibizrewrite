'use client'

import { Search } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface SearchBarProps {
    onSearch: (query: string) => void
    placeholder?: string
    className?: string
    expanded?: boolean
}

const SearchBar = ({ onSearch, placeholder = "Search products...", className, expanded = true }: SearchBarProps) => {
    const [isExpanded, setIsExpanded] = useState(expanded)
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value
        setSearchQuery(query)
        onSearch(query)
    }

    return (
        <div className={cn("relative", className)}>
            <div className={cn(
                "flex items-center gap-2 transition-all duration-300",
                isExpanded ? "bg-accent-magenta/5 border border-accent-magenta/10 rounded-lg px-4 py-2" : ""
            )}>
                <Search 
                    className={cn(
                        "w-5 h-5 cursor-pointer",
                        !isExpanded && "hover:scale-110 transition-transform"
                    )}
                    onClick={() => setIsExpanded(true)}
                />
                <input
                    type="text"
                    placeholder={placeholder}
                    className={cn(
                        "bg-transparent outline-none w-full transition-all duration-300",
                        !isExpanded && "w-0 p-0"
                    )}
                    value={searchQuery}
                    onChange={handleSearch}
                    onBlur={() => !expanded && !searchQuery && setIsExpanded(false)}
                />
            </div>
        </div>
    )
}

export default SearchBar 