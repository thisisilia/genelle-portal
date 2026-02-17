import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function InventoryTracking() {
    const invOrders = [
        { id: 'INV-ORD-001', items: 'Blood Kit x20, DNA Kit x10', status: 'Delivered', ordered: '2025-01-10', delivered: '2025-01-17' },
        { id: 'INV-ORD-002', items: 'Microbiome Kit x15', status: 'In Transit', ordered: '2025-01-18', delivered: '—' },
        { id: 'INV-ORD-003', items: 'Complete Panel Kit x5', status: 'Processing', ordered: '2025-01-20', delivered: '—' },
    ];
    return (
        <div>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 4 }}>Inventory Order Tracking</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 24 }}>Track your restock orders</p>
            <div className="table-container"><table><thead><tr><th>Order ID</th><th>Items</th><th>Status</th><th>Ordered</th><th>Delivered</th></tr></thead><tbody>
                {invOrders.map(o => (
                    <tr key={o.id}><td style={{ fontFamily: 'monospace' }}>{o.id}</td><td>{o.items}</td><td><span className={`badge ${o.status === 'Delivered' ? 'badge-success' : o.status === 'In Transit' ? 'badge-info' : 'badge-warning'}`}>{o.status}</span></td><td>{o.ordered}</td><td>{o.delivered}</td></tr>
                ))}
            </tbody></table></div>
        </div>
    );
}
