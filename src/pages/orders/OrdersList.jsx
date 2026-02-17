import { Link } from 'react-router-dom';
import { orders } from '../../data/mockData';
import { Plus, Search, Filter } from 'lucide-react';

export default function OrdersList() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div><h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600 }}>Orders</h1><p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>{orders.length} total orders</p></div>
                <div style={{ display: 'flex', gap: 8 }}>
                    <Link to="/orders/create-client" className="btn btn-accent"><Plus size={16} /> Client Order</Link>
                    <Link to="/orders/create-stock" className="btn btn-primary"><Plus size={16} /> Stock Order</Link>
                </div>
            </div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                <div className="search-bar"><Search size={16} color="var(--text-muted)" /><input placeholder="Search orders..." /></div>
                <button className="btn btn-outline" onClick={() => alert('Filter options: Status, Order Type, Date range')}><Filter size={16} /> Filters</button>
            </div>
            <div className="table-container"><table><thead><tr><th>Order ID</th><th>Client</th><th>Type</th><th>Items</th><th>Amount</th><th>Status</th><th>Date</th><th>Actions</th></tr></thead><tbody>
                {orders.map(o => (
                    <tr key={o.id}><td style={{ fontFamily: 'monospace' }}>{o.id}</td><td>{o.client}</td><td><span className={`badge ${o.type === 'Client' ? 'badge-info' : 'badge-neutral'}`}>{o.type}</span></td><td>{o.items}</td><td style={{ fontWeight: 500 }}>{o.amount}</td><td><span className={`badge ${o.status === 'Completed' || o.status === 'Delivered' ? 'badge-success' : o.status === 'Shipped' ? 'badge-info' : o.status === 'Processing' ? 'badge-warning' : 'badge-neutral'}`}>{o.status}</span></td><td>{o.date}</td><td><Link to={`/orders/${o.id}`} className="btn btn-sm btn-outline">View</Link></td></tr>
                ))}
            </tbody></table></div>
        </div>
    );
}
