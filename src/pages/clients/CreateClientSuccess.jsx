import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function CreateClientSuccess() {
    return (
        <div className="card" style={{ maxWidth: 500, margin: '40px auto', textAlign: 'center' }}>
            <div className="success-icon"><CheckCircle size={40} /></div>
            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 8 }}>Client Created Successfully!</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 8 }}>A consent form has been sent to the client's email address.</p>
            <div className="card" style={{ textAlign: 'left', marginBottom: 24 }}>
                <div className="detail-grid">
                    <div className="detail-item"><label>Client ID</label><span>CLT-009</span></div>
                    <div className="detail-item"><label>Name</label><span>New Client</span></div>
                    <div className="detail-item"><label>Consent</label><span className="badge badge-warning">Pending</span></div>
                </div>
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                <Link to="/clients" className="btn btn-outline">View All Clients</Link>
                <Link to="/clients/CLT-009" className="btn btn-primary">View Client Dashboard</Link>
            </div>
        </div>
    );
}
