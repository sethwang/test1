import React from 'react'

const FilterSection: React.FC = () => {
  const categories = [
    '住宅用房', '家具用品', '工业用房', '农业用房', '机动车', '船舶', '家电空调工具', '手机', '电脑', '家电数码', '家具', '电器', '白酒', '珠宝首饰及手表', '其他'
  ]
  const locations = [
    '全部', '上海', '南京', '北京', '河南', '广东', '四川', '江苏', '山东', '广西', '安徽', '重庆', '湖南', '福建', '江西', '安徽', '江苏', '内蒙古'
  ]
  const propertyTypes = [
    '诉讼资产', '破产资产', '金融资产', '国有资产', '海关资产', '涉案资产', '事业资产', '高校资产', '自行处置'
  ]
  const specialFilters = ['可议价', '全程服务', '可贷款']

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="mb-4">
        <span className="font-bold mr-2">分类:</span>
        {categories.map((category, index) => (
          <button key={index} className="px-2 py-1 mr-2 mb-2 text-sm border border-gray-300 rounded-full hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
            {category}
          </button>
        ))}
      </div>
      <div className="mb-4">
        <span className="font-bold mr-2">标的物所在地:</span>
        {locations.map((location, index) => (
          <button key={index} className={`px-2 py-1 mr-2 mb-2 text-sm border rounded-full hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 ${location === '上海' ? 'bg-red-600 text-white' : 'border-gray-300'}`}>
            {location}
          </button>
        ))}
      </div>
      <div className="mb-4">
        <span className="font-bold mr-2">资产来源:</span>
        {propertyTypes.map((type, index) => (
          <button key={index} className="px-2 py-1 mr-2 mb-2 text-sm border border-gray-300 rounded-full hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
            {type}
          </button>
        ))}
      </div>
      <div>
        <span className="font-bold mr-2">特色:</span>
        {specialFilters.map((filter, index) => (
          <button key={index} className="px-2 py-1 mr-2 mb-2 text-sm border border-gray-300 rounded-full hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
            {filter}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterSection