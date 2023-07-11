import { useSearchBar } from '../../hooks/useSearchBar';
import { Navigation } from './Navigation';
import { SearchBar } from './SearchBar';
import folder from '../../assets/folder 2.png'
export const Submissions = () => {
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
          <div>
            <div className='submission-list-wrapper'>
            {submissionList.map((submission)=> (
              <div className='submission-list-item list-page'>
                <img src={folder} alt="" />
                <div className='submission-list-item-content'>
                  <span className='title'>{submission.title}</span>
                  <span className='submissions'>{submission.submissions + ' ' + 'submissions'} </span>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
