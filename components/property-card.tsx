import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface PropertyCardProps {
  price: string
  beds: number
  baths: number
  sqft: string
  address: string
  status: string
  image: string
  badge?: string
}

export function PropertyCard({
  price,
  beds,
  baths,
  sqft,
  address,
  status,
  image,
  badge,
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
      <div className="relative">
        {badge && (
          <Badge className="absolute top-2 left-2 z-10">
            {badge}
          </Badge>
        )}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={address}
            fill
            className="object-cover transition-transform duration-300"
          />
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-2xl font-bold">{price}</h3>
        <div className="flex gap-2 text-sm mt-2">
          <span>{beds} beds</span>
          <span>•</span>
          <span>{baths} baths</span>
          <span>•</span>
          <span>{sqft} sqft</span>
        </div>
        <p className="text-sm mt-2 text-muted-foreground line-clamp-1">
          {address}
        </p>
        <Badge variant="secondary" className="mt-2">
          {status}
        </Badge>
      </CardContent>
    </Card>
  )
} 