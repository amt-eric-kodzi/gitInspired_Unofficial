import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { ResetPassword } from './components/ResetPassword';
import { AdminLecturers } from './components/admin/Lecturers';
import { Students as AdminStudents } from './components/admin/Students';
import { Drafts } from './components/lecturer/Drafts';
import { Students } from './components/lecturer/Students';
import { Submissions as StudentSubmission } from './components/student/Submissions';
import { Submissions as LecturerSubmission } from './components/lecturer/Submissions';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { RootState } from './redux/store';
import { AssignmentDetail as StudentAssigmentDetail } from './components/student/AssignmentDetail';
import { AssignmentDetails as LecturerAssignmentDetail } from './components/lecturer/AssigmentDetails';
import { SubmissionsDetails } from './components/lecturer/SubmissionsDetails';

function App() {
  const state = useSelector((state: RootState) => state.auth);

  return (
    <Router>
      <Routes>
        <Route path='/' element={state.isAuthenticated ? <Navigate to='dashboard' /> : <Home />}>
          <Route index element={<Login />} />
        </Route>

        <Route path='dashboard' element={state.isAuthenticated ? <Outlet /> : <Navigate to='/' />}>
          <Route index element={<Dashboard></Dashboard>} />
          <Route path='lecturer' element={state.user?.role === 'ADMIN' && <AdminLecturers />} />
          <Route path='student' element={state.user?.role === 'ADMIN' && <AdminStudents />} />
          <Route
            path='lecturer/students'
            element={state.user?.role === 'LECTURER' ? <Students /> : <Navigate to='/' />}
          />
          <Route
            path='lecturer/submissions'
            element={state.user?.role === 'LECTURER' ? <LecturerSubmission /> : <Navigate to='/' />}
          />
          <Route
            path='lecturer/drafts'
            element={state.user?.role === 'LECTURER' ? <Drafts /> : <Navigate to='/' />}
          />
          <Route
            path='student/submissions'
            element={state.user?.role === 'STUDENT' ? <StudentSubmission /> : <Navigate to='/' />}
          />
        </Route>

        <Route
          path='resetpassword'
          element={state.isAuthenticated ? <ResetPassword /> : <Navigate to='/' />}
        />
        <Route path='student/assignmentdetail' element={<StudentAssigmentDetail />} />

        <Route path='lecturer/assignmentdetail' element={<LecturerAssignmentDetail />} />
        <Route path='lecturer/submissionsdetails' element={<SubmissionsDetails />} />
        <Route path='lecturer/submission' element={<LecturerSubmission />} />
        <Route path='lecturer/drafts' element={<Drafts />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

export default App;
