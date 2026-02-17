import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Send, Eye } from 'lucide-react';
import { partners } from '../../data/mockData';

export default function AdminReview() {
    const [approved, setApproved] = useState([]);
    return (
        <div style={{ padding: 32, maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Partner Applications</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Review and approve new partner registrations</p>
                </div>
            </div>
            <div className="table-container">
                <table>
                    <thead><tr><th>Partner</th><th>Contact</th><th>Type</th><th>Status</th><th>Submitted</th><th>Actions</th></tr></thead>
                    <tbody>
                        {partners.map(p => (
                            <tr key={p.id}>
                                <td><strong>{p.name}</strong></td>
                                <td><div>{p.contact}</div><div style={{ color: 'var(--text-muted)', fontSize: 'var(--text-xs)' }}>{p.email}</div></td>
                                <td>{p.type}</td>
                                <td><span className={`badge ${p.status === 'Approved' ? 'badge-success' : p.status === 'Contract Sent' ? 'badge-info' : 'badge-warning'}`}>{p.status}</span></td>
                                <td>{p.submitted}</td>
                                <td style={{ display: 'flex', gap: 8 }}>
                                    <Link to="/onboarding/register" className="btn btn-sm btn-outline"><Eye size={14} /> View</Link>
                                    {p.status === 'Pending Review' && !approved.includes(p.id) && <button className="btn btn-sm btn-accent" onClick={() => setApproved([...approved, p.id])}><CheckCircle size={14} /> Approve</button>}
                                    {approved.includes(p.id) && <span className="badge badge-success">Approved ✓</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
