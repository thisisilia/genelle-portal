import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

export default function AdminUserSetup() {
    return (
        <div className="auth-container" style={{ alignItems: 'flex-start', paddingTop: 60 }}>
            <div className="auth-card" style={{ maxWidth: 600 }}>
                <div className="auth-logo"><Building2 size={40} color="var(--primary)" /><h1>Genelle<span>Health</span></h1></div>
                <div className="steps" style={{ justifyContent: 'center', marginBottom: 32 }}>
                    <div className="step completed"><div className="step-circle">✓</div><span>Interest</span></div>
                    <div className="step-line" style={{ background: 'var(--success)' }}></div>
                    <div className="step completed"><div className="step-circle">✓</div><span>Registration</span></div>
                    <div className="step-line" style={{ background: 'var(--success)' }}></div>
                    <div className="step active"><div className="step-circle">3</div><span>Admin User</span></div>
                    <div className="step-line"></div>
                    <div className="step"><div className="step-circle">4</div><span>Verify</span></div>
                    <div className="step-line"></div>
                    <div className="step"><div className="step-circle">5</div><span>Contract</span></div>
                </div>
                <h2 className="auth-title">Primary Admin User</h2>
                <p className="auth-subtitle">Set up the primary administrator account for your organization</p>
                <div className="form-row">
                    <div className="form-group"><label className="form-label">First Name</label><input className="form-input" placeholder="First name" /></div>
                    <div className="form-group"><label className="form-label">Last Name</label><input className="form-input" placeholder="Last name" /></div>
                </div>
                <div className="form-group"><label className="form-label">Email Address</label><input className="form-input" type="email" placeholder="admin@organization.com" /></div>
                <div className="form-group"><label className="form-label">Job Title</label><input className="form-input" placeholder="e.g. Operations Manager" /></div>
                <div className="form-group"><label className="form-label">Phone Number</label><input className="form-input" placeholder="+971 50 XXX XXXX" /></div>
                <div className="form-group"><label className="form-label">Create Password</label><input className="form-input" type="password" placeholder="Minimum 8 characters" /></div>
                <div className="form-group"><label className="form-label">Confirm Password</label><input className="form-input" type="password" placeholder="Re-enter password" /></div>
                <div style={{ display: 'flex', gap: 12 }}>
                    <Link to="/onboarding/register" className="btn btn-outline btn-lg" style={{ flex: 1, justifyContent: 'center' }}>Back</Link>
                    <Link to="/onboarding/verify" className="btn btn-primary btn-lg" style={{ flex: 2, justifyContent: 'center' }}>Continue</Link>
                </div>
            </div>
        </div>
    );
}
