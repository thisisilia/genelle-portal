import { useState } from 'react';
import { Link } from 'react-router-dom';
import { clients } from '../../data/mockData';
import { ArrowRight, Search, AlertTriangle, CheckCircle } from 'lucide-react';

export default function TransferClient() {
    const [step, setStep] = useState('select');
    return (
        <div>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 4 }}>Client Ownership Transfer</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 24 }}>Transfer a client to another reseller partner</p>

            {step === 'select' && (
                <div className="card" style={{ maxWidth: 600 }}>
                    <h3 style={{ fontWeight: 600, marginBottom: 16 }}>Step 1: Select Client</h3>
                    <div className="form-group"><label className="form-label">Client to Transfer</label>
                        <select className="form-select">{clients.map(c => <option key={c.id}>{c.name} ({c.id})</option>)}</select>
                    </div>
                    <div className="form-group"><label className="form-label">Transfer To (Partner)</label>
                        <select className="form-select"><option>Gulf Wellness Center (PTR-002)</option><option>Abu Dhabi Health Pharmacy (PTR-003)</option><option>Saudi Wellness Group (PTR-004)</option></select>
                    </div>
                    <div className="form-group"><label className="form-label">Reason for Transfer</label>
                        <select className="form-select"><option>Client relocated</option><option>Client request</option><option>Practice closure</option><option>Other</option></select>
                    </div>
                    <div className="form-group"><label className="form-label">Notes</label><textarea className="form-textarea" placeholder="Additional details..." /></div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                        <Link to="/clients" className="btn btn-outline">Cancel</Link>
                        <button className="btn btn-primary" onClick={() => setStep('confirm')}>Review Transfer <ArrowRight size={16} /></button>
                    </div>
                </div>
            )}

            {step === 'confirm' && (
                <div className="card" style={{ maxWidth: 600 }}>
                    <h3 style={{ fontWeight: 600, marginBottom: 16 }}>Step 2: Confirm Transfer</h3>
                    <div className="alert alert-warning" style={{ marginBottom: 16 }}><AlertTriangle size={16} /><span>This action will transfer all client data, history, and active orders to the receiving partner. This cannot be undone.</span></div>
                    <div className="detail-grid" style={{ marginBottom: 16 }}>
                        <div className="detail-item"><label>Client</label><span>Ahmed Al Rashid (CLT-001)</span></div>
                        <div className="detail-item"><label>From</label><span>Dubai Health Clinic (PTR-001)</span></div>
                        <div className="detail-item"><label>To</label><span>Gulf Wellness Center (PTR-002)</span></div>
                        <div className="detail-item"><label>Reason</label><span>Client relocated</span></div>
                    </div>
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 'var(--text-sm)', marginBottom: 16 }}><input type="checkbox" style={{ marginTop: 3 }} /> I confirm this transfer and understand all client data will be moved</label>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                        <button className="btn btn-outline" onClick={() => setStep('select')}>Back</button>
                        <button className="btn btn-primary" onClick={() => setStep('success')}>Confirm Transfer</button>
                    </div>
                </div>
            )}

            {step === 'success' && (
                <div className="card" style={{ maxWidth: 500, textAlign: 'center' }}>
                    <div className="success-icon"><CheckCircle size={40} /></div>
                    <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: 8 }}>Transfer Complete</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>Ahmed Al Rashid has been successfully transferred to Gulf Wellness Center.</p>
                    <Link to="/clients" className="btn btn-primary">Back to Clients</Link>
                </div>
            )}
        </div>
    );
}
