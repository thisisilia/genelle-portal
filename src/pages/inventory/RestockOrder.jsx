import { Link } from 'react-router-dom';
import { inventory } from '../../data/mockData';
import { ArrowLeft } from 'lucide-react';

export default function RestockOrder() {
    return (
        <div>
            <Link to="/inventory" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: 4, marginBottom: 16 }}><ArrowLeft size={14} /> Back to Inventory</Link>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 4 }}>Restock Order</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 24 }}>Select items and quantities to replenish</p>
            <div className="card" style={{ maxWidth: 700 }}>
                {inventory.map(item => (
                    <label key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, border: '1px solid var(--border)', borderRadius: 'var(--radius)', marginBottom: 8, cursor: 'pointer' }}>
                        <input type="checkbox" defaultChecked={item.status === 'Low Stock'} />
                        <div style={{ flex: 1 }}><div style={{ fontWeight: 500, fontSize: 'var(--text-sm)' }}>{item.name}</div><div style={{ fontSize: 'var(--text-xs)', color: item.status === 'Low Stock' ? 'var(--danger)' : 'var(--text-secondary)' }}>Current stock: {item.stock} (min: {item.threshold})</div></div>
                        <span style={{ fontWeight: 600 }}>{item.price}/unit</span>
                        <input className="form-input" type="number" defaultValue={item.status === 'Low Stock' ? 20 : 0} style={{ width: 80 }} />
                    </label>
                ))}
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 16 }}><Link to="/inventory" className="btn btn-outline">Cancel</Link><Link to="/inventory/tracking" className="btn btn-primary">Place Restock Order</Link></div>
            </div>
        </div>
    );
}
