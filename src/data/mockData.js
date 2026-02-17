// Mock data for Genelle Health B2B Portal

export const currentUser = {
  name: 'Dr. Sarah Mitchell',
  email: 'sarah@dubaiclinic.ae',
  role: 'Reseller Admin',
  org: 'Dubai Health Clinic',
  avatar: 'SM',
};

export const stats = {
  reseller: [
    { label: 'Total Clients', value: '248', change: '+12%', trend: 'up' },
    { label: 'Active Orders', value: '34', change: '+5%', trend: 'up' },
    { label: 'Samples In Transit', value: '18', change: '-2', trend: 'down' },
    { label: 'Revenue (MTD)', value: 'AED 142,500', change: '+18%', trend: 'up' },
  ],
  master: [
    { label: 'Total Resellers', value: '12', change: '+2', trend: 'up' },
    { label: 'Total Clients', value: '1,847', change: '+156', trend: 'up' },
    { label: 'Total Orders', value: '423', change: '+38', trend: 'up' },
    { label: 'Revenue (MTD)', value: 'AED 1,240,000', change: '+22%', trend: 'up' },
  ],
  practitioner: [
    { label: 'My Clients', value: '42', change: '+3', trend: 'up' },
    { label: 'Pending Reports', value: '8', change: '-1', trend: 'down' },
    { label: 'Active Plans', value: '28', change: '+5', trend: 'up' },
    { label: 'Samples Registered', value: '15', change: '+2', trend: 'up' },
  ],
  finance: [
    { label: 'Total Revenue', value: 'AED 3,450,000', change: '+15%', trend: 'up' },
    { label: 'Commissions Due', value: 'AED 287,500', change: '+8%', trend: 'up' },
    { label: 'Outstanding Invoices', value: '14', change: '-3', trend: 'down' },
    { label: 'Payments Received', value: 'AED 2,180,000', change: '+20%', trend: 'up' },
  ],
};

export const clients = [
  { id: 'CLT-001', name: 'Ahmed Al Rashid', email: 'ahmed@mail.com', phone: '+971 50 123 4567', status: 'Active', consent: 'Completed', tests: 3, created: '2024-12-15' },
  { id: 'CLT-002', name: 'Fatima Hassan', email: 'fatima@mail.com', phone: '+971 55 234 5678', status: 'Active', consent: 'Completed', tests: 2, created: '2024-12-20' },
  { id: 'CLT-003', name: 'John Williams', email: 'john.w@mail.com', phone: '+971 50 345 6789', status: 'Pending', consent: 'Pending', tests: 0, created: '2025-01-05' },
  { id: 'CLT-004', name: 'Maria Garcia', email: 'maria.g@mail.com', phone: '+971 52 456 7890', status: 'Active', consent: 'Completed', tests: 1, created: '2025-01-10' },
  { id: 'CLT-005', name: 'Khalid Bin Omar', email: 'khalid@mail.com', phone: '+971 56 567 8901', status: 'Active', consent: 'Completed', tests: 4, created: '2025-01-15' },
  { id: 'CLT-006', name: 'Lisa Chen', email: 'lisa.c@mail.com', phone: '+971 50 678 9012', status: 'Inactive', consent: 'Expired', tests: 1, created: '2024-11-20' },
  { id: 'CLT-007', name: 'Omar Youssef', email: 'omar.y@mail.com', phone: '+971 54 789 0123', status: 'Active', consent: 'Completed', tests: 2, created: '2025-01-18' },
  { id: 'CLT-008', name: 'Priya Sharma', email: 'priya@mail.com', phone: '+971 50 890 1234', status: 'Pending', consent: 'Sent', tests: 0, created: '2025-01-22' },
];

