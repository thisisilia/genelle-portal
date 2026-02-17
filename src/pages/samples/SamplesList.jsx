import { Link } from 'react-router-dom';
import { samples } from '../../data/mockData';
import { Plus, Search } from 'lucide-react';

export default function SamplesList() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div><h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600 }}>Sample Tracking</h1><p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>{samples.length} registered samples</p></div>
                <Link to="/samples/register" className="btn btn-accent"><Plus size={16} /> Register Sample</Link>
            </div>
            <div style={{ marginBottom: 16 }}><div className="search-bar"><Search size={16} color="var(--text-muted)" /><input placeholder="Search by barcode, client, or sample ID..." /></div></div>
            <div className="table-container"><table><thead><tr><th>Sample ID</th><th>Client</th><th>Type</th><th>Barcode</th><th>Status</th><th>Registered</th><th>Lab</th><th>Actions</th></tr></thead><tbody>
                {samples.map(s => (
                    <tr key={s.id}><td style={{ fontFamily: 'monospace' }}>{s.id}</td><td>{s.client}</td><td><span className="badge badge-info">{s.type}</span></td><td style={{ fontFamily: 'monospace', fontSize: 'var(--text-xs)' }}>{s.barcode}</td><td><span className={`badge ${s.status === 'Completed' || s.status === 'Results Ready' ? 'badge-success' : s.status === 'At Lab' ? 'badge-info' : s.status === 'In Transit' ? 'badge-warning' : 'badge-neutral'}`}>{s.status}</span></td><td>{s.registered}</td><td>{s.lab}</td><td><Link to={`/samples/${s.id}`} className="btn btn-sm btn-outline">View</Link></td></tr>
                ))}
            </tbody></table></div>
        </div>
    );
}
