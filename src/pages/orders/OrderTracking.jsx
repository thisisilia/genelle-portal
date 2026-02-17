import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, MapPin, Package, Truck, FlaskConical, FileCheck } from 'lucide-react';

export default function OrderTracking() {
    const { id } = useParams();
    const tracking = [
        { label: 'Order Placed', desc: 'Order ORD-2401 was placed by Dr. Sarah Mitchell', date: 'Jan 20, 2025 · 10:30 AM', icon: Package, done: true },
        { label: 'Payment Confirmed', desc: 'Payment of AED 2,400 confirmed via bank transfer', date: 'Jan 20, 2025 · 10:35 AM', icon: CheckCircle, done: true },
        { label: 'Order Processing', desc: 'Order is being prepared for shipment at warehouse', date: 'Jan 20, 2025 · 2:00 PM', icon: Package, done: true },
        { label: 'Shipped', desc: 'Tracking: DXB-20250121-001. Estimated delivery: Jan 24', date: 'Jan 21, 2025 · 9:15 AM', icon: Truck, done: true },
        { label: 'Out for Delivery', desc: 'Package is out for delivery to Dubai Health Clinic', date: 'Jan 24, 2025 · 8:30 AM', icon: MapPin, active: true },
        { label: 'Delivered', desc: 'Awaiting delivery confirmation', date: 'Pending', icon: CheckCircle, done: false },
        { label: 'Sample Registered', desc: 'Register sample after kit use', date: 'Pending', icon: FlaskConical, done: false },
        { label: 'Results Ready', desc: 'Report will be generated after lab analysis', date: 'Pending', icon: FileCheck, done: false },
    ];
    return (
        <div>
            <Link to={`/orders/${id}`} style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: 4, marginBottom: 16 }}><ArrowLeft size={14} /> Back to Order</Link>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 4 }}>Order Status Tracking</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 32 }}>Order {id} — Full status timeline</p>
            <div className="card" style={{ maxWidth: 600 }}>
                <div className="timeline">
                    {tracking.map((t, i) => (
                        <div key={i} className="timeline-item">
                            <div className={`timeline-dot ${t.done ? 'completed' : t.active ? 'active' : ''}`}>
                                {t.done ? <CheckCircle size={12} color="white" /> : t.active ? <Clock size={12} color="white" /> : null}
                            </div>
                            <div className="timeline-content">
                                <h4 style={{ display: 'flex', alignItems: 'center', gap: 6 }}><t.icon size={14} /> {t.label}</h4>
                                <p>{t.desc}</p>
                                <p style={{ fontSize: 'var(--text-xs)', marginTop: 2 }}>{t.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
