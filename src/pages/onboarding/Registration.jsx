import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

export default function Registration() {
    return (
        <div className="auth-container" style={{ alignItems: 'flex-start', paddingTop: 60 }}>
            <div className="auth-card" style={{ maxWidth: 600 }}>
                <div className="auth-logo">
                    <Building2 size={40} color="var(--primary)" />
                    <h1>Genelle<span>Health</span></h1>
                </div>
                <div className="steps" style={{ justifyContent: 'center', marginBottom: 32 }}>
                    <div className="step completed"><div className="step-circle">✓</div><span>Interest</span></div>
                    <div className="step-line" style={{ background: 'var(--success)' }}></div>
                    <div className="step active"><div className="step-circle">2</div><span>Registration</span></div>
                    <div className="step-line"></div>
                    <div className="step"><div className="step-circle">3</div><span>Admin User</span></div>
                    <div className="step-line"></div>
                    <div className="step"><div className="step-circle">4</div><span>Verify</span></div>
                    <div className="step-line"></div>
                    <div className="step"><div className="step-circle">5</div><span>Contract</span></div>
                </div>
                <h2 className="auth-title">Organization Details</h2>
                <p className="auth-subtitle">Provide your organization's details to complete registration</p>
                <div className="form-group"><label className="form-label">Legal Entity Name</label><input className="form-input" placeholder="Full legal company name" /></div>
                <div className="form-row">
                    <div className="form-group"><label className="form-label">Trade License #</label><input className="form-input" placeholder="License number" /></div>
                    <div className="form-group"><label className="form-label">Tax Registration #</label><input className="form-input" placeholder="TRN" /></div>
                </div>
                <div className="form-group"><label className="form-label">Business Address</label><input className="form-input" placeholder="Street address" /></div>
                <div className="form-row">
                    <div className="form-group"><label className="form-label">City</label><input className="form-input" placeholder="City" /></div>
                    <div className="form-group"><label className="form-label">Country</label><select className="form-select"><option>UAE</option><option>Saudi Arabia</option><option>Qatar</option></select></div>
                </div>
                <div className="form-group"><label className="form-label">Website</label><input className="form-input" placeholder="https://..." /></div>
                <div style={{ display: 'flex', gap: 12 }}>
                    <Link to="/onboarding/admin-review" className="btn btn-outline btn-lg" style={{ flex: 1, justifyContent: 'center' }}>Back</Link>
                    <Link to="/onboarding/admin-user" className="btn btn-primary btn-lg" style={{ flex: 2, justifyContent: 'center' }}>Continue</Link>
                </div>
            </div>
        </div>
    );
}
