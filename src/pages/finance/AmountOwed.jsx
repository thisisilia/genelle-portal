export default function AmountOwed() {
    return (
        <div>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 4 }}>Amount Owed</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 24 }}>Outstanding balance summary</p>
            <div className="grid-stats">
                <div className="card"><p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: 4 }}>Total Outstanding</p><p style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--danger)' }}>AED 54,300</p></div>
                <div className="card"><p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: 4 }}>Overdue</p><p style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--danger)' }}>AED 21,800</p></div>
                <div className="card"><p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: 4 }}>Due This Month</p><p style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--warning)' }}>AED 32,500</p></div>
            </div>
            <div className="table-container"><table><thead><tr><th>Invoice</th><th>Amount</th><th>Due Date</th><th>Days Overdue</th><th>Status</th></tr></thead><tbody>
                <tr><td>INV-3004</td><td style={{ fontWeight: 600 }}>AED 21,800</td><td>2025-01-15</td><td style={{ color: 'var(--danger)', fontWeight: 600 }}>7 days</td><td><span className="badge badge-danger">Overdue</span></td></tr>
                <tr><td>INV-3002</td><td style={{ fontWeight: 600 }}>AED 32,500</td><td>2025-02-15</td><td>—</td><td><span className="badge badge-warning">Pending</span></td></tr>
            </tbody></table></div>
        </div>
    );
}
