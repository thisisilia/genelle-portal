import { Link } from 'react-router-dom';
import { invoices } from '../../data/mockData';

export default function InvoicesList() {
    return (
        <div>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 4 }}>Invoices</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 24 }}>{invoices.length} invoices · Manage billing and payment status</p>
            <div className="table-container"><table><thead><tr><th>Invoice ID</th><th>Amount</th><th>Status</th><th>Issued</th><th>Due</th><th>Paid</th><th>Actions</th></tr></thead><tbody>
                {invoices.map(i => (
                    <tr key={i.id}><td style={{ fontFamily: 'monospace' }}>{i.id}</td><td style={{ fontWeight: 600 }}>{i.amount}</td><td><span className={`badge ${i.status === 'Paid' ? 'badge-success' : i.status === 'Pending' ? 'badge-warning' : 'badge-danger'}`}>{i.status}</span></td><td>{i.issued}</td><td>{i.due}</td><td>{i.paid}</td><td><Link to={`/finance/invoices/${i.id}`} className="btn btn-sm btn-outline">View</Link></td></tr>
                ))}
            </tbody></table></div>
        </div>
    );
}
