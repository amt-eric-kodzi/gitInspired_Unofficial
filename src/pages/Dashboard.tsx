import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { AdminDashboard } from '../layouts/AdminDashboard';
import { LecturerDashboard } from '../layouts/LecturerDashboard';
import { Navigate } from 'react-router-dom';
import StudentDashboard from '../layouts/StudentDashboard';

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
