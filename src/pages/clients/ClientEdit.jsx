import { Link, useParams } from 'react-router-dom';
import { clients } from '../../data/mockData';
import { ArrowLeft } from 'lucide-react';

export default function ClientEdit() {
    const { id } = useParams();
    const client = clients.find(c => c.id === id) || clients[0];
    return (
        <div>
            <Link to={`/clients/${id}`} style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: 4, marginBottom: 16 }}><ArrowLeft size={14} /> Back to Client</Link>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 24 }}>Edit Client Profile</h1>
            <div className="card" style={{ maxWidth: 700 }}>
                <div className="form-row">
                    <div className="form-group"><label className="form-label">First Name</label><input className="form-input" defaultValue={client.name.split(' ')[0]} /></div>
                    <div className="form-group"><label className="form-label">Last Name</label><input className="form-input" defaultValue={client.name.split(' ').slice(1).join(' ')} /></div>
                </div>
                <div className="form-row">
                    <div className="form-group"><label className="form-label">Email</label><input className="form-input" defaultValue={client.email} /></div>
                    <div className="form-group"><label className="form-label">Phone</label><input className="form-input" defaultValue={client.phone} /></div>
                </div>
                <div className="form-row">
                    <div className="form-group"><label className="form-label">Date of Birth</label><input className="form-input" type="date" defaultValue="1985-03-15" /></div>
                    <div className="form-group"><label className="form-label">Gender</label><select className="form-select" defaultValue="Male"><option>Male</option><option>Female</option></select></div>
                </div>
                <div className="form-group"><label className="form-label">Address</label><input className="form-input" defaultValue="45 Sheikh Zayed Rd, Dubai" /></div>
                <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                    <Link to={`/clients/${id}`} className="btn btn-outline">Cancel</Link>
                    <Link to={`/clients/${id}`} className="btn btn-primary">Save Changes</Link>
                </div>
            </div>
        </div>
    );
}
