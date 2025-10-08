import React, { useState } from 'react';
import {
  FiHome,
  FiUsers,
  FiTrendingUp,
  FiPackage,
  FiMapPin,
  FiTruck,
  FiCreditCard,
  FiFileText,
  FiCalendar,
  FiFolder,
  FiLifeBuoy
} from 'react-icons/fi';

interface SidebarProps { }

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [activeItem, setActiveItem] = useState('sales-update');

  const menuItems: MenuItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <FiHome /> },
    { id: 'accounts', label: 'Accounts', icon: <FiUsers /> },
    { id: 'sales-update', label: 'Sales Update', icon: <FiTrendingUp />, active: true },
    { id: 'product-list', label: 'Product List', icon: <FiPackage /> },
    { id: 'store-list', label: 'Store List', icon: <FiMapPin /> },
    { id: 'delivery-update', label: 'Delivery Update', icon: <FiTruck /> },
    { id: 'payment', label: 'Payment', icon: <FiCreditCard /> },
    { id: 'invoice', label: 'Invoice', icon: <FiFileText /> },
    { id: 'task-schedule', label: 'Task Schedule', icon: <FiCalendar /> },
    { id: 'documents', label: 'Documents', icon: <FiFolder /> },
    { id: 'support', label: 'Support', icon: <FiLifeBuoy /> },
  ];

  return (
    <div className="fixed left-0 top-0 w-64 h-screen bg-gradient-to-b from-slate-800 to-slate-700 text-white overflow-y-auto">
      {/* User Profile Section */}
      <div className="p-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 border-2 border-white/20" />
          <div>
            <h4 className="text-base font-semibold">User Name</h4>
            <p className="text-xs text-white/70">#ID 123456789</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="py-2.5">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`
              w-full flex items-center gap-3 px-5 py-3.5 
              text-sm font-medium transition-all duration-200
              ${activeItem === item.id
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border-r-4 border-blue-400'
                : 'text-white/80 hover:bg-white/10 hover:text-white'
              }
            `}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

