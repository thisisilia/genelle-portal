import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

export default function CreateClient() {
    const [showDuplicate, setShowDuplicate] = useState(false);
    return (
        <div>
            <div style={{ marginBottom: 24 }}>
                <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600 }}>Create Client</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Add a new client to your organization</p>
            </div>

            {showDuplicate && (
                <div className="alert alert-warning" style={{ marginBottom: 24 }}>
                    <AlertTriangle size={20} />
                    <div>
                        <strong>Duplicate Client Detected</strong>
                        <p style={{ marginTop: 4 }}>A client with similar details already exists: <strong>Ahmed Al Rashid</strong> (CLT-001). Please verify before proceeding.</p>
                        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                            <Link to="/clients/CLT-001" className="btn btn-sm btn-outline">View Existing Client</Link>
                            <button className="btn btn-sm btn-accent" onClick={() => setShowDuplicate(false)}>Continue Anyway</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="card" style={{ maxWidth: 700 }}>
                <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 16 }}>Personal Information</h3>
                <div className="form-row">
                    <div className="form-group"><label className="form-label">First Name</label><input className="form-input" placeholder="First name" /></div>
                    <div className="form-group"><label className="form-label">Last Name</label><input className="form-input" placeholder="Last name" /></div>
                </div>
                <div className="form-row">
                    <div className="form-group"><label className="form-label">Email</label><input className="form-input" type="email" placeholder="client@email.com" /></div>
                    <div className="form-group"><label className="form-label">Phone</label><input className="form-input" placeholder="+971 50 XXX XXXX" /></div>
                </div>
                <div className="form-row">
                    <div className="form-group"><label className="form-label">Date of Birth</label><input className="form-input" type="date" /></div>
                    <div className="form-group"><label className="form-label">Gender</label><select className="form-select"><option>Select...</option><option>Male</option><option>Female</option></select></div>
                </div>
                <div className="form-group"><label className="form-label">Address</label><input className="form-input" placeholder="Street address" /></div>
                <div className="form-row">
                    <div className="form-group"><label className="form-label">City</label><input className="form-input" placeholder="City" /></div>
                    <div className="form-group"><label className="form-label">Country</label><select className="form-select"><option>UAE</option><option>Saudi Arabia</option><option>Qatar</option></select></div>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '24px 0' }} />
                <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 16 }}>Consent</h3>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12, cursor: 'pointer', fontSize: 'var(--text-sm)' }}>
                    <input type="checkbox" style={{ marginTop: 3 }} />
                    <span>Send consent form via email for data processing and health information sharing</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 16, cursor: 'pointer', fontSize: 'var(--text-sm)' }}>
                    <input type="checkbox" style={{ marginTop: 3 }} />
                    <span>Client has provided verbal consent (to be confirmed digitally)</span>
                </label>

                <div style={{ display: 'flex', gap: 12 }}>
                    <Link to="/clients" className="btn btn-outline">Cancel</Link>
                    <button className="btn btn-outline" onClick={() => setShowDuplicate(true)}>Check Duplicates</button>
                    <Link to="/clients/create-success" className="btn btn-primary">Create Client</Link>
                </div>
            </div>
        </div>
    );
}
