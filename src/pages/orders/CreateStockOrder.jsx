import { Link } from 'react-router-dom';
import { inventory } from '../../data/mockData';

export default function CreateStockOrder() {
    return (
        <div>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 4 }}>Create Stock Order</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 24 }}>Bulk order test kits for your inventory</p>
            <div className="card" style={{ maxWidth: 700 }}>
                <h3 style={{ fontWeight: 600, marginBottom: 16 }}>Select Kits</h3>
                {inventory.map(item => (
                    <label key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, border: '1px solid var(--border)', borderRadius: 'var(--radius)', marginBottom: 8, cursor: 'pointer' }}>
                        <input type="checkbox" />
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 500, fontSize: 'var(--text-sm)' }}>{item.name}</div>
                            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>SKU: {item.sku} · Current Stock: {item.stock}</div>
                        </div>
                        <span style={{ fontWeight: 600 }}>{item.price}/unit</span>
                        <input className="form-input" type="number" defaultValue={10} min={1} style={{ width: 80 }} />
                    </label>
                ))}
                <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '24px 0' }} />
                <div className="form-group"><label className="form-label">Delivery Address</label><input className="form-input" defaultValue="Dubai Health Clinic, Sheikh Zayed Rd, Dubai" /></div>
                <div className="form-group"><label className="form-label">Priority</label><select className="form-select"><option>Standard (5-7 days)</option><option>Express (2-3 days)</option></select></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
                    <div><span style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Total: </span><strong style={{ fontSize: 'var(--text-lg)' }}>AED 18,000</strong></div>
                    <div style={{ display: 'flex', gap: 8 }}><Link to="/orders" className="btn btn-outline">Cancel</Link><Link to="/orders" className="btn btn-primary">Place Stock Order</Link></div>
                </div>
            </div>
        </div>
    );
}
