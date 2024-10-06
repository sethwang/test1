import React from 'react'
import { ArrowLeft, Home, DollarSign, Eye, Users, Square, Bed, Bath, Building } from 'lucide-react'

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

interface PropertyDetailProps {
  property: Property
  onBack: () => void
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, onBack }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-red-600 text-white flex items-center">
        <button onClick={onBack} className="mr-4">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-xl font-bold">{property.title}</h2>
      </div>
      <div className="p-6">
        <img src={property.imageUrl} alt={property.title} className="w-full h-96 object-cover rounded-lg mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-2">¥{property.price.toFixed(2)}万</h3>
            <p className="text-gray-500 line-through mb-4">市场价 ¥{property.originalPrice}万</p>
            <div className="flex items-center mb-2">
              <Home className="mr-2 text-gray-500" />
              <span>{property.address}</span>
            </div>
            <div className="flex items-center mb-2">
              <Square className="mr-2 text-gray-500" />
              <span>{property.area}平方米</span>
            </div>
            <div className="flex items-center mb-2">
              <Bed className="mr-2 text-gray-500" />
              <span>{property.bedrooms}室</span>
            </div>
            <div className="flex items-center mb-2">
              <Bath className="mr-2 text-gray-500" />
              <span>{property.bathrooms}卫</span>
            </div>
            <div className="flex items-center mb-2">
              <Building className="mr-2 text-gray-500" />
              <span>{property.floor}/{property.totalFloors}层</span>
            </div>
            <p className="mb-2">建造年份: {property.buildYear}</p>
            <p className="mb-2">类型: {property.type}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">拍卖信息</h3>
            <div className="flex items-center mb-2">
              <Eye className="mr-2 text-gray-500" />
              <span>{property.views} 次浏览</span>
            </div>
            <div className="flex items-center mb-2">
              <Users className="mr-2 text-gray-500" />
              <span>{property.bids} 人报名</span>
            </div>
            <p className="mb-4">状态: {property.status}</p>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
              立即报名
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetail