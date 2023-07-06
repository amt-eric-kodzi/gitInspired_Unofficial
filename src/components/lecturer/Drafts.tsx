import { Navigation } from './Navigation';
import { SearchBar } from './SearchBar';

export const Drafts = () => {
  return (
    <div className="lecturer-home">
      <Navigation />
      <SearchBar />
      <div className="outlet-container">
        Drafts
      </div>
    </div>
  );
};
