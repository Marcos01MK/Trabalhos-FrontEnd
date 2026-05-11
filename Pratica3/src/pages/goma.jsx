import React from 'react';
import './gomado.css';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

const goma = ({ children }) => {
  return (
    <div className="goma">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;