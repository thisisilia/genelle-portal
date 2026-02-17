import { Link } from 'react-router-dom';
import { stats, invoices, commissions } from '../../data/mockData';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function FinanceDash() {
    return (
        <div>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 4 }}>Finance</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 24 }}>Financial overview and management</p>
            <div className="grid-stats">
                {stats.finance.map(s => (
                    <div className="card" key={s.label}>
                        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{s.label}</p>
                        <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 700 }}>{s.value}</p>
                        <p style={{ fontSize: 'var(--text-xs)', color: s.trend === 'up' ? 'var(--success)' : 'var(--danger)', display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>{s.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />} {s.change}</p>
                    </div>
                ))}
            </div>
            <div className="grid-2">
                <div><h3 style={{ fontWeight: 600, marginBottom: 12 }}>Recent Invoices</h3><div className="table-container"><table><thead><tr><th>Invoice</th><th>Amount</th><th>Status</th><th>Due</th></tr></thead><tbody>
                    {invoices.map(i => (<tr key={i.id}><td><Link to={`/finance/invoices/${i.id}`}>{i.id}</Link></td><td>{i.amount}</td><td><span className={`badge ${i.status === 'Paid' ? 'badge-success' : i.status === 'Pending' ? 'badge-warning' : 'badge-danger'}`}>{i.status}</span></td><td>{i.due}</td></tr>))}
                </tbody></table></div></div>
                <div><h3 style={{ fontWeight: 600, marginBottom: 12 }}>Commission Summary</h3><div className="table-container"><table><thead><tr><th>Period</th><th>Commission</th><th>Status</th></tr></thead><tbody>
                    {commissions.map(c => (<tr key={c.period}><td>{c.period}</td><td>{c.commission}</td><td><span className={`badge ${c.status === 'Paid' ? 'badge-success' : 'badge-warning'}`}>{c.status}</span></td></tr>))}
                </tbody></table></div></div>
            </div>
        </div>
    );
}
