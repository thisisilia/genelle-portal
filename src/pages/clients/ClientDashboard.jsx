import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { clients, clientTests, clientPlans, clientProducts, questionnaires, orders } from '../../data/mockData';
import { ArrowLeft, Edit, FileText, ShoppingCart, Dna, ClipboardList, Utensils, Package } from 'lucide-react';

export default function ClientDashboard() {
    const { id } = useParams();
    const client = clients.find(c => c.id === id) || clients[0];
    const [tab, setTab] = useState('overview');

    return (
        <div>
            <Link to="/clients" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: 4, marginBottom: 16 }}><ArrowLeft size={14} /> Back to Clients</Link>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div className="avatar" style={{ width: 56, height: 56, fontSize: 'var(--text-lg)' }}>{client.name.split(' ').map(n => n[0]).join('')}</div>
                    <div><h1 style={{ fontSize: 'var(--text-xl)', fontWeight: 600 }}>{client.name}</h1><p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>{client.id} · {client.email}</p></div>
                    <span className={`badge ${client.status === 'Active' ? 'badge-success' : 'badge-warning'}`}>{client.status}</span>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                    <Link to={`/clients/${id}/edit`} className="btn btn-outline"><Edit size={16} /> Edit</Link>
                    <Link to="/orders/create-client" className="btn btn-primary"><ShoppingCart size={16} /> New Order</Link>
                </div>
            </div>

            <div className="tabs">
                {[['overview', 'Overview'], ['tests', 'Tests'], ['questionnaires', 'Questionnaires'], ['plans', 'Plans'], ['products', 'Products'], ['orders', 'Orders'], ['documents', 'Documents']].map(([key, label]) => (
                    <button key={key} className={`tab ${tab === key ? 'active' : ''}`} onClick={() => setTab(key)}>{label}</button>
                ))}
            </div>

            {tab === 'overview' && (
                <div>
                    <div className="grid-stats">
                        <div className="card"><p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: 4 }}>Tests</p><p style={{ fontSize: 'var(--text-2xl)', fontWeight: 700 }}>{client.tests}</p></div>
                        <div className="card"><p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: 4 }}>Consent</p><p style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}><span className={`badge ${client.consent === 'Completed' ? 'badge-success' : 'badge-warning'}`}>{client.consent}</span></p></div>
                        <div className="card"><p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: 4 }}>Since</p><p style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>{client.created}</p></div>
                        <div className="card"><p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: 4 }}>Phone</p><p style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>{client.phone}</p></div>
                    </div>
                    <div className="grid-2">
                        <div className="card"><h3 style={{ fontWeight: 600, marginBottom: 12 }}>Recent Test Status</h3>
                            {clientTests.map(t => (
                                <div key={t.type} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                                    <span style={{ fontSize: 'var(--text-sm)' }}>{t.type}</span>
                                    <span className={`badge ${t.status === 'Completed' ? 'badge-success' : t.status === 'Not Started' ? 'badge-neutral' : 'badge-info'}`}>{t.status}</span>
                                </div>
                            ))}
                        </div>
                        <div className="card"><h3 style={{ fontWeight: 600, marginBottom: 12 }}>Active Plans</h3>
                            {clientPlans.map(p => (
                                <div key={p.type} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                                    <span style={{ fontSize: 'var(--text-sm)' }}>{p.type}</span>
                                    <span className={`badge ${p.status === 'Active' ? 'badge-success' : 'badge-warning'}`}>{p.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {tab === 'tests' && (
                <div className="table-container">
                    <table>
                        <thead><tr><th>Test Type</th><th>Sample</th><th>Lab</th><th>Submitted</th><th>Results</th><th>Status</th><th>Report</th></tr></thead>
                        <tbody>
                            {clientTests.map(t => (
                                <tr key={t.type}><td style={{ fontWeight: 500 }}><Dna size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />{t.type}</td><td>{t.sample}</td><td>{t.lab}</td><td>{t.submitted}</td><td>{t.results}</td><td><span className={`badge ${t.status === 'Completed' ? 'badge-success' : t.status === 'Not Started' ? 'badge-neutral' : 'badge-info'}`}>{t.status}</span></td><td>{t.report !== '—' ? <Link to={`/reports/${t.report}`} className="btn btn-sm btn-outline">View</Link> : '—'}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {tab === 'questionnaires' && (
                <div className="table-container">
                    <table>
                        <thead><tr><th>Questionnaire</th><th>Fields</th><th>Status</th><th>Completed</th><th>Actions</th></tr></thead>
                        <tbody>
                            {questionnaires.map(q => (
                                <tr key={q.name}><td style={{ fontWeight: 500 }}><ClipboardList size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />{q.name}</td><td>{q.fields} questions</td><td><span className={`badge ${q.status === 'Completed' ? 'badge-success' : q.status === 'Pending' ? 'badge-warning' : 'badge-neutral'}`}>{q.status}</span></td><td>{q.completed}</td><td>{q.status !== 'Completed' && <button className="btn btn-sm btn-outline" onClick={() => alert(`Reminder sent for: ${q.name}`)}>Send Reminder</button>}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {tab === 'plans' && (
                <div className="table-container">
                    <table>
                        <thead><tr><th>Plan Type</th><th>Status</th><th>Generated</th><th>Duration</th><th>Progress</th></tr></thead>
                        <tbody>
                            {clientPlans.map(p => (
                                <tr key={p.type}><td style={{ fontWeight: 500 }}><Utensils size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />{p.type}</td><td><span className={`badge ${p.status === 'Active' ? 'badge-success' : 'badge-warning'}`}>{p.status}</span></td><td>{p.generated}</td><td>{p.duration}</td><td>{p.progress !== '—' ? <div style={{ background: 'var(--border-light)', borderRadius: 999, height: 8, width: 100 }}><div style={{ background: 'var(--accent)', borderRadius: 999, height: 8, width: p.progress }}></div></div> : '—'}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {tab === 'products' && (
                <div className="table-container">
                    <table>
                        <thead><tr><th>Product</th><th>Category</th><th>Status</th><th>Since</th></tr></thead>
                        <tbody>
                            {clientProducts.map(p => (
                                <tr key={p.name}><td style={{ fontWeight: 500 }}><Package size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />{p.name}</td><td>{p.category}</td><td><span className={`badge ${p.status === 'Active' ? 'badge-success' : p.status === 'Recommended' ? 'badge-info' : 'badge-warning'}`}>{p.status}</span></td><td>{p.since}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {tab === 'orders' && (
                <div className="table-container">
                    <table>
                        <thead><tr><th>Order ID</th><th>Items</th><th>Amount</th><th>Status</th><th>Date</th></tr></thead>
                        <tbody>
                            {orders.filter(o => o.client === client.name).map(o => (
                                <tr key={o.id}><td><Link to={`/orders/${o.id}`} style={{ fontWeight: 500 }}>{o.id}</Link></td><td>{o.items}</td><td>{o.amount}</td><td><span className={`badge ${o.status === 'Completed' ? 'badge-success' : o.status === 'Shipped' ? 'badge-info' : 'badge-warning'}`}>{o.status}</span></td><td>{o.date}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {tab === 'documents' && (
                <div className="table-container">
                    <table>
                        <thead><tr><th>Document</th><th>Type</th><th>Date</th><th>Actions</th></tr></thead>
                        <tbody>
                            <tr><td>Consent Form</td><td>PDF</td><td>{client.created}</td><td><button className="btn btn-sm btn-outline" onClick={() => alert('Downloading Consent Form...')}>Download</button></td></tr>
                            <tr><td>DNA Report</td><td>PDF</td><td>2025-01-22</td><td><button className="btn btn-sm btn-outline" onClick={() => alert('Downloading DNA Report...')}>Download</button></td></tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
