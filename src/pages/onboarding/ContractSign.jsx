import { Link } from 'react-router-dom';
import { Building2, FileText, CheckSquare } from 'lucide-react';

export default function ContractSign() {
    return (
        <div className="auth-container" style={{ alignItems: 'flex-start', paddingTop: 60 }}>
            <div className="auth-card" style={{ maxWidth: 600 }}>
                <div className="auth-logo"><Building2 size={40} color="var(--primary)" /><h1>Genelle<span>Health</span></h1></div>
                <h2 className="auth-title">Partnership Agreement</h2>
                <p className="auth-subtitle">Review and sign the partnership agreement to complete your registration</p>
                <div className="card" style={{ maxHeight: 300, overflow: 'auto', marginBottom: 24, fontSize: 'var(--text-sm)', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                    <h3 style={{ color: 'var(--text)', marginBottom: 12 }}>GENELLE HEALTH PARTNERSHIP AGREEMENT</h3>
                    <p>This Partnership Agreement ("Agreement") is entered into between Genelle Health Ltd. ("Company") and the Partner Organization ("Partner") identified in the registration process.</p>
                    <p style={{ marginTop: 12 }}><strong>1. SCOPE OF PARTNERSHIP</strong></p>
                    <p>The Company grants the Partner a non-exclusive right to distribute and resell Genelle Health products and services, including but not limited to DNA testing kits, blood analysis panels, microbiome testing, and associated digital health reports.</p>
                    <p style={{ marginTop: 12 }}><strong>2. OBLIGATIONS</strong></p>
                    <p>The Partner agrees to: (a) maintain proper storage of test kits; (b) follow sample collection protocols; (c) protect client data per applicable privacy regulations; (d) meet minimum quarterly order requirements as outlined in the pricing schedule.</p>
                    <p style={{ marginTop: 12 }}><strong>3. COMMISSION STRUCTURE</strong></p>
                    <p>Commission rates are determined by partner tier and volume. Standard rates range from 10-20% of net revenue. Detailed commission schedules are provided in Appendix A.</p>
                    <p style={{ marginTop: 12 }}><strong>4. TERM & TERMINATION</strong></p>
                    <p>This agreement is effective for 12 months from the date of execution and auto-renews unless terminated by either party with 60 days written notice.</p>
                </div>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 24, cursor: 'pointer', fontSize: 'var(--text-sm)' }}>
                    <input type="checkbox" defaultChecked style={{ marginTop: 3 }} />
                    <span>I have read and agree to the terms of the Partnership Agreement on behalf of my organization. I confirm I have the authority to enter into this agreement.</span>
                </label>
                <div className="form-group">
                    <label className="form-label">Digital Signature (Type your full name)</label>
                    <input className="form-input" placeholder="Type your full legal name" style={{ fontStyle: 'italic', fontSize: 'var(--text-lg)' }} />
                </div>
                <Link to="/onboarding/confirmation" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>Sign & Complete Registration</Link>
            </div>
        </div>
    );
}
