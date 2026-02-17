import { Link, useParams } from 'react-router-dom';
import { reports } from '../../data/mockData';
import { ArrowLeft, Download, Share2, Dna, Droplets, Bug } from 'lucide-react';

export default function ReportViewer() {
    const { id } = useParams();
    const report = reports.find(r => r.id === id) || reports[0];
    return (
        <div>
            <Link to="/reports" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: 4, marginBottom: 16 }}><ArrowLeft size={14} /> Back to Reports</Link>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div><h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600 }}>{report.type} Report</h1><p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>{report.id} · {report.client} · Generated {report.generated}</p></div>
                <div style={{ display: 'flex', gap: 8 }}><button className="btn btn-outline" onClick={() => alert(`Downloading ${report.type} report for ${report.client} as PDF...`)}><Download size={16} /> Download PDF</button><Link to={`/reports/${id}/share`} className="btn btn-accent"><Share2 size={16} /> Share</Link></div>
            </div>
            <div className="card" style={{ minHeight: 400 }}>
                <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: 16, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 'var(--radius)', background: 'var(--accent-bg)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Dna size={24} /></div>
                    <div><h2 style={{ fontSize: 'var(--text-lg)' }}>{report.type}</h2><p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Comprehensive analysis for {report.client}</p></div>
                </div>
                <div className="grid-3" style={{ marginBottom: 24 }}>
                    <div className="card" style={{ textAlign: 'center' }}><p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginBottom: 4 }}>Risk Score</p><p style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--success)' }}>Low</p></div>
                    <div className="card" style={{ textAlign: 'center' }}><p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginBottom: 4 }}>Markers Analyzed</p><p style={{ fontSize: 'var(--text-2xl)', fontWeight: 700 }}>142</p></div>
                    <div className="card" style={{ textAlign: 'center' }}><p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginBottom: 4 }}>Actionable Insights</p><p style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--info)' }}>12</p></div>
                </div>
                <h3 style={{ fontWeight: 600, marginBottom: 12 }}>Key Findings</h3>
                {['Vitamin D deficiency detected — supplementation recommended', 'MTHFR gene variant identified — folate metabolism affected', 'Lactose intolerance genetic marker present', 'Omega-3 fatty acid levels below optimal range'].map((f, i) => (
                    <div key={i} style={{ padding: 12, borderLeft: `3px solid ${i === 0 ? 'var(--warning)' : i === 1 ? 'var(--info)' : 'var(--accent)'}`, background: 'var(--bg)', borderRadius: '0 var(--radius) var(--radius) 0', marginBottom: 8, fontSize: 'var(--text-sm)' }}>{f}</div>
                ))}
            </div>
        </div>
    );
}
