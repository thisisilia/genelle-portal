import { Link, useParams } from 'react-router-dom';
import { invoices } from '../../data/mockData';
import { ArrowLeft, Download } from 'lucide-react';

export default function InvoiceDetails() {
    const { id } = useParams();
    const inv = invoices.find(i => i.id === id) || invoices[0];
    return (
        <div>
            <Link to="/finance/invoices" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: 4, marginBottom: 16 }}><ArrowLeft size={14} /> Back to Invoices</Link>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div><h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600 }}>Invoice {inv.id}</h1><p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Issued {inv.issued}</p></div>
                <div style={{ display: 'flex', gap: 8 }}><span className={`badge ${inv.status === 'Paid' ? 'badge-success' : inv.status === 'Pending' ? 'badge-warning' : 'badge-danger'}`} style={{ fontSize: 'var(--text-sm)', padding: '4px 16px' }}>{inv.status}</span><button className="btn btn-outline" onClick={() => alert(`Downloading invoice ${inv.id} as PDF...`)}><Download size={16} /> Download</button></div>
            </div>
            <div className="card" style={{ maxWidth: 700 }}>
                <div className="detail-grid" style={{ marginBottom: 24 }}>
                    <div className="detail-item"><label>Invoice ID</label><span>{inv.id}</span></div>
                    <div className="detail-item"><label>Partner</label><span>{inv.partner}</span></div>
                    <div className="detail-item"><label>Issued</label><span>{inv.issued}</span></div>
                    <div className="detail-item"><label>Due Date</label><span>{inv.due}</span></div>
                    <div className="detail-item"><label>Amount</label><span style={{ fontSize: 'var(--text-lg)', fontWeight: 700 }}>{inv.amount}</span></div>
                    <div className="detail-item"><label>Paid Date</label><span>{inv.paid}</span></div>
                </div>
                <h3 style={{ fontWeight: 600, marginBottom: 12 }}>Line Items</h3>
                <table style={{ marginBottom: 16 }}><thead><tr><th>Description</th><th>Qty</th><th>Unit Price</th><th>Total</th></tr></thead><tbody>
                    <tr><td>DNA Analysis Kits</td><td>10</td><td>AED 900</td><td>AED 9,000</td></tr>
                    <tr><td>Blood Panel Kits</td><td>15</td><td>AED 850</td><td>AED 12,750</td></tr>
                    <tr><td>Commission (15%)</td><td>—</td><td>—</td><td>-AED 3,262</td></tr>
                </tbody></table>
                <div style={{ textAlign: 'right', borderTop: '2px solid var(--border)', paddingTop: 12 }}><span style={{ color: 'var(--text-secondary)' }}>Total: </span><strong style={{ fontSize: 'var(--text-xl)' }}>{inv.amount}</strong></div>
            </div>
        </div>
    );
}
