import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

export default function OTPVerify() {
    return (
        <div className="auth-container" style={{ alignItems: 'flex-start', paddingTop: 60 }}>
            <div className="auth-card" style={{ maxWidth: 480 }}>
                <div className="auth-logo"><Building2 size={40} color="var(--primary)" /><h1>Genelle<span>Health</span></h1></div>
                <div className="steps" style={{ justifyContent: 'center', marginBottom: 32 }}>
                    <div className="step completed"><div className="step-circle">✓</div></div>
                    <div className="step-line" style={{ background: 'var(--success)' }}></div>
                    <div className="step completed"><div className="step-circle">✓</div></div>
                    <div className="step-line" style={{ background: 'var(--success)' }}></div>
                    <div className="step completed"><div className="step-circle">✓</div></div>
                    <div className="step-line" style={{ background: 'var(--success)' }}></div>
                    <div className="step active"><div className="step-circle">4</div></div>
                    <div className="step-line"></div>
                    <div className="step"><div className="step-circle">5</div></div>
                </div>
                <h2 className="auth-title">Verify Your Account</h2>
                <p className="auth-subtitle">We've sent a 6-digit OTP to your email address</p>
                <div className="form-group">
                    <label className="form-label">Enter OTP Code</label>
                    <div style={{ display: 'flex', gap: 8 }}>
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <input key={i} className="form-input" style={{ textAlign: 'center', padding: 12, fontSize: 'var(--text-lg)' }} maxLength={1} />
                        ))}
                    </div>
                </div>
                <Link to="/onboarding/contract" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', marginBottom: 16 }}>Verify</Link>
                <p style={{ textAlign: 'center', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                    Didn't receive? <a onClick={(e) => { e.preventDefault(); alert('OTP resent to your email!'); }} style={{ color: 'var(--accent)', cursor: 'pointer' }}>Resend Code</a>
                </p>
            </div>
        </div>
    );
}
