import { Navigation } from './Navigation';
import { SearchBar } from './SearchBar';

const Submissions = () => {
  return (
    <div className="lecturer-home">
      <Navigation />
      <SearchBar />
      <div className="outlet-container">Submissions
      </div>
    </div>
  );
};

export default Submissions;
