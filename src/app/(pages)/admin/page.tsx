import AdminDashboard from '@/components/AdminDashboard';
import Navbar from '@/components/Navbar';

export default function AdminPage() {
  return (
    <div className='bg-hero-bg bg-cover bg-center min-h-screen'>
      <Navbar/>
      <h1>Admin Dashboard</h1>
      <AdminDashboard />
    </div>
  );
}
