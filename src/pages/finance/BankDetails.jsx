import { useState } from 'react';
import { Building, CheckCircle } from 'lucide-react';

export default function BankDetails() {
    const [editing, setEditing] = useState(false);
    const [saved, setSaved] = useState(false);
    return (
        <div>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 4 }}>Bank Details</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 24 }}>Your registered bank account for commission payments</p>
            <div className="card" style={{ maxWidth: 600 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 'var(--radius)', background: 'var(--accent-bg)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Building size={24} /></div>
                    <div><h3 style={{ fontWeight: 600 }}>Emirates NBD</h3><p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Primary Account</p></div>
                    <span className="badge badge-success" style={{ marginLeft: 'auto' }}>Verified</span>
                </div>
                <div className="detail-grid">
                    <div className="detail-item"><label>Account Holder</label><span>Dubai Health Clinic LLC</span></div>
                    <div className="detail-item"><label>Bank</label><span>Emirates NBD</span></div>
                    <div className="detail-item"><label>Account Number</label><span>****4567</span></div>
                    <div className="detail-item"><label>IBAN</label><span>AE07 0331 0000 ****4567</span></div>
                    <div className="detail-item"><label>SWIFT</label><span>EABORAEAXXX</span></div>
                    <div className="detail-item"><label>Branch</label><span>Dubai Main Branch</span></div>
                </div>
                <div style={{ marginTop: 24, display: 'flex', gap: 8 }}>
                    {!editing ? (
                        <button className="btn btn-outline" onClick={() => { setEditing(true); setSaved(false); }}>Update Bank Details</button>
                    ) : (
                        <>
                            <button className="btn btn-outline" onClick={() => setEditing(false)}>Cancel</button>
                            <button className="btn btn-primary" onClick={() => { setSaved(true); setEditing(false); }}><CheckCircle size={16} /> Save Changes</button>
                        </>
                    )}
                    {saved && <span className="badge badge-success" style={{ alignSelf: 'center' }}>Saved ✓</span>}
                </div>
            </div>
        </div>
    );
}
