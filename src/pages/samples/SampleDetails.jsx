import { Link, useParams } from 'react-router-dom';
import { samples } from '../../data/mockData';
import { ArrowLeft, CheckCircle, Clock } from 'lucide-react';

export default function SampleDetails() {
    const { id } = useParams();
    const sample = samples.find(s => s.id === id) || samples[0];
    const steps = [
        { label: 'Registered', date: sample.registered, done: true },
        { label: 'Collected & Packaged', date: sample.registered, done: true },
        { label: 'In Transit to Lab', date: '2025-01-21', done: sample.status !== 'Registered' },
        { label: 'Received at Lab', date: sample.status === 'At Lab' || sample.status === 'Results Ready' || sample.status === 'Completed' ? '2025-01-22' : '—', done: sample.status === 'At Lab' || sample.status === 'Results Ready' || sample.status === 'Completed' },
        { label: 'Analysis in Progress', date: sample.status === 'Results Ready' || sample.status === 'Completed' ? '2025-01-22' : '—', done: sample.status === 'Results Ready' || sample.status === 'Completed' },
        { label: 'Results Ready', date: sample.status === 'Results Ready' || sample.status === 'Completed' ? '2025-01-25' : '—', done: sample.status === 'Results Ready' || sample.status === 'Completed' },
    ];
    return (
        <div>
            <Link to="/samples" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: 4, marginBottom: 16 }}><ArrowLeft size={14} /> Back to Samples</Link>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 24 }}>Sample {sample.id}</h1>
            <div className="grid-2">
                <div className="card">
                    <h3 style={{ fontWeight: 600, marginBottom: 16 }}>Sample Information</h3>
                    <div className="detail-grid">
                        <div className="detail-item"><label>Sample ID</label><span>{sample.id}</span></div>
                        <div className="detail-item"><label>Type</label><span>{sample.type}</span></div>
                        <div className="detail-item"><label>Client</label><span>{sample.client}</span></div>
                        <div className="detail-item"><label>Barcode</label><span style={{ fontFamily: 'monospace', fontSize: 'var(--text-xs)' }}>{sample.barcode}</span></div>
                        <div className="detail-item"><label>Lab</label><span>{sample.lab}</span></div>
                        <div className="detail-item"><label>Status</label><span className={`badge ${sample.status === 'Completed' || sample.status === 'Results Ready' ? 'badge-success' : sample.status === 'At Lab' ? 'badge-info' : 'badge-warning'}`}>{sample.status}</span></div>
                    </div>
                </div>
                <div className="card">
                    <h3 style={{ fontWeight: 600, marginBottom: 16 }}>Status Timeline</h3>
                    <div className="timeline">
                        {steps.map((s, i) => (
                            <div key={i} className="timeline-item"><div className={`timeline-dot ${s.done ? 'completed' : ''}`}>{s.done && <CheckCircle size={12} color="white" />}</div><div className="timeline-content"><h4>{s.label}</h4><p>{s.date}</p></div></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
