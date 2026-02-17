import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

export default function ForgotPassword() {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-logo">
                    <Building2 size={40} color="var(--primary)" />
                    <h1>Genelle<span>Health</span></h1>
                </div>
                <h2 className="auth-title">Forgot Password</h2>
                <p className="auth-subtitle">Enter your email and we'll send you a reset link</p>
                <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input className="form-input" type="email" placeholder="you@organization.com" />
                </div>
                <Link to="/reset-password" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', marginBottom: 'var(--space-md)' }}>Send Reset Link</Link>
                <div style={{ textAlign: 'center' }}>
                    <Link to="/login" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>← Back to Login</Link>
                </div>
            </div>
        </div>
    );
}
