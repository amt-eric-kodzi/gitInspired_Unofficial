import { DashboardL } from '../components/lecturer/DashboardL';
import { Navigation } from '../components/lecturer/Navigation';
import { SearchBar } from '../components/lecturer/SearchBar';
import { useSearchBar } from '../hooks/useSearchBar';

export const LecturerDashboard = () => {
  const {
    isCreateAssignment,
    sortBy,
    searchText,
    setSearchText,
    sortByHandler,
    openModal,
    closeModal,
  } = useSearchBar();
  return (
    <div className='lecturer-home'>
      <Navigation />
      <SearchBar
        isCreateAssignment={isCreateAssignment}
        setSearchText={setSearchText}
        sortByHandler ={sortByHandler}
        openModal={openModal}
        closeModal={closeModal}
        sortBy={sortBy}
        searchText={searchText}
      />
      <div className='outlet-container'>
        <DashboardL sortBy={sortBy} searchText={searchText} />
      </div>
    </div>
  );
};
