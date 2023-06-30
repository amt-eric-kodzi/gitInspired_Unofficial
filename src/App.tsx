import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Home } from './pages/Home';
import { Login } from './components/Login';
import { ResetPassword } from './components/ResetPassword';
import { AllUsers } from './components/admin/AllUsers';
import { AdminDashboard } from './pages/AdminDashboard';
import {Dashboard as AdminDashboardHome} from './components/admin/Dashboard'



function App() {
  const isAuthenticated = useSelector((state: any) => state.isAuthenticated);
  //const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        
        <Route path='/' element={isAuthenticated ? <Navigate to='dashboard' /> : <Home />}>
          <Route index element={<Login />} />
          <Route path='resetpassword' element={<ResetPassword />} />
        </Route>

        <Route path='dashboard' element={isAuthenticated ? <AdminDashboard /> : <Navigate to='/' />}>
          <Route index element={<AdminDashboardHome/>} />
          <Route path='lecturer' element={<AllUsers />} />
          <Route path='student' element={<AllUsers />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

export default App;




