import { Link } from 'react-router-dom';
import { documents } from '../../data/mockData';
import { Search, Upload, FileText, Download } from 'lucide-react';

export default function DocumentHub() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div><h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600 }}>Document Hub</h1><p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>All contracts, reports, and documents</p></div>
                <button className="btn btn-accent" onClick={() => alert('Upload dialog would open here — drag & drop supported')}><Upload size={16} /> Upload Document</button>
            </div>
            <div style={{ marginBottom: 16 }}><div className="search-bar"><Search size={16} color="var(--text-muted)" /><input placeholder="Search documents..." /></div></div>
            <div className="table-container"><table><thead><tr><th>Document</th><th>Type</th><th>Category</th><th>Uploaded</th><th>Size</th><th>Actions</th></tr></thead><tbody>
                {documents.map(d => (
                    <tr key={d.id}><td style={{ fontWeight: 500, display: 'flex', alignItems: 'center', gap: 8 }}><FileText size={16} color="var(--primary)" />{d.name}</td><td><span className="badge badge-neutral">{d.type}</span></td><td>{d.category}</td><td>{d.uploaded}</td><td>{d.size}</td><td><button className="btn btn-sm btn-outline" onClick={() => alert(`Downloading ${d.name}...`)}><Download size={12} /> Download</button></td></tr>
                ))}
            </tbody></table></div>
        </div>
    );
}
