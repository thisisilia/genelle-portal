import { Link } from 'react-router-dom';
import { clients } from '../../data/mockData';

export default function CreateClientOrder() {
    return (
        <div>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 4 }}>Create Client Order</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 24 }}>Place a new order for a client</p>
            <div className="card" style={{ maxWidth: 700 }}>
                <div className="form-group"><label className="form-label">Select Client</label>
                    <select className="form-select"><option>Select a client...</option>{clients.map(c => <option key={c.id}>{c.name} ({c.id})</option>)}</select>
                </div>
                <h3 style={{ fontWeight: 600, margin: '24px 0 16px' }}>Products</h3>
                {[{ name: 'DNA Analysis Kit', price: 'AED 900' }, { name: 'Blood Panel Kit', price: 'AED 850' }, { name: 'Microbiome Kit', price: 'AED 1,200' }, { name: 'Complete Panel Kit', price: 'AED 2,400' }].map(p => (
                    <label key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, border: '1px solid var(--border)', borderRadius: 'var(--radius)', marginBottom: 8, cursor: 'pointer' }}>
                        <input type="checkbox" />
                        <div style={{ flex: 1 }}><div style={{ fontWeight: 500, fontSize: 'var(--text-sm)' }}>{p.name}</div></div>
                        <span style={{ fontWeight: 600 }}>{p.price}</span>
                        <input className="form-input" type="number" defaultValue={1} min={1} style={{ width: 70 }} />
                    </label>
                ))}
                <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '24px 0' }} />
                <div className="form-group"><label className="form-label">Shipping Address</label><input className="form-input" placeholder="Use client address or enter custom..." /></div>
                <div className="form-group"><label className="form-label">Notes</label><textarea className="form-textarea" placeholder="Special instructions..." /></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
                    <div><span style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Estimated Total: </span><strong style={{ fontSize: 'var(--text-lg)' }}>AED 2,400</strong></div>
                    <div style={{ display: 'flex', gap: 8 }}><Link to="/orders" className="btn btn-outline">Cancel</Link><Link to="/orders/ORD-2401" className="btn btn-primary">Place Order</Link></div>
                </div>
            </div>
        </div>
    );
}
