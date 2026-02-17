import { Link } from 'react-router-dom';
import { clients } from '../../data/mockData';

export default function SampleRegister() {
    return (
        <div>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 4 }}>Register Sample</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 24 }}>Register a new sample from a collection kit</p>
            <div className="card" style={{ maxWidth: 600 }}>
                <div className="form-group"><label className="form-label">Barcode / Kit ID</label><input className="form-input" placeholder="Scan or enter barcode (e.g. GEN-DNA-20250120-001)" style={{ fontFamily: 'monospace' }} /></div>
                <div className="form-group"><label className="form-label">Assign to Client</label><select className="form-select"><option>Select client...</option>{clients.map(c => <option key={c.id}>{c.name} ({c.id})</option>)}</select></div>
                <div className="form-group"><label className="form-label">Test Type</label><select className="form-select"><option>DNA Analysis</option><option>Blood Panel</option><option>Microbiome</option></select></div>
                <div className="form-group"><label className="form-label">Collection Date</label><input className="form-input" type="date" /></div>
                <div className="form-group"><label className="form-label">Notes</label><textarea className="form-textarea" placeholder="Any observations about the sample..." /></div>
                <div style={{ display: 'flex', gap: 12 }}><Link to="/samples" className="btn btn-outline">Cancel</Link><Link to="/samples" className="btn btn-primary">Register Sample</Link></div>
            </div>
        </div>
    );
}
