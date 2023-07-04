import { useSelector } from 'react-redux';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { ResetPassword } from './components/ResetPassword';
import { AllUsers } from './components/admin/AllUsers';
import { Dashboard as AdminDashboardHome } from './components/admin/Dashboard';
import { DashboardL as LecturerDashboardHome } from './components/lecturer/DashboardL';
import { Drafts } from './components/lecturer/Drafts';
import { Students } from './components/lecturer/Students';
import Submissions from './components/lecturer/Submissions';
import { AdminDashboard } from './pages/AdminDashboard';
import { Home } from './pages/Home';
import { LecturerDashboard } from './pages/LecturerDashboard';
import { AuthState } from './redux/slice/authSlice';

function App() {
  const isAuthenticated = useSelector((state: AuthState) => state.isAuthenticated);
  //const isAuthenticated = false;

  return (
    <Router>
      <Routes>
        <Route path='/' element={isAuthenticated ? <Navigate to='dashboard' /> : <Home />}>
          <Route index element={<Login />} />
          <Route path='resetpassword' element={<ResetPassword />} />
        </Route>

        <Route
          path='dashboard'
          element={isAuthenticated ? <AdminDashboard /> : <Navigate to='/' />}
        >
          <Route index element={<AdminDashboardHome />} />
          <Route path='lecturer' element={<AllUsers />} />
          <Route path='student' element={<AllUsers />} />
        </Route>
        <Route path='lecturerdashboard' element={<LecturerDashboard />}>
          <Route index element={<LecturerDashboardHome />} />
          <Route path='lecturerstudent' element={<Students />} />
          <Route path='lecturersubmission' element={<Submissions />} />
          <Route path='lecturerdraft' element={<Drafts />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

export default App;
