import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { PropertyCard } from "@/components/property-card"
import Image from "next/image"

const SAMPLE_PROPERTIES = [
  {
    price: "$625,000",
    beds: 3,
    baths: 3,
    sqft: "1,402",
    address: "3117 Babashaw Ct, Fairfax, VA, 22031",
    status: "Active",
    image: "https://picsum.photos/800/600",
    badge: "Open house"
  },
  {
    price: "$1,325,000",
    beds: 5,
    baths: 6,
    sqft: "3,525",
    address: "10960 Keys Ct, Fairfax, VA, 22032",
    status: "Active",
    image: "https://picsum.photos/800/601",
    badge: "Open: Sun 12-2pm (1/28)"
  },
  {
    price: "$575,000",
    beds: 3,
    baths: 3,
    sqft: "1,827",
    address: "4916 McFarland Dr, Fairfax, VA, 22032",
    status: "Active",
    image: "https://picsum.photos/800/602",
    badge: "Separate dining room"
  },
  {
    price: "$899,888",
    beds: 5,
    baths: 3,
    sqft: "2,060",
    address: "4403 Braeburn Dr, Fairfax, VA, 22032",
    status: "Active",
    image: "https://picsum.photos/800/603",
    badge: "Open: Sun 1-4pm (1/28)"
  }
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/1080"
            alt="Hero background"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-2">
            Agents. Tours.
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
            Loans. Homes.
          </h1>
          
          {/* Search Bar */}
          <div className="w-full max-w-2xl">
            <div className="relative">
              <Input
                type="text"
                placeholder="Enter an address, neighborhood, city, or ZIP code"
                className="w-full h-14 pl-4 pr-12 text-lg text-black bg-white rounded-lg"
              />
              <Button 
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="px-4 py-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Trending in Fairfax, VA</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">←</Button>
            <Button variant="outline" size="icon">→</Button>
          </div>
        </div>
        <p className="text-muted-foreground mb-6">
          Viewed and saved the most in the area over the past 24 hours
        </p>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAMPLE_PROPERTIES.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </section>
    </main>
  )
}
