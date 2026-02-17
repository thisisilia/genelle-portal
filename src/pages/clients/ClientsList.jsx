import { useState } from 'react';
import { Link } from 'react-router-dom';
import { clients } from '../../data/mockData';
import { Plus, Search, Filter, Download } from 'lucide-react';

export default function ClientsList() {
    const [search, setSearch] = useState('');
    const filtered = clients.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()));
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div><h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600 }}>Clients</h1><p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>{clients.length} total clients</p></div>
                <div style={{ display: 'flex', gap: 8 }}>
                    <button className="btn btn-outline" onClick={() => alert('Exporting clients as CSV...')}><Download size={16} /> Export</button>
                    <Link to="/clients/create" className="btn btn-accent"><Plus size={16} /> New Client</Link>
                </div>
            </div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                <div className="search-bar"><Search size={16} color="var(--text-muted)" /><input placeholder="Search clients..." value={search} onChange={e => setSearch(e.target.value)} /></div>
                <button className="btn btn-outline" onClick={() => alert('Filter options: Status, Consent, Date range')}><Filter size={16} /> Filters</button>
            </div>
            <div className="table-container">
                <table>
                    <thead><tr><th>Client ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Consent</th><th>Status</th><th>Tests</th><th>Actions</th></tr></thead>
                    <tbody>
                        {filtered.map(c => (
                            <tr key={c.id}>
                                <td style={{ fontFamily: 'monospace', fontSize: 'var(--text-xs)' }}>{c.id}</td>
                                <td><Link to={`/clients/${c.id}`} style={{ fontWeight: 500 }}>{c.name}</Link></td>
                                <td style={{ color: 'var(--text-secondary)' }}>{c.email}</td>
                                <td style={{ color: 'var(--text-secondary)' }}>{c.phone}</td>
                                <td><span className={`badge ${c.consent === 'Completed' ? 'badge-success' : c.consent === 'Pending' || c.consent === 'Sent' ? 'badge-warning' : 'badge-danger'}`}>{c.consent}</span></td>
                                <td><span className={`badge ${c.status === 'Active' ? 'badge-success' : c.status === 'Pending' ? 'badge-warning' : 'badge-neutral'}`}>{c.status}</span></td>
                                <td>{c.tests}</td>
                                <td><Link to={`/clients/${c.id}`} className="btn btn-sm btn-outline">View</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination"><span>Showing {filtered.length} of {clients.length} clients</span><div style={{ display: 'flex', gap: 4 }}><button className="btn btn-sm btn-outline" disabled>Previous</button><button className="btn btn-sm btn-primary">1</button><button className="btn btn-sm btn-outline" onClick={() => alert('Page 2 — demo only has 1 page')}>2</button><button className="btn btn-sm btn-outline" onClick={() => alert('Page 2 — demo only has 1 page')}>Next</button></div></div>
            </div>
        </div>
    );
}
