import { Link } from 'react-router-dom';
import { stats, invoices, commissions, payments, resellers } from '../../data/mockData';
import {
    TrendingUp, TrendingDown, ArrowRight, DollarSign, FileText,
    CreditCard, AlertTriangle, BarChart3, PieChart, Calendar, Download,
    CheckCircle, Clock, XCircle
} from 'lucide-react';

export default function FinanceDashboard() {
    const totalPaid = invoices.filter(i => i.status === 'Paid').length;
    const totalPending = invoices.filter(i => i.status === 'Pending').length;
    const totalOverdue = invoices.filter(i => i.status === 'Overdue').length;

    return (
        <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div>
                    <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600 }}>Finance Dashboard</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Read-only financial overview · Period: January 2025</p>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                    <button className="btn btn-outline" onClick={() => alert('Date range picker: Q1 2025, Q2 2025, Custom...')}><Calendar size={16} /> Select Period</button>
                    <button className="btn btn-outline" onClick={() => alert('Exporting financial report as CSV...')}><Download size={16} /> Export</button>
                </div>
            </div>

            {/* Overdue Alert */}
            {totalOverdue > 0 && (
                <div className="alert alert-danger" style={{ marginBottom: 20 }}>
                    <AlertTriangle size={16} />
                    <div><strong>{totalOverdue} overdue invoice(s)</strong> totaling AED 21,800 — <Link to="/finance/invoices" style={{ fontWeight: 600 }}>View details →</Link></div>
                </div>
            )}

            {/* KPI Cards */}
            <div className="grid-stats">
                {stats.finance.map(s => (
                    <div className="card" key={s.label}>
                        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{s.label}</p>
                        <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 700 }}>{s.value}</p>
                        <p style={{ fontSize: 'var(--text-xs)', color: s.trend === 'up' ? 'var(--success)' : 'var(--danger)', display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                            {s.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />} {s.change} vs last month
                        </p>
                    </div>
                ))}
            </div>

            {/* Revenue Breakdown + Invoice Status */}
            <div className="grid-2" style={{ marginBottom: 24 }}>
                {/* Revenue by Product */}
                <div>
                    <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <PieChart size={16} color="var(--primary)" /> Revenue by Product
                    </h3>
                    <div className="card">
                        {[
                            { product: 'DNA Analysis', revenue: 'AED 1,150,000', pct: 33, color: 'var(--primary)' },
                            { product: 'Complete Panel', revenue: 'AED 980,000', pct: 28, color: 'var(--accent)' },
                            { product: 'Blood Panel', revenue: 'AED 690,000', pct: 20, color: 'var(--info)' },
                            { product: 'Microbiome', revenue: 'AED 420,000', pct: 12, color: 'var(--warning)' },
                            { product: 'Skincare Analysis', revenue: 'AED 210,000', pct: 7, color: 'var(--success)' },
                        ].map((p, i) => (
                            <div key={i} style={{ marginBottom: 14 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>{p.product}</span>
                                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>{p.revenue} <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontSize: 'var(--text-xs)' }}>({p.pct}%)</span></span>
                                </div>
                                <div style={{ height: 6, background: 'var(--bg-secondary)', borderRadius: 3, overflow: 'hidden' }}>
                                    <div style={{ height: '100%', width: `${p.pct}%`, background: p.color, borderRadius: 3, transition: 'width 0.3s' }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Invoice Status Summary */}
                <div>
                    <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <FileText size={16} color="var(--accent)" /> Invoice Status Summary
                    </h3>
                    <div className="card">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 20 }}>
                            <div style={{ textAlign: 'center', padding: 16, background: 'var(--success)10', borderRadius: 'var(--radius)', border: '1px solid var(--success)30' }}>
                                <CheckCircle size={20} color="var(--success)" style={{ marginBottom: 4 }} />
                                <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--success)' }}>{totalPaid}</div>
                                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>Paid</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: 16, background: 'var(--warning)10', borderRadius: 'var(--radius)', border: '1px solid var(--warning)30' }}>
                                <Clock size={20} color="var(--warning)" style={{ marginBottom: 4 }} />
                                <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--warning)' }}>{totalPending}</div>
                                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>Pending</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: 16, background: 'var(--danger)10', borderRadius: 'var(--radius)', border: '1px solid var(--danger)30' }}>
                                <XCircle size={20} color="var(--danger)" style={{ marginBottom: 4 }} />
                                <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--danger)' }}>{totalOverdue}</div>
                                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>Overdue</div>
                            </div>
                        </div>
                        <div style={{ padding: 12, background: 'var(--bg-secondary)', borderRadius: 'var(--radius)', display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-sm)' }}>
                            <span style={{ color: 'var(--text-secondary)' }}>Total Outstanding</span>
                            <span style={{ fontWeight: 700 }}>AED 54,300</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Invoices */}
            <div style={{ marginBottom: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>Recent Invoices</h3>
                    <Link to="/finance/invoices" style={{ fontSize: 'var(--text-sm)', display: 'flex', alignItems: 'center', gap: 4 }}>View All <ArrowRight size={14} /></Link>
                </div>
                <div className="table-container">
                    <table>
                        <thead><tr><th>Invoice</th><th>Partner</th><th>Amount</th><th>Issued</th><th>Due Date</th><th>Paid</th><th>Status</th></tr></thead>
                        <tbody>
                            {invoices.map(inv => (
                                <tr key={inv.id}>
                                    <td><Link to={`/finance/invoices/${inv.id}`} style={{ fontWeight: 500, fontFamily: 'monospace', fontSize: 'var(--text-xs)' }}>{inv.id}</Link></td>
                                    <td>{inv.partner}</td>
                                    <td style={{ fontWeight: 600 }}>{inv.amount}</td>
                                    <td style={{ fontSize: 'var(--text-xs)' }}>{inv.issued}</td>
                                    <td style={{ fontSize: 'var(--text-xs)' }}>{inv.due}</td>
                                    <td style={{ fontSize: 'var(--text-xs)' }}>{inv.paid}</td>
                                    <td><span className={`badge ${inv.status === 'Paid' ? 'badge-success' : inv.status === 'Overdue' ? 'badge-danger' : 'badge-warning'}`}>{inv.status}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Bottom Row — Commissions + Payments */}
            <div className="grid-2">
                {/* Commission Summary */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                        <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>Commission Summary</h3>
                        <Link to="/finance/commissions" style={{ fontSize: 'var(--text-sm)', display: 'flex', alignItems: 'center', gap: 4 }}>Details <ArrowRight size={14} /></Link>
                    </div>
                    <div className="table-container">
                        <table>
                            <thead><tr><th>Period</th><th>Sales</th><th>Rate</th><th>Commission</th><th>Status</th></tr></thead>
                            <tbody>
                                {commissions.map((c, i) => (
                                    <tr key={i}>
                                        <td style={{ fontWeight: 500, fontSize: 'var(--text-sm)' }}>{c.period}</td>
                                        <td style={{ fontSize: 'var(--text-sm)' }}>{c.sales}</td>
                                        <td style={{ fontSize: 'var(--text-sm)' }}>{c.rate}</td>
                                        <td style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>{c.commission}</td>
                                        <td><span className={`badge ${c.status === 'Paid' ? 'badge-success' : 'badge-warning'}`}>{c.status}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Recent Payments */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                        <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>Recent Payments</h3>
                        <Link to="/finance/payments" style={{ fontSize: 'var(--text-sm)', display: 'flex', alignItems: 'center', gap: 4 }}>History <ArrowRight size={14} /></Link>
                    </div>
                    <div className="card">
                        {payments.map((p, i) => (
                            <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i < payments.length - 1 ? '1px solid var(--border-light)' : 'none' }}>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                        <CreditCard size={14} color="var(--success)" />
                                        <span style={{ fontWeight: 500, fontSize: 'var(--text-sm)' }}>{p.amount}</span>
                                    </div>
                                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 2, marginLeft: 22 }}>{p.invoice} · {p.method}</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: 'var(--text-xs)' }}>{p.date}</div>
                                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', fontFamily: 'monospace' }}>{p.reference}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Read-only notice */}
            <div style={{ marginTop: 24, padding: 12, background: 'var(--bg-secondary)', borderRadius: 'var(--radius)', textAlign: 'center', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                🔒 This is a read-only view. Contact your account manager for any financial adjustments or disputes.
            </div>
        </div>
    );
}
