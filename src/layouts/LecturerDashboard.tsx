
import { DashboardL } from '../components/lecturer/DashboardL';
import { Navigation } from '../components/lecturer/Navigation';
import { SearchBar } from '../components/lecturer/SearchBar';

export const LecturerDashboard = () => {
  return (
    <div className='lecturer-home'>
      <Navigation />
      <SearchBar />
      <div className="outlet-container">
        <DashboardL />
      </div>
    </div>
  );
};
