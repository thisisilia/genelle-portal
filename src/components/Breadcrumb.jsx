import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const labelMap = {
    dashboard: 'Dashboard',
    reseller: 'Reseller',
    master: 'Master Reseller',
    practitioner: 'Practitioner',
    finance: 'Finance',
    clients: 'Clients',
    create: 'Create',
    'create-success': 'Success',
    'create-client': 'Client Order',
    'create-stock': 'Stock Order',
    consent: 'Consent Status',
    orders: 'Orders',
    samples: 'Samples',
    register: 'Register',
    reports: 'Reports',
    share: 'Share',
    inventory: 'Inventory',
    restock: 'Restock Order',
    tracking: 'Tracking',
    invoices: 'Invoices',
    commissions: 'Commissions',
    payments: 'Payments',
    owed: 'Amount Owed',
    bank: 'Bank Details',
    documents: 'Documents',
    settings: 'Settings',
    support: 'Help & Support',
    transfer: 'Transfer Client',
    edit: 'Edit',
};

function formatSegment(segment) {
    if (labelMap[segment]) return labelMap[segment];
    // Handle IDs like CLT-001, ORD-2401 etc.
    if (/^[A-Z]{2,}-\d+$/.test(segment)) return segment;
    return segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export default function Breadcrumb() {
    const location = useLocation();
    const segments = location.pathname.split('/').filter(Boolean);

    if (segments.length === 0) return null;

    const crumbs = segments.map((seg, i) => {
        const path = '/' + segments.slice(0, i + 1).join('/');
        const label = formatSegment(seg);
        const isLast = i === segments.length - 1;
        return { path, label, isLast };
    });

    return (
        <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 'var(--text-xs)',
            color: 'var(--text-muted)',
            marginBottom: 16,
            flexWrap: 'wrap',
        }}>
            <Link to="/dashboard/reseller" style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)' }}>
                <Home size={13} />
            </Link>
            {crumbs.map((c, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <ChevronRight size={12} style={{ opacity: 0.5 }} />
                    {c.isLast ? (
                        <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{c.label}</span>
                    ) : (
                        <Link to={c.path} style={{ color: 'var(--text-muted)' }}>{c.label}</Link>
                    )}
                </span>
            ))}
        </nav>
    );
}
