import SearchBar from '@/components/ui/search-bar'
import { useRouter } from 'next/navigation'

const router = useRouter()

const handleGlobalSearch = (query: string) => {
    if (query.trim()) {
        router.push(`/products?search=${encodeURIComponent(query)}`)
    }
}

<SearchBar 
    onSearch={handleGlobalSearch}
    expanded={false}
    className="hidden md:block"
/> 