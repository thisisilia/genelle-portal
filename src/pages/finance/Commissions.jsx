import { commissions } from '../../data/mockData';

export default function Commissions() {
    return (
        <div>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 4 }}>Commissions</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 24 }}>Your commission earnings breakdown</p>
            <div className="table-container"><table><thead><tr><th>Period</th><th>Total Sales</th><th>Rate</th><th>Commission</th><th>Status</th></tr></thead><tbody>
                {commissions.map(c => (
                    <tr key={c.period}><td style={{ fontWeight: 500 }}>{c.period}</td><td>{c.sales}</td><td>{c.rate}</td><td style={{ fontWeight: 600 }}>{c.commission}</td><td><span className={`badge ${c.status === 'Paid' ? 'badge-success' : 'badge-warning'}`}>{c.status}</span></td></tr>
                ))}
            </tbody></table></div>
        </div>
    );
}
