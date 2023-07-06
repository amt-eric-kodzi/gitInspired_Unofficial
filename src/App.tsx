import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { ResetPassword } from './components/ResetPassword';
import { AllUsers } from './components/admin/AllUsers';
import { Drafts } from './components/lecturer/Drafts';
import { Students } from './components/lecturer/Students';
import Submissions from './components/lecturer/Submissions';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { RootState } from './redux/store';

function App() {
  const state = useSelector((state: RootState ) => state.auth);

  return (
    <Router>
      <Routes>
        <Route path='/' element={state.isAuthenticated ? <Navigate to='dashboard' /> : <Home />}>
          <Route index element={<Login />} />
        </Route>

        <Route path='dashboard' element={state.isAuthenticated ? <Outlet /> : <Navigate to='/' />}>
          <Route index element={<Dashboard></Dashboard>} />
          <Route path='lecturer' element={state.user?.role === 'ADMIN' && <AllUsers />} />
          <Route path='student' element={state.user?.role === 'ADMIN' && <AllUsers />} />
          <Route
            path='lecturer/students'
            element={state.user?.role === 'LECTURER' ? <Students /> : <Navigate to='/' />}
          />
          <Route
            path='lecturer/submissions'
            element={state.user?.role === 'LECTURER' ? <Submissions /> : <Navigate to='/' />}
          />
          <Route
            path='lecturer/drafts'
            element={state.user?.role === 'LECTURER' ? <Drafts /> : <Navigate to='/' />}
          />
        </Route>
        
        <Route
          path='resetpassword'
          element={state.isAuthenticated ? <ResetPassword /> : <Navigate to='/' />}
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

export default App;