export const orders = [
  { id: 'ORD-2401', client: 'Ahmed Al Rashid', type: 'Client', items: 'DNA + Blood Panel', status: 'Processing', amount: 'AED 2,400', date: '2025-01-20' },
  { id: 'ORD-2402', client: 'Fatima Hassan', type: 'Client', items: 'Microbiome Test', status: 'Shipped', amount: 'AED 1,200', date: '2025-01-19' },
  { id: 'ORD-2403', client: '—', type: 'Stock', items: 'DNA Kit x20', status: 'Delivered', amount: 'AED 18,000', date: '2025-01-15' },
  { id: 'ORD-2404', client: 'Khalid Bin Omar', type: 'Client', items: 'Complete Panel', status: 'Completed', amount: 'AED 4,800', date: '2025-01-12' },
  { id: 'ORD-2405', client: 'John Williams', type: 'Client', items: 'Blood Panel', status: 'Pending', amount: 'AED 1,800', date: '2025-01-22' },
  { id: 'ORD-2406', client: '—', type: 'Stock', items: 'Blood Kit x10', status: 'Processing', amount: 'AED 8,500', date: '2025-01-21' },
];

export const samples = [
  { id: 'SMP-5001', client: 'Ahmed Al Rashid', type: 'DNA', barcode: 'GEN-DNA-20250120-001', status: 'In Transit', registered: '2025-01-20', lab: 'GeneLab Dubai' },
  { id: 'SMP-5002', client: 'Fatima Hassan', type: 'Microbiome', barcode: 'GEN-MIC-20250119-002', status: 'At Lab', registered: '2025-01-19', lab: 'GeneLab Dubai' },
  { id: 'SMP-5003', client: 'Khalid Bin Omar', type: 'Blood', barcode: 'GEN-BLD-20250118-003', status: 'Results Ready', registered: '2025-01-18', lab: 'Al Borg Lab' },
  { id: 'SMP-5004', client: 'Ahmed Al Rashid', type: 'Blood', barcode: 'GEN-BLD-20250120-004', status: 'Registered', registered: '2025-01-20', lab: 'Pending' },
  { id: 'SMP-5005', client: 'Maria Garcia', type: 'DNA', barcode: 'GEN-DNA-20250115-005', status: 'Completed', registered: '2025-01-15', lab: 'GeneLab Dubai' },
];

export const reports = [
  { id: 'RPT-001', client: 'Ahmed Al Rashid', type: 'DNA Analysis', status: 'Ready', generated: '2025-01-22', shared: true },
  { id: 'RPT-002', client: 'Khalid Bin Omar', type: 'Blood Panel', status: 'Ready', generated: '2025-01-21', shared: false },
  { id: 'RPT-003', client: 'Fatima Hassan', type: 'Microbiome', status: 'Processing', generated: '—', shared: false },
  { id: 'RPT-004', client: 'Maria Garcia', type: 'DNA Analysis', status: 'Ready', generated: '2025-01-18', shared: true },
  { id: 'RPT-005', client: 'Khalid Bin Omar', type: 'Complete Panel', status: 'Ready', generated: '2025-01-15', shared: true },
];

export const inventory = [
  { id: 'KIT-001', name: 'DNA Collection Kit', sku: 'GEN-DNA-KIT', stock: 45, threshold: 20, status: 'In Stock', price: 'AED 450' },
  { id: 'KIT-002', name: 'Blood Collection Kit', sku: 'GEN-BLD-KIT', stock: 12, threshold: 15, status: 'Low Stock', price: 'AED 380' },
  { id: 'KIT-003', name: 'Microbiome Collection Kit', sku: 'GEN-MIC-KIT', stock: 30, threshold: 10, status: 'In Stock', price: 'AED 520' },
  { id: 'KIT-004', name: 'Complete Panel Kit', sku: 'GEN-CMP-KIT', stock: 8, threshold: 10, status: 'Low Stock', price: 'AED 1,200' },
  { id: 'KIT-005', name: 'Skincare Analysis Kit', sku: 'GEN-SKN-KIT', stock: 25, threshold: 10, status: 'In Stock', price: 'AED 680' },
];

