import { Link } from 'react-router-dom';
import { inventory } from '../../data/mockData';
import { AlertTriangle, Plus } from 'lucide-react';

export default function InventoryOverview() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div><h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600 }}>Inventory</h1><p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Monitor stock levels and manage restocking</p></div>
                <Link to="/inventory/restock" className="btn btn-primary"><Plus size={16} /> Restock Order</Link>
            </div>
            {inventory.filter(i => i.status === 'Low Stock').length > 0 && <div className="alert alert-warning" style={{ marginBottom: 16 }}><AlertTriangle size={16} /><span>{inventory.filter(i => i.status === 'Low Stock').length} items below restock threshold</span></div>}
            <div className="table-container"><table><thead><tr><th>Product</th><th>SKU</th><th>Stock</th><th>Threshold</th><th>Status</th><th>Unit Price</th><th>Actions</th></tr></thead><tbody>
                {inventory.map(i => (
                    <tr key={i.id}><td style={{ fontWeight: 500 }}>{i.name}</td><td style={{ fontFamily: 'monospace', fontSize: 'var(--text-xs)' }}>{i.sku}</td><td style={{ fontWeight: 600 }}>{i.stock}</td><td>{i.threshold}</td><td><span className={`badge ${i.status === 'In Stock' ? 'badge-success' : 'badge-danger'}`}>{i.status}</span></td><td>{i.price}</td><td><Link to="/inventory/restock" className="btn btn-sm btn-outline">Restock</Link></td></tr>
                ))}
            </tbody></table></div>
        </div>
    );
}
