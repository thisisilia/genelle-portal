import { useState } from 'react';
import { users } from '../../data/mockData';
import { Plus, Edit, Trash2, CheckCircle } from 'lucide-react';

export default function Settings() {
    const [tab, setTab] = useState('org');
    const [saved, setSaved] = useState(false);
    const showSaved = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };
    return (
        <div>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 24 }}>Settings</h1>
            <div className="tabs" style={{ marginBottom: 24 }}>
                {[['org', 'Organization'], ['users', 'User Management'], ['notifications', 'Notifications'], ['security', 'Security']].map(([k, l]) => <button key={k} className={`tab ${tab === k ? 'active' : ''}`} onClick={() => setTab(k)}>{l}</button>)}
            </div>
            {tab === 'org' && (
                <div className="card" style={{ maxWidth: 600 }}>
                    <h3 style={{ fontWeight: 600, marginBottom: 16 }}>Organization Profile</h3>
                    <div className="form-group"><label className="form-label">Organization Name</label><input className="form-input" defaultValue="Dubai Health Clinic" /></div>
                    <div className="form-group"><label className="form-label">Organization Type</label><select className="form-select" defaultValue="Clinic"><option>Clinic</option><option>Hospital</option><option>Pharmacy</option><option>Wellness Center</option></select></div>
                    <div className="form-group"><label className="form-label">Address</label><input className="form-input" defaultValue="Sheikh Zayed Road, Dubai" /></div>
                    <div className="form-row"><div className="form-group"><label className="form-label">Phone</label><input className="form-input" defaultValue="+971 4 555 0001" /></div><div className="form-group"><label className="form-label">Website</label><input className="form-input" defaultValue="www.dubaihealthclinic.ae" /></div></div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}><button className="btn btn-primary" onClick={showSaved}>Save Changes</button>{saved && <span className="badge badge-success">Saved ✓</span>}</div>
                </div>
            )}
            {tab === 'users' && (
                <div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}><button className="btn btn-accent" onClick={() => alert('Add User form would open here')}><Plus size={16} /> Add User</button></div>
                    <div className="table-container"><table><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Actions</th></tr></thead><tbody>
                        {users.map(u => (
                            <tr key={u.id}><td style={{ fontWeight: 500 }}>{u.name}</td><td>{u.email}</td><td><span className="badge badge-info">{u.role}</span></td><td><span className={`badge ${u.status === 'Active' ? 'badge-success' : 'badge-neutral'}`}>{u.status}</span></td><td style={{ display: 'flex', gap: 4 }}><button className="btn btn-sm btn-outline" onClick={() => alert(`Edit user: ${u.name}`)}><Edit size={12} /></button><button className="btn btn-sm btn-outline" style={{ color: 'var(--danger)' }} onClick={() => alert(`Confirm delete: ${u.name}`)}><Trash2 size={12} /></button></td></tr>
                        ))}
                    </tbody></table></div>
                </div>
            )}
            {tab === 'notifications' && (
                <div className="card" style={{ maxWidth: 600 }}>
                    <h3 style={{ fontWeight: 600, marginBottom: 16 }}>Notification Preferences</h3>
                    {['New order confirmation', 'Sample status updates', 'Report ready alerts', 'Commission payments', 'Low inventory warnings', 'New client registrations'].map(n => (
                        <label key={n} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--border-light)', cursor: 'pointer' }}>
                            <span style={{ fontSize: 'var(--text-sm)' }}>{n}</span><input type="checkbox" defaultChecked />
                        </label>
                    ))}
                    <button className="btn btn-primary" style={{ marginTop: 16 }} onClick={showSaved}>Save Preferences</button>
                    {saved && <span className="badge badge-success" style={{ marginTop: 8, display: 'inline-block' }}>Preferences saved ✓</span>}
                </div>
            )}
            {tab === 'security' && (
                <div className="card" style={{ maxWidth: 600 }}>
                    <h3 style={{ fontWeight: 600, marginBottom: 16 }}>Security Settings</h3>
                    <div className="form-group"><label className="form-label">Current Password</label><input className="form-input" type="password" /></div>
                    <div className="form-group"><label className="form-label">New Password</label><input className="form-input" type="password" /></div>
                    <div className="form-group"><label className="form-label">Confirm Password</label><input className="form-input" type="password" /></div>
                    <button className="btn btn-primary" style={{ marginBottom: 24 }} onClick={showSaved}>Change Password</button>
                    {saved && <span className="badge badge-success" style={{ marginBottom: 16, display: 'inline-block' }}>Password changed ✓</span>}
                    <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '16px 0' }} />
                    <h3 style={{ fontWeight: 600, marginBottom: 12 }}>Two-Factor Authentication</h3>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 'var(--text-sm)' }}><input type="checkbox" defaultChecked /> Enable 2FA via SMS</label>
                </div>
            )}
        </div>
    );
}
