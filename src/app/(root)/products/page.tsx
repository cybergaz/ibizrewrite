'use client'

import ProductList from '@/components/other/product-list'
import { cn } from '@/lib/utils'
import { isFuzzyMatch, normalizeSearchQuery } from '@/lib/search-utils'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { ELECTRICAL_PRODUCTS, PRODUCTS } from '@/lib/constants'
import SearchBar from '@/components/ui/search-bar'
import { ChevronDown } from 'lucide-react'
import Getintouch from '@/components/other/contact-us'
import Head from 'next/head'

type Items = { title: string, link: string }[]

const Products = () => {
    const searchParams = useSearchParams()
    const searchedCategory = searchParams.get('c')
    const dropdownRef = useRef<HTMLDivElement>(null)

    const [selectedItems, setSelectedItems] = useState<Items | null>(PRODUCTS[0].items);
    const [selectedCategory, setSelectedCategory] = useState(PRODUCTS[0].category);
    const [searchResults, setSearchResults] = useState<Items | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        if (searchedCategory) {
            setSelectedCategory(searchedCategory);
            setSelectedItems(PRODUCTS.find((category) => category.category === searchedCategory)?.items || null);
        }
    }, [])

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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

    // Handle category selection from dropdown
    const handleCategorySelect = (category: string) => {
        const selectedCat = PRODUCTS.find(cat => cat.category === category);
        if (selectedCat) {
            setSelectedItems(selectedCat.items);
            setSelectedCategory(selectedCat.category);
            setSearchResults(null);
            setIsDropdownOpen(false); // Close dropdown after selection
        }
    };

    return (
        <>
            <Head>
                <title>Products Catalog | Blue Horse</title>
                <meta name="description" content="Explore our comprehensive range of industrial products and electrical equipment. Find high-quality solutions for your business needs." />
                <meta name="keywords" content="industrial products, electrical equipment, business solutions, product catalog" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": PRODUCTS.map((category) => ({
                            "@type": "ItemList",
                            "name": category.category,
                            "itemListElement": category.items.map((item, itemIndex) => ({
                                "@type": "ListItem",
                                "position": itemIndex + 1,
                                "item": {
                                    "@type": "Product",
                                    "name": item.title,
                                    "url": item.link
                                }
                            }))
                        }))
                    })}
                </script>
            </Head>
            <div className='min-h-screen relative' role="main">
                <Image
                    className="fixed -z-30 w-screen h-screen object-cover inset-0"
                    src="/images/home_bg3.png"
                    alt="Products background"
                    width={1920}
                    height={1080}
                    priority
                />
                <div className='max-w-[85rem] mx-auto p-5 mt-5 mb-20 flex max-sm:flex-col gap-10 relative min-h-screen'>
                    {/* Mobile sidebar toggle */}
                    <div className="sm:hidden mb-4 relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full flex items-center justify-between bg-white/50 hover:bg-accent-magenta/10 border border-accent-magenta/10 rounded-md px-3 py-2"
                            aria-expanded={isDropdownOpen}
                            aria-controls="category-dropdown"
                            aria-label="Select product category"
                        >
                            <span>{selectedCategory}</span>
                            <ChevronDown className={cn("h-4 w-4 transition-transform", isDropdownOpen && "rotate-180")} aria-hidden="true" />
                        </button>

                        {isDropdownOpen && (
                            <div
                                id="category-dropdown"
                                className="absolute z-50 w-full mt-1 bg-white/70 backdrop-blur-md rounded-md border border-accent-magenta/10 shadow-md max-h-[60vh] overflow-y-auto"
                                role="listbox"
                                aria-label="Product categories"
                            >
                                {PRODUCTS.map((category, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleCategorySelect(category.category)}
                                        className={cn(
                                            "w-full text-left p-2 hover:bg-accent-magenta/10 transition-colors",
                                            selectedCategory === category.category && "bg-accent-magenta/10"
                                        )}
                                        role="option"
                                        aria-selected={selectedCategory === category.category}
                                    >
                                        {category.category}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Desktop sidebar */}
                    <aside
                        className='sticky top-0 hidden sm:flex self-start p-5 rounded-lg max-h-[80vh] overflow-y-auto border border-accent-magenta/10 bg-accent-magenta/5 w-72 flex-col gap-3'
                        aria-label="Product navigation"
                    >
                        <SearchBar
                            onSearch={handleSearch}
                            placeholder="Search products..."
                            className="mb-3"
                            aria-label="Search products"
                        />
                        <h2 className='text-lg font-semibold'>CATEGORIES</h2>
                        <nav aria-label="Product categories">
                            <div className='flex flex-col gap-2 pl-1'>
                                {PRODUCTS.map((category, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setSelectedItems(category.items);
                                            setSelectedCategory(category.category);
                                            setSearchResults(null);
                                        }}
                                        className={cn(
                                            "p-1 px-3 flex justify-start items-center rounded-[5px] transition-all duration-200 hover:bg-accent-magenta/20 cursor-pointer",
                                            selectedCategory === category.category && "bg-accent-magenta/20"
                                        )}
                                        aria-current={selectedCategory === category.category ? "page" : undefined}
                                    >
                                        {category.category}
                                    </button>
                                ))}
                            </div>
                        </nav>
                        <h2 className='text-lg font-semibold mt-5'>ELECTRICAL PRODUCTS</h2>
                        <nav aria-label="Electrical products">
                            <div className='flex flex-col gap-2 pl-1'>
                                {ELECTRICAL_PRODUCTS.map((product, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setSelectedItems(product.items);
                                            setSelectedCategory(product.brand);
                                            setSearchResults(null);
                                        }}
                                        className={cn(
                                            "p-1 px-3 flex justify-start items-center rounded-[5px] transition-all duration-200 hover:bg-accent-magenta/20 cursor-pointer",
                                            selectedCategory === product.brand && "bg-accent-magenta/20"
                                        )}
                                        aria-current={selectedCategory === product.brand ? "page" : undefined}
                                    >
                                        {product.brand}
                                    </button>
                                ))}
                            </div>
                        </nav>
                    </aside>
                    <main className='flex-1'>
                        <h1 className="sr-only">Product Catalog</h1>
                        <ProductList products={searchResults || selectedItems} />
                    </main>
                </div>
                <Getintouch />
            </div>
        </>
    )
}

export default Products
