import { Navigation } from './Navigation';
import { SearchBar } from './SearchBar';

export const Students = () => {
  return (
    <div className='lecturer-home'>
      <Navigation />
      <SearchBar />
      <div className='outlet-container'>Students</div>
    </div>
  );
};
