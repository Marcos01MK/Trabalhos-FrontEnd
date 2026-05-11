import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import './Layout.css';

const Layout = ({ children }) => {
  const sidebarItems = [
    { label: 'Dashboard', link: '/dashboard' },
    { label: 'Faltas', link: '/faltas' },
    { label: 'Notas', link: '/notas' },
    { label: 'Boletos', link: '/boletos' },
    { label: 'Requerimentos', link: '/requerimentos' },
    { label: 'Sair', link: '/sair' },
  ];

  return (
    <div className="layout">
      <Sidebar items={sidebarItems} />
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