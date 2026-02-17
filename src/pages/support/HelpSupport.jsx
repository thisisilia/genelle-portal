import { useState } from 'react';
import { faqs } from '../../data/mockData';
import { Search, ChevronDown, ChevronUp, ExternalLink, MessageCircle, Phone, Mail } from 'lucide-react';

export default function HelpSupport() {
    const [open, setOpen] = useState(null);
    return (
        <div>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 4 }}>Help & Support</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 24 }}>Find answers and get in touch</p>
            <div className="grid-3" style={{ marginBottom: 32 }}>
                <div className="card" style={{ textAlign: 'center' }}><Mail size={32} color="var(--primary)" style={{ marginBottom: 8 }} /><h3 style={{ fontWeight: 600, marginBottom: 4 }}>Email Support</h3><p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>support@genellehealth.com</p></div>
                <div className="card" style={{ textAlign: 'center' }}><Phone size={32} color="var(--accent)" style={{ marginBottom: 8 }} /><h3 style={{ fontWeight: 600, marginBottom: 4 }}>Phone</h3><p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>+971 4 555 8888</p></div>
                <div className="card" style={{ textAlign: 'center' }}><MessageCircle size={32} color="var(--success)" style={{ marginBottom: 8 }} /><h3 style={{ fontWeight: 600, marginBottom: 4 }}>Live Chat</h3><p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Mon–Fri 9am–6pm GST</p></div>
            </div>
            <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 16 }}>Frequently Asked Questions</h2>
            {faqs.map((f, i) => (
                <div key={i} className="card" style={{ marginBottom: 8, cursor: 'pointer' }} onClick={() => setOpen(open === i ? null : i)}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4 style={{ fontWeight: 500, fontSize: 'var(--text-sm)' }}>{f.q}</h4>
                        {open === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                    {open === i && <p style={{ marginTop: 12, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{f.a}</p>}
                </div>
            ))}
        </div>
    );
}
