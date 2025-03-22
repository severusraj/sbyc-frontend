import React, { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash } from 'lucide-react';
import { CreateFacilityModal } from '../../components/admin/facilities/CreateFacilityModal';
import { DeleteFacilityModal } from '../../components/admin/facilities/DeleteFacilityModal';
import { useToast } from '../../hooks/useToast';
const facilities = [{
  id: 1,
  name: 'Swimming Pool',
  type: 'Recreation',
  status: 'operational',
  lastMaintenance: '2024-02-15',
  nextMaintenance: '2024-03-15',
  location: 'Main Building',
  image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3'
}, {
  id: 2,
  name: 'Fitness Center',
  type: 'Fitness',
  status: 'maintenance',
  lastMaintenance: '2024-02-20',
  nextMaintenance: '2024-02-22',
  location: 'East Wing',
  image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3'
}, {
  id: 3,
  name: 'Pickleball Courts',
  type: 'Sports',
  status: 'operational',
  lastMaintenance: '2024-02-10',
  nextMaintenance: '2024-03-10',
  location: 'Outdoor Area',
  image: 'https://images.unsplash.com/photo-1618551763300-dc7eb8ce3560?ixlib=rb-4.0.3'
}];
export const FacilitiesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [facilityToDelete, setFacilityToDelete] = useState<any>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const {
    showToast
  } = useToast();
  const handleCreateFacility = (facilityData: any) => {
    showToast('Facility created successfully!', 'success');
  };
  const handleDeleteFacility = async () => {
    if (!facilityToDelete) return;
    setIsDeleting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      showToast('Facility deleted successfully!', 'success');
      setFacilityToDelete(null);
    } catch (error) {
      showToast('Failed to delete facility', 'error');
    } finally {
      setIsDeleting(false);
    }
  };
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Facilities Management
        </h1>
        <button onClick={() => setShowCreateModal(true)} className="inline-flex items-center space-x-2 bg-navy-900 text-white px-4 py-2 rounded-md hover:bg-navy-800 transition-colors">
          <Plus size={20} />
          <span>Add Facility</span>
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" placeholder="Search facilities..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-400" />
              <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-navy-900/20">
                <option value="all">All Status</option>
                <option value="operational">Operational</option>
                <option value="maintenance">Under Maintenance</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map(facility => <div key={facility.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video relative">
                <img src={facility.image} alt={facility.name} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${facility.status === 'operational' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {facility.status}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {facility.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{facility.type}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Location: {facility.location}</p>
                  <p>Last Maintenance: {facility.lastMaintenance}</p>
                  <p>Next Maintenance: {facility.nextMaintenance}</p>
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                  <button className="p-2 text-gray-600 hover:text-navy-900">
                    <Edit size={18} />
                  </button>
                  <button onClick={() => setFacilityToDelete(facility)} className="p-2 text-gray-600 hover:text-red-600">
                    <Trash size={18} />
                  </button>
                </div>
              </div>
            </div>)}
        </div>
      </div>
      {showCreateModal && <CreateFacilityModal onClose={() => setShowCreateModal(false)} onSubmit={handleCreateFacility} />}
      {facilityToDelete && <DeleteFacilityModal facilityName={facilityToDelete.name} onClose={() => setFacilityToDelete(null)} onConfirm={handleDeleteFacility} isLoading={isDeleting} />}
    </div>;
};