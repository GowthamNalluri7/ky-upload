
import React from 'react';
import { FiSearch, FiBell, FiSettings } from 'react-icons/fi';

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header w-11/12 mx-60">
      <div className="header-left">
        <h1>Sales Update</h1>
      </div>

      <div className="header-center">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search items..."
            className="search-input"
          />
        </div>
      </div>

      <div className="header-right mx-24">
        <div className="header-actions">
          <button className="notification-btn">
            <FiBell />
            <span className="notification-badge">9</span>
          </button>
          <button className="notification-btn">
            <FiSettings />
            <span className="notification-badge">3</span>
          </button>
        </div>

        <div className="view-selector">
          <span>View: </span>
          <select className="view-dropdown">
            <option value="month">Month</option>
            <option value="week">Week</option>
            <option value="day">Day</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;

