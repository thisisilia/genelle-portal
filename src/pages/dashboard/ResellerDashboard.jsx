import { Link } from 'react-router-dom';
import { stats, clients, orders, samples, inventory } from '../../data/mockData';
import {
    TrendingUp, TrendingDown, Users, ShoppingCart, Plus, Package,
    TestTubes, AlertTriangle, Clock, CheckCircle, ArrowRight, Activity
} from 'lucide-react';

export default function ResellerDashboard() {
    const pendingConsent = clients.filter(c => c.consent !== 'Completed').length;
    const lowStock = inventory.filter(i => i.status === 'Low Stock').length;
    const samplesInTransit = samples.filter(s => s.status === 'In Transit' || s.status === 'Registered').length;

    return (
        <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div>
                    <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600 }}>Reseller Dashboard</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Welcome back, Dr. Sarah Mitchell · Dubai Health Clinic</p>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                    <Link to="/clients/create" className="btn btn-accent"><Plus size={16} /> New Client</Link>
                    <Link to="/orders/create-client" className="btn btn-primary"><ShoppingCart size={16} /> New Order</Link>
                </div>
            </div>

            {/* Alerts */}
            {(pendingConsent > 0 || lowStock > 0) && (
                <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
                    {pendingConsent > 0 && (
                        <div className="alert alert-warning" style={{ flex: 1 }}>
                            <AlertTriangle size={16} />
                            <div><strong>{pendingConsent} clients</strong> with pending consent — <Link to="/clients/consent" style={{ fontWeight: 600 }}>Review now →</Link></div>
                        </div>
                    )}
                    {lowStock > 0 && (
                        <div className="alert alert-danger" style={{ flex: 1 }}>
                            <AlertTriangle size={16} />
                            <div><strong>{lowStock} kits</strong> below restock threshold — <Link to="/inventory" style={{ fontWeight: 600 }}>Restock →</Link></div>
                        </div>
                    )}
                </div>
            )}

            {/* KPI Cards */}
            <div className="grid-stats">
                {stats.reseller.map(s => (
                    <div className="card" key={s.label}>
                        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{s.label}</p>
                        <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 700 }}>{s.value}</p>
                        <p style={{ fontSize: 'var(--text-xs)', color: s.trend === 'up' ? 'var(--success)' : 'var(--danger)', display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                            {s.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />} {s.change} vs last month
                        </p>
                    </div>
                ))}
            </div>

            {/* Activity Summary Bar */}
            <div className="card" style={{ marginBottom: 24 }}>
                <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Activity size={16} /> Today's Activity
                </h3>
                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'New Clients', value: 2, color: 'var(--accent)' },
                        { label: 'Orders Placed', value: 3, color: 'var(--primary)' },
                        { label: 'Samples Registered', value: 1, color: 'var(--info)' },
                        { label: 'Reports Ready', value: 2, color: 'var(--success)' },
                        { label: 'Pending Tasks', value: 5, color: 'var(--warning)' },
                    ].map(a => (
                        <div key={a.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <div style={{ width: 32, height: 32, borderRadius: 'var(--radius)', background: a.color + '15', color: a.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 'var(--text-sm)' }}>{a.value}</div>
                            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>{a.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content - 2 Column Layout */}
            <div className="grid-2">
                {/* Recent Clients */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                        <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>Recent Clients</h3>
                        <Link to="/clients" style={{ fontSize: 'var(--text-sm)', display: 'flex', alignItems: 'center', gap: 4 }}>View All <ArrowRight size={14} /></Link>
                    </div>
                    <div className="table-container">
                        <table>
                            <thead><tr><th>Name</th><th>Consent</th><th>Status</th><th>Tests</th></tr></thead>
                            <tbody>
                                {clients.slice(0, 5).map(c => (
                                    <tr key={c.id}>
                                        <td><Link to={`/clients/${c.id}`} style={{ fontWeight: 500 }}>{c.name}</Link><br /><span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{c.id}</span></td>
                                        <td><span className={`badge ${c.consent === 'Completed' ? 'badge-success' : c.consent === 'Expired' ? 'badge-danger' : 'badge-warning'}`}>{c.consent}</span></td>
                                        <td><span className={`badge ${c.status === 'Active' ? 'badge-success' : c.status === 'Pending' ? 'badge-warning' : 'badge-neutral'}`}>{c.status}</span></td>
                                        <td>{c.tests}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Recent Orders */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                        <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>Recent Orders</h3>
                        <Link to="/orders" style={{ fontSize: 'var(--text-sm)', display: 'flex', alignItems: 'center', gap: 4 }}>View All <ArrowRight size={14} /></Link>
                    </div>
                    <div className="table-container">
                        <table>
                            <thead><tr><th>Order</th><th>Client</th><th>Amount</th><th>Status</th></tr></thead>
                            <tbody>
                                {orders.slice(0, 5).map(o => (
                                    <tr key={o.id}>
                                        <td><Link to={`/orders/${o.id}`} style={{ fontWeight: 500, fontFamily: 'monospace', fontSize: 'var(--text-xs)' }}>{o.id}</Link></td>
                                        <td>{o.client}</td>
                                        <td style={{ fontWeight: 500 }}>{o.amount}</td>
                                        <td><span className={`badge ${o.status === 'Completed' || o.status === 'Delivered' ? 'badge-success' : o.status === 'Shipped' ? 'badge-info' : o.status === 'Processing' ? 'badge-warning' : 'badge-neutral'}`}>{o.status}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Bottom Row - Samples + Inventory */}
            <div className="grid-2" style={{ marginTop: 24 }}>
                {/* Sample Status */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                        <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>Sample Pipeline</h3>
                        <Link to="/samples" style={{ fontSize: 'var(--text-sm)', display: 'flex', alignItems: 'center', gap: 4 }}>View All <ArrowRight size={14} /></Link>
                    </div>
                    <div className="card">
                        {samples.slice(0, 4).map(s => (
                            <div key={s.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--border-light)' }}>
                                <div>
                                    <Link to={`/samples/${s.id}`} style={{ fontWeight: 500, fontSize: 'var(--text-sm)' }}>{s.client}</Link>
                                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{s.type} · {s.id}</div>
                                </div>
                                <span className={`badge ${s.status === 'Completed' || s.status === 'Results Ready' ? 'badge-success' : s.status === 'At Lab' ? 'badge-info' : s.status === 'In Transit' ? 'badge-warning' : 'badge-neutral'}`}>{s.status}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Inventory Quick View */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                        <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>Inventory Status</h3>
                        <Link to="/inventory" style={{ fontSize: 'var(--text-sm)', display: 'flex', alignItems: 'center', gap: 4 }}>Manage <ArrowRight size={14} /></Link>
                    </div>
                    <div className="card">
                        {inventory.map(item => (
                            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--border-light)' }}>
                                <div>
                                    <span style={{ fontWeight: 500, fontSize: 'var(--text-sm)' }}>{item.name}</span>
                                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>SKU: {item.sku}</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                    <span style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>{item.stock} units</span>
                                    <span className={`badge ${item.status === 'In Stock' ? 'badge-success' : 'badge-danger'}`}>{item.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
