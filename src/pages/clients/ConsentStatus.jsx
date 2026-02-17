import { clients } from '../../data/mockData';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle, Send, AlertCircle } from 'lucide-react';

export default function ConsentStatus() {
    return (
        <div>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 4 }}>Consent Status</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 24 }}>Track client consent collection status</p>
            <div className="grid-stats">
                <div className="card"><p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: 4 }}>Completed</p><p style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--success)' }}>{clients.filter(c => c.consent === 'Completed').length}</p></div>
                <div className="card"><p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: 4 }}>Pending</p><p style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--warning)' }}>{clients.filter(c => c.consent === 'Pending' || c.consent === 'Sent').length}</p></div>
                <div className="card"><p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: 4 }}>Expired</p><p style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--danger)' }}>{clients.filter(c => c.consent === 'Expired').length}</p></div>
            </div>
            <div className="table-container">
                <table>
                    <thead><tr><th>Client</th><th>Email</th><th>Consent Status</th><th>Actions</th></tr></thead>
                    <tbody>
                        {clients.map(c => (
                            <tr key={c.id}>
                                <td><Link to={`/clients/${c.id}`} style={{ fontWeight: 500 }}>{c.name}</Link></td>
                                <td style={{ color: 'var(--text-secondary)' }}>{c.email}</td>
                                <td>
                                    <span className={`badge ${c.consent === 'Completed' ? 'badge-success' : c.consent === 'Expired' ? 'badge-danger' : 'badge-warning'}`}>
                                        {c.consent === 'Completed' && <CheckCircle size={12} style={{ marginRight: 4 }} />}
                                        {(c.consent === 'Pending' || c.consent === 'Sent') && <Clock size={12} style={{ marginRight: 4 }} />}
                                        {c.consent === 'Expired' && <AlertCircle size={12} style={{ marginRight: 4 }} />}
                                        {c.consent}
                                    </span>
                                </td>
                                <td>{c.consent !== 'Completed' && <button className="btn btn-sm btn-outline" onClick={() => alert(`Consent form resent to ${c.email}`)}><Send size={12} /> Resend</button>}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
