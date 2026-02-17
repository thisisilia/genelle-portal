import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle } from 'lucide-react';

export default function ResetPassword() {
    const [step, setStep] = useState(1);
    if (step === 3) {
        return (
            <div className="auth-container">
                <div className="auth-card" style={{ textAlign: 'center' }}>
                    <div className="success-icon"><CheckCircle size={40} /></div>
                    <h2 style={{ marginBottom: 8 }}>Password Updated!</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>Your password has been successfully reset.</p>
                    <Link to="/login" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>Back to Login</Link>
                </div>
            </div>
        );
    }
    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-logo">
                    <Building2 size={40} color="var(--primary)" />
                    <h1>Genelle<span>Health</span></h1>
                </div>
                {step === 1 ? (
                    <>
                        <h2 className="auth-title">Verify Your Identity</h2>
                        <p className="auth-subtitle">Enter the OTP sent to your email</p>
                        <div className="form-group">
                            <label className="form-label">OTP Code</label>
                            <div style={{ display: 'flex', gap: 8 }}>
                                {[1, 2, 3, 4, 5, 6].map(i => (
                                    <input key={i} className="form-input" style={{ textAlign: 'center', padding: 12, fontSize: 'var(--text-lg)' }} maxLength={1} defaultValue={i} />
                                ))}
                            </div>
                        </div>
                        <button onClick={() => setStep(2)} className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>Verify</button>
                        <p style={{ textAlign: 'center', marginTop: 16, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                            Didn't receive the code? <a onClick={(e) => { e.preventDefault(); alert('OTP resent to your email!'); }} style={{ color: 'var(--accent)', cursor: 'pointer' }}>Resend</a>
                        </p>
                    </>
                ) : (
                    <>
                        <h2 className="auth-title">Set New Password</h2>
                        <p className="auth-subtitle">Create a strong password for your account</p>
                        <div className="form-group">
                            <label className="form-label">New Password</label>
                            <input className="form-input" type="password" placeholder="Minimum 8 characters" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Confirm Password</label>
                            <input className="form-input" type="password" placeholder="Re-enter your password" />
                        </div>
                        <button onClick={() => setStep(3)} className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>Reset Password</button>
                    </>
                )}
            </div>
        </div>
    );
}
