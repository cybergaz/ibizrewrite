'use client'

import ProductList from '@/components/other/product-list'
import ProductCategory from '@/components/other/product_category'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { PRODUCTS } from '@/lib/constants'

type Items = { title: string, link: string }[]

const Products = () => {
    const searchParams = useSearchParams()
    const searchedCategory = searchParams.get('c')
    // console.log(searchParams.get('hehe'));

    const [selectedItems, setSelectedItems] = useState<Items | null>(PRODUCTS[0].items);
    const [selectedCategory, setSelectedCategory] = useState("");

    if (searchedCategory) setSelectedCategory(searchedCategory);


    return (
        <div className='min-h-screen relative'>
            <Image className="fixed -z-30 w-screen h-screen inset-0" src="/images/home_bg3.png" alt="Products" width={1920} height={1080} />
            <div className='max-w-[85rem] mx-auto p-5 mt-5 mb-20 flex gap-10 relative min-h-screen'>
                <aside className='sticky top-0 self-start p-5 rounded-lg max-h-[80vh] overflow-y-auto border border-accent-magenta/10 bg-accent-magenta/5 w-72 flex flex-col gap-3'>
                    <h1 className='text-lg font-semibold'>Categories</h1>
                    <div className='flex flex-col gap-2 pl-1'>
                        {PRODUCTS.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setSelectedItems(category.items);
                                    setSelectedCategory(category.category);
                                }}
                                className={cn(
                                    "p-1 px-3 flex justify-start items-center rounded-[5px] transition-all duration-200 hover:bg-accent-magenta/20 cursor-pointer",
                                    selectedCategory === category.category && "bg-accent-magenta/20"
                                )}
                            >
                                {category.category}
                            </button>
                        ))}
                    </div>
                </aside>
                <main className='flex-1'>
                    <ProductList products={selectedItems} />
                </main>
            </div>
        </div>
    )
}

export default Products
