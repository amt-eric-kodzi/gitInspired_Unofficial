import { useSearchBar } from '../../hooks/useSearchBar';
import { Navigation } from './Navigation';
import { SearchBar } from './SearchBar';
import edit from '../../assets/edit.png';
import deleteIcon from '../../assets/delete.png'

export const Drafts = () => {
  const {
    isCreateAssignment,
    sortBy,
    searchText,
    setSearchText,
    sortByHandler,
    openModal,
    closeModal,
  } = useSearchBar();

  const submissionList = [
    { title: 'REACT', submissions: 200 },
    { title: 'JAVASCRIPT', submissions: 200 },
    { title: 'TYPESCRIPT', submissions: 200 },
    { title: 'ANGULAR', submissions: 200 },
  ];

  return (
    <div className='lecturer-home'>
      <Navigation />
      <div>
        <SearchBar
          isCreateAssignment={isCreateAssignment}
          setSearchText={setSearchText}
          sortByHandler={sortByHandler}
          openModal={openModal}
          closeModal={closeModal}
          sortBy={sortBy}
          searchText={searchText}
        />
        <div className='outlet-container'>
          <div className='draft-item'>
            <h2>JAVASCRIPT</h2>
            <div className='content-stats-tasks'>
              <p className=''>Your task is to develop a web application using JavaScript </p>
              <div className='stats-tasks'>
                <div className='stats'>
                  <span>5th April</span>
                  <span>14th students invited</span>
                </div>
                <div className='task-buttons'>
                  <button><img src={deleteIcon} alt="" /></button>
                  <button><img src={edit} alt="" /></button>
                </div>
              </div>
            </div>
          </div>
          <div className='draft-item'>
            <h2>JAVASCRIPT</h2>
            <div className='content-stats-tasks'>
              <p className=''>Your task is to develop a web application using JavaScript </p>
              <div className='stats-tasks'>
                <div className='stats'>
                  <span>5th April</span>
                  <span>14th students invited</span>
                </div>
                <div className='task-buttons'>
                  <button><img src={deleteIcon} alt="" /></button>
                  <button><img src={edit} alt="" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
