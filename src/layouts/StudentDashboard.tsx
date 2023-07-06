import Dashboard from '../components/student/Dashboard';
import { Navigation } from '../components/student/Navigation';

const StudentDashboard = () => {
  return (
    <div className='student-home'>
      <Navigation />
      <Dashboard/>
    </div>
  );
};

export default StudentDashboard;
