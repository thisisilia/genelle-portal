import { Link } from 'react-router-dom';
import { stats, resellers, orders, clients } from '../../data/mockData';
import {
    TrendingUp, TrendingDown, Users, Building2, ShoppingCart, Globe,
    ArrowRight, BarChart3, MapPin, Award
} from 'lucide-react';

export default function MasterResellerDashboard() {
    const totalClients = resellers.reduce((a, r) => a + r.clients, 0);
    const totalOrders = resellers.reduce((a, r) => a + r.orders, 0);

    return (
        <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div>
                    <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600 }}>Master Reseller Dashboard</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Aggregated view across all reseller partners · Al Noor Health Group</p>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                    <button className="btn btn-outline" onClick={() => alert('Exporting reseller performance report...')}><BarChart3 size={16} /> Export Report</button>
                    <button className="btn btn-primary" onClick={() => alert('Add Reseller form would open here')}><Building2 size={16} /> Add Reseller</button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid-stats">
                {stats.master.map(s => (
                    <div className="card" key={s.label}>
                        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{s.label}</p>
                        <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 700 }}>{s.value}</p>
                        <p style={{ fontSize: 'var(--text-xs)', color: s.trend === 'up' ? 'var(--success)' : 'var(--danger)', display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                            {s.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />} {s.change} vs last month
                        </p>
                    </div>
                ))}
            </div>

            {/* Revenue Distribution */}
            <div className="card" style={{ marginBottom: 24 }}>
                <h3 style={{ fontWeight: 600, marginBottom: 16, fontSize: 'var(--text-base)', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Globe size={16} /> Regional Performance
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
                    {[
                        { region: 'UAE', resellers: 3, clients: 558, revenue: 'AED 308,600', growth: '+22%' },
                        { region: 'Saudi Arabia', resellers: 2, clients: 407, revenue: 'AED 241,600', growth: '+18%' },
                        { region: 'Qatar', resellers: 1, clients: 185, revenue: 'AED 120,400', growth: '+15%' },
                        { region: 'Bahrain', resellers: 1, clients: 92, revenue: 'AED 68,200', growth: '+28%' },
                    ].map(r => (
                        <div key={r.region} style={{ padding: 16, background: 'var(--bg-secondary)', borderRadius: 'var(--radius)', border: '1px solid var(--border-light)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                                <MapPin size={14} color="var(--primary)" />
                                <span style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>{r.region}</span>
                            </div>
                            <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 4 }}>{r.revenue}</div>
                            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>{r.resellers} resellers · {r.clients} clients</div>
                            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--success)', marginTop: 4 }}>{r.growth} growth</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Reseller Performance Table */}
            <div style={{ marginBottom: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>Reseller Performance</h3>
                </div>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr><th>Reseller</th><th>Clients</th><th>Active Orders</th><th>Revenue (MTD)</th><th>Conversion</th><th>Status</th><th></th></tr>
                        </thead>
                        <tbody>
                            {resellers.map((r, i) => (
                                <tr key={r.id}>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                            {i === 0 && <Award size={14} color="var(--warning)" />}
                                            <div>
                                                <span style={{ fontWeight: 500 }}>{r.name}</span>
                                                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{r.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ fontWeight: 500 }}>{r.clients}</td>
                                    <td>{r.orders}</td>
                                    <td style={{ fontWeight: 600 }}>{r.revenue}</td>
                                    <td>{(60 + i * 5) % 100}%</td>
                                    <td><span className={`badge ${r.status === 'Active' ? 'badge-success' : 'badge-warning'}`}>{r.status}</span></td>
                                    <td><button className="btn btn-sm btn-outline" onClick={() => alert(`Viewing details for: ${r.name}`)}>Details</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Bottom - Recent Activity + Top Products */}
            <div className="grid-2">
                {/* Recent Activity Feed */}
                <div>
                    <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 12 }}>Recent Activity</h3>
                    <div className="card">
                        {[
                            { text: 'Dubai Health Clinic placed order ORD-2401', time: '2 hours ago', icon: ShoppingCart, color: 'var(--primary)' },
                            { text: 'New client registered by Abu Dhabi Wellness', time: '4 hours ago', icon: Users, color: 'var(--accent)' },
                            { text: 'Riyadh Health Hub hit 300+ client milestone', time: '6 hours ago', icon: Award, color: 'var(--warning)' },
                            { text: 'Sharjah Medical restocked DNA kits x50', time: '8 hours ago', icon: Building2, color: 'var(--info)' },
                            { text: 'Jeddah Clinic account paused — overdue invoices', time: '1 day ago', icon: Building2, color: 'var(--danger)' },
                        ].map((a, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 0', borderBottom: i < 4 ? '1px solid var(--border-light)' : 'none' }}>
                                <div style={{ width: 32, height: 32, borderRadius: '50%', background: a.color + '15', color: a.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <a.icon size={14} />
                                </div>
                                <div>
                                    <div style={{ fontSize: 'var(--text-sm)' }}>{a.text}</div>
                                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 2 }}>{a.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Products by Volume */}
                <div>
                    <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 12 }}>Top Products by Volume</h3>
                    <div className="card">
                        {[
                            { name: 'DNA Analysis Kit', orders: 142, revenue: 'AED 63,900', bar: 100 },
                            { name: 'Complete Panel Kit', orders: 98, revenue: 'AED 117,600', bar: 69 },
                            { name: 'Blood Panel Kit', orders: 87, revenue: 'AED 33,060', bar: 61 },
                            { name: 'Microbiome Kit', orders: 64, revenue: 'AED 33,280', bar: 45 },
                            { name: 'Skincare Analysis Kit', orders: 32, revenue: 'AED 21,760', bar: 23 },
                        ].map((p, i) => (
                            <div key={i} style={{ marginBottom: i < 4 ? 16 : 0 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>{p.name}</span>
                                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>{p.orders} orders · {p.revenue}</span>
                                </div>
                                <div style={{ height: 6, background: 'var(--bg-secondary)', borderRadius: 3, overflow: 'hidden' }}>
                                    <div style={{ height: '100%', width: `${p.bar}%`, background: 'var(--primary)', borderRadius: 3 }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
