import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard, Users, ShoppingCart, TestTubes, FileText,
    Package, DollarSign, FolderOpen, Settings, HelpCircle, ArrowLeftRight,
    ChevronDown, ChevronRight, Building2, Menu, ChevronUp, Shield
} from 'lucide-react';

const roleConfig = {
    reseller: {
        label: 'Reseller Admin',
        dashboard: '/dashboard/reseller',
        menu: [
            { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard/reseller' },
            { label: 'Clients', icon: Users, path: '/clients' },
            { label: 'Orders', icon: ShoppingCart, path: '/orders' },
            { label: 'Samples', icon: TestTubes, path: '/samples' },
            { label: 'Reports', icon: FileText, path: '/reports' },
            { label: 'Inventory', icon: Package, path: '/inventory' },
            {
                label: 'Finance', icon: DollarSign, path: '/finance',
                sub: [
                    { label: 'Dashboard', path: '/finance' },
                    { label: 'Commissions', path: '/finance/commissions' },
                    { label: 'Invoices', path: '/finance/invoices' },
                    { label: 'Payments', path: '/finance/payments' },
                    { label: 'Amount Owed', path: '/finance/owed' },
                    { label: 'Bank Details', path: '/finance/bank' },
                ]
            },
            { label: 'Documents', icon: FolderOpen, path: '/documents' },
            {
                label: 'Settings', icon: Settings, path: '/settings',
                sub: [
                    { label: 'Organization', path: '/settings' },
                    { label: 'Users', path: '/settings' },
                    { label: 'Roles & Permissions', path: '/settings' },
                    { label: '2FA Settings', path: '/settings' },
                ]
            },
            { label: 'Support', icon: HelpCircle, path: '/support' },
            { label: 'Client Transfer', icon: ArrowLeftRight, path: '/transfer' },
        ]
    },
    master: {
        label: 'Master Reseller',
        dashboard: '/dashboard/master',
        menu: [
            { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard/master' },
            { label: 'Resellers', icon: Building2, path: '/clients' },
            { label: 'All Orders', icon: ShoppingCart, path: '/orders' },
            { label: 'Reports', icon: FileText, path: '/reports' },
            { label: 'Inventory', icon: Package, path: '/inventory' },
            {
                label: 'Finance', icon: DollarSign, path: '/finance',
                sub: [
                    { label: 'Overview', path: '/finance' },
                    { label: 'Commissions', path: '/finance/commissions' },
                    { label: 'Invoices', path: '/finance/invoices' },
                ]
            },
            { label: 'Documents', icon: FolderOpen, path: '/documents' },
            { label: 'Settings', icon: Settings, path: '/settings' },
            { label: 'Support', icon: HelpCircle, path: '/support' },
        ]
    },
    practitioner: {
        label: 'Practitioner',
        dashboard: '/dashboard/practitioner',
        menu: [
            { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard/practitioner' },
            { label: 'My Clients', icon: Users, path: '/clients' },
            { label: 'Orders', icon: ShoppingCart, path: '/orders' },
            { label: 'Samples', icon: TestTubes, path: '/samples' },
            { label: 'Reports', icon: FileText, path: '/reports' },
            { label: 'Documents', icon: FolderOpen, path: '/documents' },
            { label: 'Support', icon: HelpCircle, path: '/support' },
        ]
    },
    finance: {
        label: 'Finance',
        dashboard: '/dashboard/finance',
        menu: [
            { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard/finance' },
            {
                label: 'Finance', icon: DollarSign, path: '/finance',
                sub: [
                    { label: 'Dashboard', path: '/finance' },
                    { label: 'Commissions', path: '/finance/commissions' },
                    { label: 'Invoices', path: '/finance/invoices' },
                    { label: 'Payments', path: '/finance/payments' },
                    { label: 'Amount Owed', path: '/finance/owed' },
                    { label: 'Bank Details', path: '/finance/bank' },
                ]
            },
            { label: 'Reports', icon: FileText, path: '/reports' },
            { label: 'Documents', icon: FolderOpen, path: '/documents' },
            { label: 'Support', icon: HelpCircle, path: '/support' },
        ]
    },
};

export default function Sidebar({ collapsed, onToggle }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [openMenus, setOpenMenus] = useState({});
    const [role, setRole] = useState('reseller');
    const [roleSwitcherOpen, setRoleSwitcherOpen] = useState(false);

    const config = roleConfig[role];

    const toggleMenu = (label) => {
        setOpenMenus(prev => ({ ...prev, [label]: !prev[label] }));
    };

    const isActive = (path) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path + '/'));

    const switchRole = (newRole) => {
        setRole(newRole);
        setRoleSwitcherOpen(false);
        setOpenMenus({});
        navigate(roleConfig[newRole].dashboard);
    };

    return (
        <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
                {!collapsed && (
                    <div className="sidebar-logo">
                        <Building2 size={24} />
                        <div>
                            <h2>Genelle<span>Health</span></h2>
                            <small>Partner Portal</small>
                        </div>
                    </div>
                )}
                <button className="sidebar-toggle" onClick={onToggle}>
                    <Menu size={20} />
                </button>
            </div>

            {/* Role Switcher */}
            {!collapsed && (
                <div style={{ padding: '0 12px', marginBottom: 8, position: 'relative' }}>
                    <button
                        onClick={() => setRoleSwitcherOpen(!roleSwitcherOpen)}
                        style={{
                            width: '100%', padding: '10px 12px', background: 'rgba(255,255,255,0.08)',
                            border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius)',
                            color: 'var(--sidebar-text)', cursor: 'pointer', display: 'flex',
                            justifyContent: 'space-between', alignItems: 'center', fontSize: 'var(--text-xs)',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <Shield size={14} />
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontWeight: 600 }}>{config.label}</div>
                                <div style={{ opacity: 0.6, fontSize: 10, marginTop: 1 }}>Switch role</div>
                            </div>
                        </div>
                        {roleSwitcherOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    {roleSwitcherOpen && (
                        <div style={{
                            position: 'absolute', top: '100%', left: 12, right: 12, zIndex: 50,
                            background: '#1e293b', border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: 'var(--radius)', marginTop: 4, overflow: 'hidden',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                        }}>
                            {Object.entries(roleConfig).map(([key, cfg]) => (
                                <button
                                    key={key}
                                    onClick={() => switchRole(key)}
                                    style={{
                                        width: '100%', padding: '10px 14px', background: key === role ? 'rgba(255,255,255,0.1)' : 'transparent',
                                        border: 'none', color: 'var(--sidebar-text)', cursor: 'pointer',
                                        fontSize: 'var(--text-xs)', textAlign: 'left', display: 'flex',
                                        alignItems: 'center', gap: 8,
                                    }}
                                    onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.08)'}
                                    onMouseLeave={e => e.target.style.background = key === role ? 'rgba(255,255,255,0.1)' : 'transparent'}
                                >
                                    {key === role && <span style={{ color: 'var(--accent)' }}>●</span>}
                                    <span style={{ fontWeight: key === role ? 600 : 400 }}>{cfg.label}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}

            <nav className="sidebar-nav">
                {config.menu.map(item => (
                    <div key={item.label} className="nav-group">
                        {item.sub ? (
                            <>
                                <button
                                    className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
                                    onClick={() => toggleMenu(item.label)}
                                >
                                    <item.icon size={20} />
                                    {!collapsed && (
                                        <>
                                            <span>{item.label}</span>
                                            {openMenus[item.label] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                        </>
                                    )}
                                </button>
                                {openMenus[item.label] && !collapsed && (
                                    <div className="nav-submenu">
                                        {item.sub.map(sub => (
                                            <NavLink
                                                key={sub.path + sub.label}
                                                to={sub.path}
                                                className={({ isActive }) => `nav-subitem ${isActive ? 'active' : ''}`}
                                                end
                                            >
                                                {sub.label}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <NavLink
                                to={item.path}
                                className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
                            >
                                <item.icon size={20} />
                                {!collapsed && <span>{item.label}</span>}
                            </NavLink>
                        )}
                    </div>
                ))}
            </nav>

            {!collapsed && (
                <div className="sidebar-footer">
                    <NavLink to="/onboarding/interest" className="nav-item">
                        <Building2 size={20} />
                        <span>Partner Onboarding</span>
                    </NavLink>
                </div>
            )}
        </aside>
    );
}
