import { Link } from 'react-router-dom';
import { payments } from '../../data/mockData';
import { ArrowLeft } from 'lucide-react';

export default function PaymentHistory() {
    return (
        <div>
            <Link to="/finance" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: 4, marginBottom: 16 }}><ArrowLeft size={14} /> Back to Finance</Link>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 4 }}>Payment History</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 24 }}>{payments.length} recorded payments</p>
            <div className="table-container"><table><thead><tr><th>Payment ID</th><th>Invoice</th><th>Amount</th><th>Method</th><th>Date</th><th>Reference</th></tr></thead><tbody>
                {payments.map(p => (
                    <tr key={p.id}><td style={{ fontFamily: 'monospace' }}>{p.id}</td><td>{p.invoice}</td><td style={{ fontWeight: 600 }}>{p.amount}</td><td>{p.method}</td><td>{p.date}</td><td style={{ fontFamily: 'monospace', fontSize: 'var(--text-xs)' }}>{p.reference}</td></tr>
                ))}
            </tbody></table></div>
        </div>
    );
}
