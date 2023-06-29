import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Home } from './pages/Home';
import { Login } from './components/Login';
import { ResetPassword } from './components/ResetPassword';
import { Dashboard } from './pages/AdminDashboard';
import { AllUsers } from './components/admin/AllUsers';



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

        <Route path='dashboard' element={isAuthenticated ? <Dashboard /> : <Navigate to='/' />}>
          <Route path='lecturers' element={<AllUsers />} />
          <Route path='students' element={<AllUsers />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

export default App;
