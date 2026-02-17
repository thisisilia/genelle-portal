import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Copy, CheckCircle } from 'lucide-react';

export default function ReportShare() {
    const { id } = useParams();
    const [copied, setCopied] = useState(false);
    const [sent, setSent] = useState(false);
    return (
        <div>
            <Link to={`/reports/${id}`} style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: 4, marginBottom: 16 }}><ArrowLeft size={14} /> Back to Report</Link>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 4 }}>Share Report Securely</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 24 }}>Generate a secure link to share this report with the client</p>
            <div className="card" style={{ maxWidth: 600 }}>
                <div className="alert alert-info" style={{ marginBottom: 24 }}>
                    <div>Shared reports are protected with a unique access link. The client will need to verify their identity before viewing.</div>
                </div>
                <div className="form-group"><label className="form-label">Client Email</label><input className="form-input" defaultValue="ahmed@mail.com" /></div>
                <div className="form-group"><label className="form-label">Link Expiry</label><select className="form-select"><option>24 hours</option><option>7 days</option><option>30 days</option><option>Never</option></select></div>
                <div className="form-group">
                    <label className="form-label">Access Control</label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-sm)', marginBottom: 8 }}><input type="checkbox" defaultChecked /> Require OTP verification</label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-sm)' }}><input type="checkbox" /> Allow PDF download</label>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '20px 0' }} />
                <div className="form-group"><label className="form-label">Secure Link</label>
                    <div style={{ display: 'flex', gap: 8 }}>
                        <input className="form-input" readOnly value="https://portal.genellehealth.com/reports/shared/abc123xyz" style={{ fontFamily: 'monospace', fontSize: 'var(--text-xs)' }} />
                        <button className="btn btn-outline" onClick={() => setCopied(true)}>{copied ? <><CheckCircle size={16} /> Copied</> : <><Copy size={16} /> Copy</>}</button>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
                    <Link to={`/reports/${id}`} className="btn btn-outline">Cancel</Link>
                    <button className="btn btn-primary" onClick={() => setSent(true)}>{sent ? 'Link Sent ✓' : 'Send Secure Link'}</button>
                </div>
            </div>
        </div>
    );
}
