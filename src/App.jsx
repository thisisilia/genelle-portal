import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

// Auth
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

// Onboarding
import InterestForm from './pages/onboarding/InterestForm';
import AdminReview from './pages/onboarding/AdminReview';
import Registration from './pages/onboarding/Registration';
import AdminUserSetup from './pages/onboarding/AdminUserSetup';
import OTPVerify from './pages/onboarding/OTPVerify';
import ContractSign from './pages/onboarding/ContractSign';
import Confirmation from './pages/onboarding/Confirmation';

// Dashboards
import ResellerDashboard from './pages/dashboard/ResellerDashboard';
import MasterResellerDashboard from './pages/dashboard/MasterResellerDashboard';
import PractitionerDashboard from './pages/dashboard/PractitionerDashboard';
import FinanceDashboard from './pages/dashboard/FinanceDashboard';

// Clients
import ClientsList from './pages/clients/ClientsList';
import CreateClient from './pages/clients/CreateClient';
import CreateClientSuccess from './pages/clients/CreateClientSuccess';
import ConsentStatus from './pages/clients/ConsentStatus';
import ClientDashboard from './pages/clients/ClientDashboard';
import ClientEdit from './pages/clients/ClientEdit';

// Orders
import OrdersList from './pages/orders/OrdersList';
import CreateClientOrder from './pages/orders/CreateClientOrder';
import CreateStockOrder from './pages/orders/CreateStockOrder';
import OrderDetails from './pages/orders/OrderDetails';
import OrderTracking from './pages/orders/OrderTracking';

// Samples
import SamplesList from './pages/samples/SamplesList';
import SampleRegister from './pages/samples/SampleRegister';
import SampleDetails from './pages/samples/SampleDetails';

// Reports
import ReportsList from './pages/reports/ReportsList';
import ReportViewer from './pages/reports/ReportViewer';
import ReportShare from './pages/reports/ReportShare';

// Inventory
import InventoryOverview from './pages/inventory/InventoryOverview';
import RestockOrder from './pages/inventory/RestockOrder';
import InventoryTracking from './pages/inventory/InventoryTracking';

// Finance
import FinanceDash from './pages/finance/FinanceDash';
import Commissions from './pages/finance/Commissions';
import InvoicesList from './pages/finance/InvoicesList';
import InvoiceDetails from './pages/finance/InvoiceDetails';
import PaymentHistory from './pages/finance/PaymentHistory';
import AmountOwed from './pages/finance/AmountOwed';
import BankDetails from './pages/finance/BankDetails';

// Documents
import DocumentHub from './pages/documents/DocumentHub';

// Settings
import Settings from './pages/settings/Settings';

// Support
import HelpSupport from './pages/support/HelpSupport';

// Transfer
import TransferClient from './pages/transfer/TransferClient';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public / Auth */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Onboarding */}
        <Route path="/onboarding/interest" element={<InterestForm />} />
        <Route path="/onboarding/admin-review" element={<AdminReview />} />
        <Route path="/onboarding/register" element={<Registration />} />
        <Route path="/onboarding/admin-user" element={<AdminUserSetup />} />
        <Route path="/onboarding/verify" element={<OTPVerify />} />
        <Route path="/onboarding/contract" element={<ContractSign />} />
        <Route path="/onboarding/confirmation" element={<Confirmation />} />

        {/* Portal (inside Layout) */}
        <Route element={<Layout />}>
          {/* Dashboards */}
          <Route path="/dashboard/reseller" element={<ResellerDashboard />} />
          <Route path="/dashboard/master" element={<MasterResellerDashboard />} />
          <Route path="/dashboard/practitioner" element={<PractitionerDashboard />} />
          <Route path="/dashboard/finance" element={<FinanceDashboard />} />

          {/* Clients */}
          <Route path="/clients" element={<ClientsList />} />
          <Route path="/clients/create" element={<CreateClient />} />
          <Route path="/clients/create-success" element={<CreateClientSuccess />} />
          <Route path="/clients/consent" element={<ConsentStatus />} />
          <Route path="/clients/:id" element={<ClientDashboard />} />
          <Route path="/clients/:id/edit" element={<ClientEdit />} />

          {/* Orders */}
          <Route path="/orders" element={<OrdersList />} />
          <Route path="/orders/create-client" element={<CreateClientOrder />} />
          <Route path="/orders/create-stock" element={<CreateStockOrder />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/orders/:id/tracking" element={<OrderTracking />} />

          {/* Samples */}
          <Route path="/samples" element={<SamplesList />} />
          <Route path="/samples/register" element={<SampleRegister />} />
          <Route path="/samples/:id" element={<SampleDetails />} />

          {/* Reports */}
          <Route path="/reports" element={<ReportsList />} />
          <Route path="/reports/:id" element={<ReportViewer />} />
          <Route path="/reports/:id/share" element={<ReportShare />} />

          {/* Inventory */}
          <Route path="/inventory" element={<InventoryOverview />} />
          <Route path="/inventory/restock" element={<RestockOrder />} />
          <Route path="/inventory/tracking" element={<InventoryTracking />} />

          {/* Finance */}
          <Route path="/finance" element={<FinanceDash />} />
          <Route path="/finance/commissions" element={<Commissions />} />
          <Route path="/finance/invoices" element={<InvoicesList />} />
          <Route path="/finance/invoices/:id" element={<InvoiceDetails />} />
          <Route path="/finance/payments" element={<PaymentHistory />} />
          <Route path="/finance/owed" element={<AmountOwed />} />
          <Route path="/finance/bank" element={<BankDetails />} />

          {/* Documents */}
          <Route path="/documents" element={<DocumentHub />} />

          {/* Settings */}
          <Route path="/settings" element={<Settings />} />

          {/* Support */}
          <Route path="/support" element={<HelpSupport />} />

          {/* Transfer */}
          <Route path="/transfer" element={<TransferClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
