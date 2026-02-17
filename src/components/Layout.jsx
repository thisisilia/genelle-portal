import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Breadcrumb from './Breadcrumb';
import './Sidebar.css';
import './Header.css';

export default function Layout() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="layout">
            <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
            <div className="main-area" style={{ marginLeft: collapsed ? 'var(--sidebar-collapsed)' : 'var(--sidebar-width)', transition: 'margin-left 0.2s ease' }}>
                <Header />
                <main className="page-content">
                    <Breadcrumb />
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
