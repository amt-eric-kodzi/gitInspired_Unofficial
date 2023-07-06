import { Home } from '../components/admin/Dashboard';
import { Navigation } from '../components/admin/Navigation';

export const AdminDashboard = () => {
  return (
    <div className='db_admin'>
      <Navigation />
      <Home />
    </div>
  );
};
