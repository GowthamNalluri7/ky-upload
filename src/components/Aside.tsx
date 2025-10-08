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
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="user-profile">
          <div className="avatar-placeholder"></div>
          <div className="user-info">
            <h4>User Name</h4>
            <p>#ID 123456789</p>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
            onClick={() => setActiveItem(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

