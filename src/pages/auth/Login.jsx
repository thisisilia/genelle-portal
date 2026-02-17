import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Eye, EyeOff } from 'lucide-react';

export default function Login() {
    const [showPw, setShowPw] = useState(false);
    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-logo">
                    <Building2 size={40} color="var(--primary)" />
                    <h1>Genelle<span>Health</span></h1>
                </div>
                <h2 className="auth-title">Welcome back</h2>
                <p className="auth-subtitle">Sign in to your partner portal account</p>
                <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input className="form-input" type="email" placeholder="you@organization.com" defaultValue="sarah@dubaiclinic.ae" />
                </div>
                <div className="form-group">
                    <label className="form-label">Password</label>
                    <div style={{ position: 'relative' }}>
                        <input className="form-input" type={showPw ? 'text' : 'password'} placeholder="Enter your password" defaultValue="password123" />
                        <button onClick={() => setShowPw(!showPw)} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                            {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                        <input type="checkbox" defaultChecked /> Remember me
                    </label>
                    <Link to="/forgot-password" style={{ fontSize: 'var(--text-sm)' }}>Forgot password?</Link>
                </div>
                <Link to="/dashboard/reseller" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>Sign In</Link>
            </div>
        </div>
    );
}
