import { Link } from 'react-router-dom';
import { stats, clients, samples, reports, clientTests, clientPlans, questionnaires } from '../../data/mockData';
import {
    TrendingUp, TrendingDown, ArrowRight, Stethoscope, ClipboardList,
    FileText, TestTubes, AlertCircle, Clock, CheckCircle, User, Activity, Heart
} from 'lucide-react';

export default function PractitionerDashboard() {
    const pendingReports = reports.filter(r => r.status !== 'Ready').length;
    const awaitingQuestionnaires = questionnaires.filter(q => q.status !== 'Completed').length;

    return (
        <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div>
                    <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600 }}>Practitioner Dashboard</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Dr. Noor Al Ameri · Dubai Health Clinic</p>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                    <Link to="/samples/register" className="btn btn-outline"><TestTubes size={16} /> Register Sample</Link>
                    <Link to="/clients" className="btn btn-primary"><User size={16} /> My Clients</Link>
                </div>
            </div>

            {/* Alerts */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
                {pendingReports > 0 && (
                    <div className="alert alert-info" style={{ flex: 1 }}>
                        <FileText size={16} />
                        <div><strong>{pendingReports} report(s)</strong> pending lab results — estimated 3–5 days</div>
                    </div>
                )}
                {awaitingQuestionnaires > 0 && (
                    <div className="alert alert-warning" style={{ flex: 1 }}>
                        <ClipboardList size={16} />
                        <div><strong>{awaitingQuestionnaires} questionnaire(s)</strong> awaiting client completion — <Link to="/clients" style={{ fontWeight: 600 }}>Follow up →</Link></div>
                    </div>
                )}
            </div>

            {/* KPI Cards */}
            <div className="grid-stats">
                {stats.practitioner.map(s => (
                    <div className="card" key={s.label}>
                        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{s.label}</p>
                        <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 700 }}>{s.value}</p>
                        <p style={{ fontSize: 'var(--text-xs)', color: s.trend === 'up' ? 'var(--success)' : 'var(--danger)', display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                            {s.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />} {s.change} vs last month
                        </p>
                    </div>
                ))}
            </div>

            {/* Client Health Pipeline */}
            <div className="card" style={{ marginBottom: 24 }}>
                <h3 style={{ fontWeight: 600, marginBottom: 16, fontSize: 'var(--text-base)', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Heart size={16} color="var(--danger)" /> Client Health Pipeline
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
                    {[
                        { stage: 'Onboarding', count: 3, color: 'var(--neutral-400)', desc: 'Consent & questionnaires' },
                        { stage: 'Testing', count: 5, color: 'var(--info)', desc: 'Samples active' },
                        { stage: 'Awaiting Results', count: 8, color: 'var(--warning)', desc: 'At lab or in transit' },
                        { stage: 'Review & Plan', count: 12, color: 'var(--accent)', desc: 'Reports ready for review' },
                        { stage: 'Active Plan', count: 14, color: 'var(--success)', desc: 'On meal/fitness plans' },
                    ].map(p => (
                        <div key={p.stage} style={{ textAlign: 'center', padding: 16, background: 'var(--bg-secondary)', borderRadius: 'var(--radius)', border: '1px solid var(--border-light)' }}>
                            <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: p.color }}>{p.count}</div>
                            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginTop: 4 }}>{p.stage}</div>
                            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 2 }}>{p.desc}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 2-Column Main Content */}
            <div className="grid-2">
                {/* Clients Needing Attention */}
                <div>
                    <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <AlertCircle size={16} color="var(--warning)" /> Clients Needing Attention
                    </h3>
                    <div className="card">
                        {[
                            { name: 'John Williams', issue: 'Consent pending — not yet signed', urgency: 'high', id: 'CLT-003' },
                            { name: 'Priya Sharma', issue: 'Questionnaire incomplete — Family History', urgency: 'medium', id: 'CLT-008' },
                            { name: 'Ahmed Al Rashid', issue: 'Blood panel results ready — review needed', urgency: 'low', id: 'CLT-001' },
                            { name: 'Lisa Chen', issue: 'Consent expired — needs renewal', urgency: 'high', id: 'CLT-006' },
                        ].map((c, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i < 3 ? '1px solid var(--border-light)' : 'none' }}>
                                <div>
                                    <Link to={`/clients/${c.id}`} style={{ fontWeight: 500, fontSize: 'var(--text-sm)' }}>{c.name}</Link>
                                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 2 }}>{c.issue}</div>
                                </div>
                                <span className={`badge ${c.urgency === 'high' ? 'badge-danger' : c.urgency === 'medium' ? 'badge-warning' : 'badge-info'}`}>
                                    {c.urgency === 'high' ? 'Urgent' : c.urgency === 'medium' ? 'Follow up' : 'Review'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Reports */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                        <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
                            <FileText size={16} color="var(--primary)" /> Recent Reports
                        </h3>
                        <Link to="/reports" style={{ fontSize: 'var(--text-sm)', display: 'flex', alignItems: 'center', gap: 4 }}>View All <ArrowRight size={14} /></Link>
                    </div>
                    <div className="table-container">
                        <table>
                            <thead><tr><th>Client</th><th>Test Type</th><th>Status</th><th></th></tr></thead>
                            <tbody>
                                {reports.map(r => (
                                    <tr key={r.id}>
                                        <td style={{ fontWeight: 500 }}>{r.client}</td>
                                        <td><span style={{ fontSize: 'var(--text-xs)' }}>{r.type}</span></td>
                                        <td><span className={`badge ${r.status === 'Ready' ? 'badge-success' : 'badge-warning'}`}>{r.status}</span></td>
                                        <td>{r.status === 'Ready' ? <Link to={`/reports/${r.id}`} className="btn btn-sm btn-outline">View</Link> : <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>Pending</span>}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Bottom Row — Samples & Plans */}
            <div className="grid-2" style={{ marginTop: 24 }}>
                {/* Active Samples */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                        <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>Active Samples</h3>
                        <Link to="/samples" style={{ fontSize: 'var(--text-sm)', display: 'flex', alignItems: 'center', gap: 4 }}>Track All <ArrowRight size={14} /></Link>
                    </div>
                    <div className="card">
                        {samples.filter(s => s.status !== 'Completed').map((s, i) => (
                            <div key={s.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--border-light)' }}>
                                <div>
                                    <span style={{ fontWeight: 500, fontSize: 'var(--text-sm)' }}>{s.client}</span>
                                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{s.type} · {s.barcode}</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{s.lab}</span>
                                    <span className={`badge ${s.status === 'Results Ready' ? 'badge-success' : s.status === 'At Lab' ? 'badge-info' : s.status === 'In Transit' ? 'badge-warning' : 'badge-neutral'}`}>{s.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Today's Schedule */}
                <div>
                    <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 12 }}>Today's Schedule</h3>
                    <div className="card">
                        {[
                            { time: '09:00 AM', client: 'Ahmed Al Rashid', type: 'Report Review', status: 'done' },
                            { time: '10:30 AM', client: 'Fatima Hassan', type: 'Sample Collection', status: 'done' },
                            { time: '01:00 PM', client: 'Maria Garcia', type: 'Initial Consultation', status: 'current' },
                            { time: '03:00 PM', client: 'John Williams', type: 'Consent & Onboarding', status: 'upcoming' },
                            { time: '04:30 PM', client: 'Khalid Bin Omar', type: 'Plan Review', status: 'upcoming' },
                        ].map((appt, i) => (
                            <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: i < 4 ? '1px solid var(--border-light)' : 'none', opacity: appt.status === 'done' ? 0.5 : 1 }}>
                                <div style={{ minWidth: 70, fontSize: 'var(--text-xs)', fontWeight: 600, color: appt.status === 'current' ? 'var(--primary)' : 'var(--text-muted)', paddingTop: 2 }}>{appt.time}</div>
                                <div style={{ width: 3, borderRadius: 2, background: appt.status === 'current' ? 'var(--primary)' : appt.status === 'done' ? 'var(--success)' : 'var(--border)', flexShrink: 0 }} />
                                <div>
                                    <div style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>{appt.client}</div>
                                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{appt.type}</div>
                                </div>
                                {appt.status === 'done' && <CheckCircle size={14} color="var(--success)" style={{ marginLeft: 'auto' }} />}
                                {appt.status === 'current' && <span className="badge badge-info" style={{ marginLeft: 'auto', fontSize: 10 }}>Now</span>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
