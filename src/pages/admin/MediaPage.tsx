import React, { useState } from 'react';
import { Image, Upload, Search, Filter, Trash } from 'lucide-react';
const mediaItems = [{
  id: 1,
  name: 'hero-image.jpg',
  type: 'image',
  size: '2.4 MB',
  uploadedAt: '2024-02-20',
  url: 'https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-4.0.3'
}, {
  id: 2,
  name: 'marina-view.jpg',
  type: 'image',
  size: '1.8 MB',
  uploadedAt: '2024-02-18',
  url: 'https://images.unsplash.com/photo-1587365001066-8263b7061a38?ixlib=rb-4.0.3'
}, {
  id: 3,
  name: 'restaurant.jpg',
  type: 'image',
  size: '3.1 MB',
  uploadedAt: '2024-02-15',
  url: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3'
}];
export const MediaPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const toggleSelect = (id: number) => {
    setSelectedItems(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Media Library</h1>
        <button className="inline-flex items-center space-x-2 bg-navy-900 text-white px-4 py-2 rounded-md hover:bg-navy-800 transition-colors">
          <Upload size={20} />
          <span>Upload Media</span>
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" placeholder="Search media..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-400" />
              <select value={filterType} onChange={e => setFilterType(e.target.value)} className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-navy-900/20">
                <option value="all">All Types</option>
                <option value="image">Images</option>
                <option value="video">Videos</option>
                <option value="document">Documents</option>
              </select>
            </div>
            {selectedItems.length > 0 && <button className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700">
                <Trash size={20} />
                <span>Delete Selected</span>
              </button>}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mediaItems.map(item => <div key={item.id} className={`group relative rounded-lg border-2 overflow-hidden ${selectedItems.includes(item.id) ? 'border-navy-900' : 'border-transparent'}`} onClick={() => toggleSelect(item.id)}>
              <div className="aspect-square relative">
                <img src={item.url} alt={item.name} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-black/50 transition-opacity ${selectedItems.includes(item.id) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-medium truncate">{item.name}</p>
                    <p className="text-sm text-gray-300">
                      {item.size} • {item.uploadedAt}
                    </p>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};