export const invoices = [
  { id: 'INV-3001', partner: 'Dubai Health Clinic', amount: 'AED 48,000', status: 'Paid', issued: '2025-01-01', due: '2025-01-31', paid: '2025-01-20' },
  { id: 'INV-3002', partner: 'Dubai Health Clinic', amount: 'AED 32,500', status: 'Pending', issued: '2025-01-15', due: '2025-02-15', paid: '—' },
  { id: 'INV-3003', partner: 'Dubai Health Clinic', amount: 'AED 56,200', status: 'Paid', issued: '2024-12-01', due: '2024-12-31', paid: '2024-12-28' },
  { id: 'INV-3004', partner: 'Dubai Health Clinic', amount: 'AED 21,800', status: 'Overdue', issued: '2024-12-15', due: '2025-01-15', paid: '—' },
];

export const commissions = [
  { period: 'January 2025', sales: 'AED 142,500', rate: '15%', commission: 'AED 21,375', status: 'Pending' },
  { period: 'December 2024', sales: 'AED 128,000', rate: '15%', commission: 'AED 19,200', status: 'Paid' },
  { period: 'November 2024', sales: 'AED 95,600', rate: '15%', commission: 'AED 14,340', status: 'Paid' },
  { period: 'October 2024', sales: 'AED 110,200', rate: '15%', commission: 'AED 16,530', status: 'Paid' },
];

export const users = [
  { id: 1, name: 'Dr. Sarah Mitchell', email: 'sarah@dubaiclinic.ae', role: 'Admin', status: 'Active', lastLogin: '2025-01-22', twoFA: true },
  { id: 2, name: 'Noor Al Ameri', email: 'noor@dubaiclinic.ae', role: 'Practitioner', status: 'Active', lastLogin: '2025-01-21', twoFA: true },
  { id: 3, name: 'James Peterson', email: 'james@dubaiclinic.ae', role: 'Staff', status: 'Active', lastLogin: '2025-01-20', twoFA: false },
  { id: 4, name: 'Amina Khalil', email: 'amina@dubaiclinic.ae', role: 'Practitioner', status: 'Inactive', lastLogin: '2024-12-15', twoFA: false },
];

export const documents = [
  { id: 'DOC-001', name: 'Partnership Agreement 2025', category: 'Contracts', date: '2025-01-01', size: '2.4 MB', type: 'PDF' },
  { id: 'DOC-002', name: 'Platform User Guide v3.0', category: 'Training', date: '2025-01-10', size: '5.1 MB', type: 'PDF' },
  { id: 'DOC-003', name: 'Sample Collection SOP', category: 'Training', date: '2024-12-15', size: '1.8 MB', type: 'PDF' },
  { id: 'DOC-004', name: 'Invoice INV-3001', category: 'Invoices', date: '2025-01-01', size: '0.5 MB', type: 'PDF' },
  { id: 'DOC-005', name: 'NDA Agreement', category: 'Contracts', date: '2024-11-01', size: '1.2 MB', type: 'PDF' },
  { id: 'DOC-006', name: 'Commission Structure Guide', category: 'Training', date: '2024-12-01', size: '0.9 MB', type: 'PDF' },
  { id: 'DOC-007', name: 'Invoice INV-3002', category: 'Invoices', date: '2025-01-15', size: '0.5 MB', type: 'PDF' },
];

export const partners = [
  { id: 'PTR-001', name: 'Gulf Wellness Center', contact: 'Dr. Rashid Ali', email: 'rashid@gulfwellness.ae', status: 'Pending Review', submitted: '2025-01-20', type: 'Clinic' },
  { id: 'PTR-002', name: 'Al Noor Health Group', contact: 'Layla Mansoor', email: 'layla@alnoor.ae', status: 'Approved', submitted: '2025-01-15', type: 'Master Reseller' },
  { id: 'PTR-003', name: 'Vitality Labs', contact: 'Dr. Chen Wei', email: 'chen@vitalitylabs.com', status: 'Pending Review', submitted: '2025-01-22', type: 'Clinic' },
  { id: 'PTR-004', name: 'HealthFirst KSA', contact: 'Fahad Al Saud', email: 'fahad@healthfirst.sa', status: 'Contract Sent', submitted: '2025-01-10', type: 'Reseller' },
];

