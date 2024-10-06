import React from 'react'
import { DollarSign, Eye, Users } from 'lucide-react'

interface Property {
  id: number
  title: string
  price: number
  originalPrice: number
  views: number
  bids: number
  status: string
  imageUrl: string
  address: string
  area: number
  bedrooms: number
  bathrooms: number
  floor: number
  totalFloors: number
  buildYear: number
  type: string
}

interface PropertyListProps {
  properties: Property[]
  onPropertyClick: (property: Property) => void
}

const PropertyList: React.FC<PropertyListProps> = ({ properties, onPropertyClick }) => {
  if (properties.length === 0) {
    return <p className="text-center mt-8 text-gray-600">暂无搜索结果，请尝试不同的搜索条件。</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300" onClick={() => onPropertyClick(property)}>
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-sm font-semibold mb-2 text-gray-800 line-clamp-2">{property.title}</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-red-600 font-bold text-lg">¥{property.price.toFixed(2)}万</span>
              <span className="text-gray-500 text-sm line-through">市场价 ¥{property.originalPrice}万</span>
            </div>
            <div className="flex justify-between text-gray-500 text-sm">
              <span className="flex items-center"><Eye size={16} className="mr-1" /> {property.views}</span>
              <span className="flex items-center"><Users size={16} className="mr-1" /> {property.bids}人报名</span>
            </div>
            <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
              {property.status}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PropertyList