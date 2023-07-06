import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AdminDashboard } from '../layouts/AdminDashboard';
import { LecturerDashboard } from '../layouts/LecturerDashboard';
import StudentDashboard from '../layouts/StudentDashboard';
import { RootState } from '../redux/store';

export const Dashboard = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <>
      {!user?.isVerified && <Navigate to='/resetpassword' />}
      {user?.isVerified && user?.role === 'ADMIN' && <AdminDashboard></AdminDashboard>}
      {user?.isVerified && user?.role === 'LECTURER' && <LecturerDashboard></LecturerDashboard>}
      {user?.isVerified && user?.role === 'STUDENT' && <StudentDashboard></StudentDashboard>}
    </>
  );
};