export const payments = [
  { id: 'PAY-001', invoice: 'INV-3001', amount: 'AED 48,000', method: 'Bank Transfer', date: '2025-01-20', reference: 'TRF-20250120-001' },
  { id: 'PAY-002', invoice: 'INV-3003', amount: 'AED 56,200', method: 'Bank Transfer', date: '2024-12-28', reference: 'TRF-20241228-002' },
  { id: 'PAY-003', invoice: 'Commission Dec', amount: 'AED 19,200', method: 'Bank Transfer', date: '2025-01-05', reference: 'COM-20250105-001' },
];

export const resellers = [
  { id: 'RSL-001', name: 'Dubai Health Clinic', clients: 248, orders: 34, revenue: 'AED 142,500', status: 'Active' },
  { id: 'RSL-002', name: 'Abu Dhabi Wellness', clients: 186, orders: 28, revenue: 'AED 98,300', status: 'Active' },
  { id: 'RSL-003', name: 'Sharjah Medical', clients: 124, orders: 15, revenue: 'AED 67,800', status: 'Active' },
  { id: 'RSL-004', name: 'Riyadh Health Hub', clients: 312, orders: 45, revenue: 'AED 189,200', status: 'Active' },
  { id: 'RSL-005', name: 'Jeddah Clinic', clients: 95, orders: 12, revenue: 'AED 52,400', status: 'Paused' },
];

export const clientTests = [
  { type: 'DNA Analysis', status: 'Completed', sample: 'SMP-5005', lab: 'GeneLab Dubai', submitted: '2025-01-15', results: '2025-01-22', report: 'RPT-001' },
  { type: 'Blood Panel', status: 'At Lab', sample: 'SMP-5004', lab: 'Al Borg Lab', submitted: '2025-01-20', results: 'Pending', report: '—' },
  { type: 'Microbiome', status: 'Not Started', sample: '—', lab: '—', submitted: '—', results: '—', report: '—' },
];

export const clientPlans = [
  { type: 'Meal Plan', status: 'Active', generated: '2025-01-22', duration: '12 weeks', progress: '25%' },
  { type: 'Fitness Plan', status: 'Pending', generated: '—', duration: '—', progress: '—' },
];

export const clientProducts = [
  { name: 'Vitamin D3 + K2', category: 'Supplements', status: 'Recommended', since: '2025-01-22' },
  { name: 'Omega-3 Fish Oil', category: 'Supplements', status: 'Active', since: '2025-01-22' },
  { name: 'Personalized Serum', category: 'Skincare', status: 'Pending', since: '—' },
];

export const questionnaires = [
  { name: 'Health History', status: 'Completed', completed: '2025-01-16', fields: 45 },
  { name: 'Lifestyle & Diet', status: 'Completed', completed: '2025-01-16', fields: 32 },
  { name: 'Family Medical History', status: 'Pending', completed: '—', fields: 28 },
  { name: 'Fitness Assessment', status: 'Not Sent', completed: '—', fields: 20 },
];

export const faqs = [
  { q: 'How do I register a new sample?', a: 'Navigate to Samples > Register Sample, scan or enter the barcode on the collection kit, then assign it to the client. The sample will appear in the tracking list once registered.' },
  { q: 'How long does it take to receive results?', a: 'DNA analysis typically takes 4-6 weeks, blood panels 5-7 business days, and microbiome analysis 3-4 weeks. You\'ll receive a notification when results are ready.' },
  { q: 'How do I add a new user to my organization?', a: 'Go to Settings > Users and click "Add User." Fill in the required details and assign the appropriate role. The new user will receive an invitation email.' },
  { q: 'How are commissions calculated?', a: 'Commissions are calculated as a percentage of net sales for successfully completed orders. The rate depends on your partner tier and is outlined in your partnership agreement.' },
  { q: 'How do I restock test kits?', a: 'Go to Inventory > Restock and select the kits you need. Orders are typically fulfilled within 3-5 business days.' },
  { q: 'What should I do if a client already exists in the system?', a: 'If a client is flagged as a duplicate during creation, you\'ll see a warning with the existing record. Contact your account manager to request a client ownership transfer if needed.' },
];
