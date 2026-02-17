import { Link, useParams } from 'react-router-dom';
import { orders } from '../../data/mockData';
import { ArrowLeft, CheckCircle, Circle, Truck, Package, FlaskConical } from 'lucide-react';

export default function OrderDetails() {
    const { id } = useParams();
    const order = orders.find(o => o.id === id) || orders[0];
    const steps = [
        { label: 'Order Placed', date: order.date, done: true },
        { label: 'Payment Confirmed', date: order.date, done: true },
        { label: 'Processing', date: '2025-01-21', done: order.status !== 'Pending' },
        { label: 'Shipped', date: order.status === 'Shipped' || order.status === 'Delivered' || order.status === 'Completed' ? '2025-01-22' : '—', done: order.status === 'Shipped' || order.status === 'Delivered' || order.status === 'Completed' },
        { label: 'Delivered', date: order.status === 'Delivered' || order.status === 'Completed' ? '2025-01-24' : '—', done: order.status === 'Delivered' || order.status === 'Completed' },
    ];
    return (
        <div>
            <Link to="/orders" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: 4, marginBottom: 16 }}><ArrowLeft size={14} /> Back to Orders</Link>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div><h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600 }}>Order {order.id}</h1><p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Placed on {order.date}</p></div>
                <span className={`badge ${order.status === 'Completed' || order.status === 'Delivered' ? 'badge-success' : order.status === 'Shipped' ? 'badge-info' : order.status === 'Processing' ? 'badge-warning' : 'badge-neutral'}`} style={{ fontSize: 'var(--text-sm)', padding: '4px 16px' }}>{order.status}</span>
            </div>
            <div className="grid-2">
                <div className="card">
                    <h3 style={{ fontWeight: 600, marginBottom: 16 }}>Order Details</h3>
                    <div className="detail-grid">
                        <div className="detail-item"><label>Order ID</label><span>{order.id}</span></div>
                        <div className="detail-item"><label>Client</label><span>{order.client}</span></div>
                        <div className="detail-item"><label>Type</label><span>{order.type}</span></div>
                        <div className="detail-item"><label>Amount</label><span>{order.amount}</span></div>
                    </div>
                    <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '16px 0' }} />
                    <h4 style={{ fontWeight: 600, marginBottom: 12 }}>Items</h4>
                    <div style={{ padding: 12, background: 'var(--bg)', borderRadius: 'var(--radius)', display: 'flex', justifyContent: 'space-between' }}>
                        <span>{order.items}</span><span style={{ fontWeight: 600 }}>{order.amount}</span>
                    </div>
                </div>
                <div className="card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                        <h3 style={{ fontWeight: 600 }}>Order Tracking</h3>
                        <Link to={`/orders/${id}/tracking`} style={{ fontSize: 'var(--text-sm)' }}>Full Timeline →</Link>
                    </div>
                    <div className="timeline">
                        {steps.map((s, i) => (
                            <div key={i} className="timeline-item">
                                <div className={`timeline-dot ${s.done ? 'completed' : ''}`}>{s.done && <CheckCircle size={12} color="white" />}</div>
                                <div className="timeline-content"><h4>{s.label}</h4><p>{s.date}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
