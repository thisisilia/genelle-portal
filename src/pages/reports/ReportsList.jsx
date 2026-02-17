import { useState } from 'react';
import { Link } from 'react-router-dom';
import { reports } from '../../data/mockData';
import { Search, Share2 } from 'lucide-react';

export default function ReportsList() {
    return (
        <div>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 4 }}>Reports</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 24 }}>Client health reports and analysis results</p>
            <div style={{ marginBottom: 16 }}><div className="search-bar"><Search size={16} color="var(--text-muted)" /><input placeholder="Search reports..." /></div></div>
            <div className="table-container"><table><thead><tr><th>Report ID</th><th>Client</th><th>Type</th><th>Status</th><th>Generated</th><th>Shared</th><th>Actions</th></tr></thead><tbody>
                {reports.map(r => (
                    <tr key={r.id}><td style={{ fontFamily: 'monospace' }}>{r.id}</td><td>{r.client}</td><td>{r.type}</td><td><span className={`badge ${r.status === 'Ready' ? 'badge-success' : 'badge-warning'}`}>{r.status}</span></td><td>{r.generated}</td><td>{r.shared ? <span className="badge badge-info">Shared</span> : <span className="badge badge-neutral">Not Shared</span>}</td><td style={{ display: 'flex', gap: 4 }}>{r.status === 'Ready' && <><Link to={`/reports/${r.id}`} className="btn btn-sm btn-outline">View</Link><Link to={`/reports/${r.id}/share`} className="btn btn-sm btn-accent"><Share2 size={12} /> Share</Link></>}</td></tr>
                ))}
            </tbody></table></div>
        </div>
    );
}
