import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

export default function InterestForm() {
    return (
        <div className="auth-container" style={{ alignItems: 'flex-start', paddingTop: 60 }}>
            <div className="auth-card" style={{ maxWidth: 600 }}>
                <div className="auth-logo">
                    <Building2 size={40} color="var(--primary)" />
                    <h1>Genelle<span>Health</span></h1>
                </div>
                <h2 className="auth-title">Partner Interest Form</h2>
                <p className="auth-subtitle">Tell us about your organization and how you'd like to partner with Genelle Health</p>
                <div className="form-row">
                    <div className="form-group"><label className="form-label">First Name</label><input className="form-input" placeholder="First name" /></div>
                    <div className="form-group"><label className="form-label">Last Name</label><input className="form-input" placeholder="Last name" /></div>
                </div>
                <div className="form-group"><label className="form-label">Email</label><input className="form-input" type="email" placeholder="you@organization.com" /></div>
                <div className="form-group"><label className="form-label">Phone Number</label><input className="form-input" placeholder="+971 50 XXX XXXX" /></div>
                <div className="form-group"><label className="form-label">Organization Name</label><input className="form-input" placeholder="Your clinic or company name" /></div>
                <div className="form-group">
                    <label className="form-label">Partner Type</label>
                    <select className="form-select">
                        <option>Select type...</option>
                        <option>Clinic / Medical Center</option>
                        <option>Wellness Center</option>
                        <option>Reseller / Distributor</option>
                        <option>Practitioner (Individual)</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Country / Region</label>
                    <select className="form-select">
                        <option>Select region...</option>
                        <option>UAE</option>
                        <option>Saudi Arabia</option>
                        <option>Qatar</option>
                        <option>Kuwait</option>
                        <option>Bahrain</option>
                        <option>Oman</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="form-group"><label className="form-label">Message (Optional)</label><textarea className="form-textarea" placeholder="Tell us about your interest and expected volume..." /></div>
                <Link to="/onboarding/admin-review" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>Submit Interest</Link>
            </div>
        </div>
    );
}
