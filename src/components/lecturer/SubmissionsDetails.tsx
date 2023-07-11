import { useSearchBar } from '../../hooks/useSearchBar';
import { Navigation } from './Navigation';
import { SearchBar } from './SearchBar';
import folder from '../../assets/folder 2.png';
import foldermini from '../../assets/foldermini.png';
import file from '../../assets/file.png';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const fakeNames = [
  'Mike Johnson',
  'Emma Thomas',
  'John Smith',
  'Olivia Taylor',
  'Sarah Miller',
  'David Davis',
  'Jane Williams',
  'Daniel Anderson',
  'Alex Wilson',
  'Emily Brown',
  'Sarah Miller',
  'Jane Williams',
  'David Davis',
  'Mike Johnson',
  'Emma Thomas',
  'Daniel Anderson',
];

export const SubmissionsDetails = () => {
  const {
    isCreateAssignment,
    sortBy,
    searchText,
    setSearchText,
    sortByHandler,
    openModal,
    closeModal,
  } = useSearchBar();

  const studentList = fakeNames.map((name) => `<li>${name}</li>`).join('');

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
          <div className='submission-list-item details-page'>
            <img src={folder} alt='' />
            <div className='submission-list-item-content'>
              <span className='title'>JAVASCRIPT</span>
              <span className='submissions'>200 submissions</span>
            </div>
          </div>

          <div className='submissions-content-wrapper'>
            <div className='list-of-submitters-wrapper'>
              <ul className='list-of-submitters'>
                {fakeNames.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
            <div className='submission-contents'>
              <div className='snapshot-download-wrapper'>
                <select className='snapshot-select'>
                  <option value='option1'>Snapshot 1</option>
                  <option value='option2'>Snapshot 2</option>
                  <option value='option3'>Snapshot 3</option>
                  <option value='option4'>Snapshot 4</option>
                </select>
                <button className='download-zip'>
                  Download zip
                  <FontAwesomeIcon icon={faDownload} className='download' />
                </button>
              </div>
              <table className='files-list'>
                <tr>
                  <td><img src={foldermini} alt="" className='imga'/>Public</td>
                </tr>
                <tr>
                  <td><img src={foldermini} alt="" className='imga'/>JS</td>
                </tr>
                <tr>
                  <td><img src={foldermini} alt="" className='imga'/>src</td>
                </tr>
                <tr>
                  <td><img src={file} alt="" className='imgb'/>README.md</td>
                </tr>
                <tr>
                  <td><img src={file} alt="" className='imgb'/>Index.css</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
