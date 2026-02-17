import { Bell, Search, LogOut } from 'lucide-react';
import { currentUser } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    return (
        <header className="header">
            <div className="header-left">
                <div className="search-bar">
                    <Search size={16} color="var(--text-muted)" />
                    <input placeholder="Search clients, orders, samples..." />
                </div>
            </div>
            <div className="header-right">
                <button className="header-icon-btn" title="Notifications">
                    <Bell size={20} />
                    <span className="notif-dot"></span>
                </button>
                <div className="header-user">
                    <div className="avatar">{currentUser.avatar}</div>
                    <div className="user-info">
                        <span className="user-name">{currentUser.name}</span>
                        <span className="user-role">{currentUser.role}</span>
                    </div>
                </div>
                <button className="header-icon-btn" title="Logout" onClick={() => navigate('/auth/login')}>
                    <LogOut size={18} />
                </button>
            </div>
        </header>
    );
}
