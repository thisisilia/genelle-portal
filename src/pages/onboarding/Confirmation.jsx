import { Link } from 'react-router-dom';
import { CheckCircle, Building2 } from 'lucide-react';

export default function Confirmation() {
    return (
        <div className="auth-container">
            <div className="auth-card" style={{ textAlign: 'center', maxWidth: 500 }}>
                <div className="success-icon" style={{ width: 80, height: 80, margin: '0 auto 24px' }}><CheckCircle size={40} /></div>
                <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 8 }}>Welcome to Genelle Health!</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 32, lineHeight: 1.7 }}>
                    Your partner account has been successfully created. You can now access the Partner Portal to manage clients, place orders, and track samples.
                </p>
                <div className="card" style={{ textAlign: 'left', marginBottom: 24 }}>
                    <h4 style={{ marginBottom: 12 }}>Account Summary</h4>
                    <div className="detail-grid">
                        <div className="detail-item"><label>Organization</label><span>Gulf Wellness Center</span></div>
                        <div className="detail-item"><label>Partner ID</label><span>PTR-005</span></div>
                        <div className="detail-item"><label>Partner Type</label><span>Clinic</span></div>
                        <div className="detail-item"><label>Admin Email</label><span>admin@gulfwellness.ae</span></div>
                    </div>
                </div>
                <Link to="/dashboard/reseller" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>Go to Dashboard</Link>
            </div>
        </div>
    );
}
