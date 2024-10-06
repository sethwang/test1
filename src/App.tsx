import React, { useState } from 'react'
import { Search, Home } from 'lucide-react'
import PropertyList from './components/PropertyList'
import SearchForm from './components/SearchForm'
import FilterSection from './components/FilterSection'
import PropertyDetail from './components/PropertyDetail'

// 更新的示例数据
const mockProperties = [
  { id: 1, title: '(松涛) 巨亏出售金山万达公寓地中海风格精装全套家具家电保养好', price: 22.5, originalPrice: 30, views: 13523, bids: 20, status: '正在进行', imageUrl: 'https://source.unsplash.com/400x300/?apartment,interior&sig=1', address: '上海市金山区万达广场', area: 89, bedrooms: 2, bathrooms: 1, floor: 8, totalFloors: 20, buildYear: 2015, type: '住宅用房' },
  { id: 2, title: '上海市闵行区鑫都路2711弄25号603室房产', price: 265, originalPrice: 472, views: 8282, bids: 4, status: '正在进行', imageUrl: 'https://source.unsplash.com/400x300/?apartment,exterior&sig=2', address: '上海市闵行区鑫都路2711弄25号603室', area: 120, bedrooms: 3, bathrooms: 2, floor: 6, totalFloors: 18, buildYear: 2010, type: '住宅用房' },
  { id: 3, title: '上海市长宁区长宁路1666弄2号302室', price: 516.48, originalPrice: 807, views: 23007, bids: 1, status: '正在进行', imageUrl: 'https://source.unsplash.com/400x300/?apartment,building&sig=3', address: '上海市长宁区长宁路1666弄2号302室', area: 150, bedrooms: 4, bathrooms: 2, floor: 3, totalFloors: 12, buildYear: 2005, type: '住宅用房' },
  { id: 4, title: '上海市浦东新区周浦镇环镇路69弄20号1204室', price: 555.65, originalPrice: 694.57, views: 9263, bids: 0, status: '正在进行', imageUrl: 'https://source.unsplash.com/400x300/?apartment,modern&sig=4', address: '上海市浦东新区周浦镇环镇路69弄20号1204室', area: 180, bedrooms: 4, bathrooms: 3, floor: 12, totalFloors: 30, buildYear: 2018, type: '住宅用房' },
  { id: 5, title: '上海市静安区南京西路1788号601室办公房产', price: 1200, originalPrice: 1500, views: 15000, bids: 8, status: '正在进行', imageUrl: 'https://source.unsplash.com/400x300/?office,interior&sig=5', address: '上海市静安区南京西路1788号601室', area: 300, bedrooms: 0, bathrooms: 2, floor: 6, totalFloors: 20, buildYear: 2012, type: '工业用房' },
  { id: 6, title: '上海市黄浦区外滩18号整栋商业地产', price: 50000, originalPrice: 60000, views: 50000, bids: 3, status: '即将开始', imageUrl: 'https://source.unsplash.com/400x300/?commercial,building&sig=6', address: '上海市黄浦区外滩18号', area: 5000, bedrooms: 0, bathrooms: 20, floor: 1, totalFloors: 8, buildYear: 1920, type: '商业用房' },
  { id: 7, title: '上海市徐汇区衡山路888号高档公寓', price: 880, originalPrice: 1000, views: 30000, bids: 15, status: '正在进行', imageUrl: 'https://source.unsplash.com/400x300/?luxury,apartment&sig=7', address: '上海市徐汇区衡山路888号', area: 200, bedrooms: 3, bathrooms: 2, floor: 18, totalFloors: 30, buildYear: 2019, type: '住宅用房' },
  { id: 8, title: '上海市虹口区四川北路1888号写字楼整层', price: 3500, originalPrice: 4000, views: 18000, bids: 5, status: '即将开始', imageUrl: 'https://source.unsplash.com/400x300/?office,modern&sig=8', address: '上海市虹口区四川北路1888号', area: 1000, bedrooms: 0, bathrooms: 6, floor: 15, totalFloors: 35, buildYear: 2017, type: '工业用房' },
  { id: 9, title: '上海市杨浦区五角场商圈临街商铺', price: 1800, originalPrice: 2200, views: 25000, bids: 10, status: '正在进行', imageUrl: 'https://source.unsplash.com/400x300/?shop,street&sig=9', address: '上海市杨浦区五角场商圈', area: 150, bedrooms: 0, bathrooms: 1, floor: 1, totalFloors: 6, buildYear: 2010, type: '商业用房' },
  { id: 10, title: '上海市宝山区顾村公园附近独栋别墅', price: 1500, originalPrice: 1800, views: 12000, bids: 2, status: '即将开始', imageUrl: 'https://source.unsplash.com/400x300/?villa,garden&sig=10', address: '上海市宝山区顾村公园附近', area: 500, bedrooms: 5, bathrooms: 4, floor: 3, totalFloors: 3, buildYear: 2016, type: '住宅用房' }
]

function App() {
  const [searchResults, setSearchResults] = useState(mockProperties)
  const [selectedProperty, setSelectedProperty] = useState(null)

  const handleSearch = (criteria) => {
    // 在实际应用中，这里应该根据搜索条件过滤 mockProperties
    setSearchResults(mockProperties)
  }

  const handlePropertyClick = (property) => {
    setSelectedProperty(property)
  }

  const handleBackToList = () => {
    setSelectedProperty(null)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img src="https://img.alicdn.com/imgextra/i4/O1CN01cZVZdx1ky4lnN2Ywg_!!6000000004748-2-tps-80-80.png" alt="阿里资产" className="h-10 w-10 mr-2" />
            <h1 className="text-2xl font-bold text-red-600">阿里资产</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-red-600">首页</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600">司法</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600">破产</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600">金融</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600">政府</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600">央企</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600">海关</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600">招商推介</a></li>
            </ul>
          </nav>
          <div className="flex items-center">
            <span className="text-red-600 mr-2">地区筛选</span>
            <input type="text" placeholder="标的物名称、企业名称" className="border border-gray-300 rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" />
            <button className="bg-red-600 text-white rounded-full px-4 py-1 ml-2">搜索</button>
          </div>
        </div>
      </header>

      <main className="container mx-auto mt-6 px-4">
        {selectedProperty ? (
          <PropertyDetail property={selectedProperty} onBack={handleBackToList} />
        ) : (
          <>
            <FilterSection />
            <PropertyList properties={searchResults} onPropertyClick={handlePropertyClick} />
          </>
        )}
      </main>

      <footer className="bg-gray-800 text-white mt-8 py-4">
        <div className="container mx-auto text-center">
          &copy; 2024 阿里资产. 保留所有权利.
        </div>
      </footer>
    </div>
  )
}

export default App