import { faCopy, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSearchBar } from '../../hooks/useSearchBar';
import { Navigation } from './Navigation';
import { SearchBar } from './SearchBar';
import avatar from '../../assets/user 2.png';

export const AssignmentDetails = () => {
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
          <h1>Assignment</h1>
          <div className='lecturer-assignment-detail'>
            <div className='description-header'>
              <div>
                <h2>JAVASCRIPT</h2>
              </div>
              <div className='header-right'>
                <span>Published</span>
                <span className='assignment-code' title='Unique Code'>4576354 <FontAwesomeIcon icon={faCopy} className='icon'/></span>
              </div>
            </div>
            <div className='description-sub-header'>
              <span>Description</span>
              <span>1st May, 2023</span>
            </div>
            <p className='description-text'>
              Sure! Here's a generated Lorem Ipsum text: "Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nullam volutpat magna sit amet sem condimentum, sed vulputate enim
              congue. Ut eu ultrices eros, a condimentum lorem. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas. Sed et urna sed odio
              consequat finibus. Sed consectetur a sem nec tempus. Sed nec commodo ex. Vivamus
              tincidunt consectetur ipsum, vitae efficitur mi tincidunt a. Integer in lorem eget
              arcu elementum viverra. Phasellus vel purus nec leo placerat accumsan at nec enim.
              Donec vulputate congue dui, id efficitur massa auctor eu. Aliquam ultrices, tortor vel
              euismod rutrum, enim nunc fringilla mi, id consequat orci lorem at ex. Nunc at eros
              sit amet lorem pharetra hendrerit nec ut leo. Praesent pharetra ullamcorper nisl, et
              scelerisque urna vulputate ac." Please note that this Lorem Ipsum text is randomly
              generated and doesn't carry any specific meaning. It's often used as a placeholder
              text in the design and typesetting industry.
            </p>
          </div>
          <div className='course-students'>
            <div className='course-students-header'>
              <h1>Students</h1>
              <span>
                7 students <FontAwesomeIcon icon={faUserPlus} className='icon' />
              </span>
            </div>
            <div>
              <table className='assignment-detail-student-table'>
                <tr>
                  <td>
                    <div className='student-table-item'>
                      <img className='student-avatar' src={avatar} alt='' />
                      <div className='student-detail'>
                        <span>eric.kodzi@amalitech.org</span>
                        <span>(invited)</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='student-table-item'>
                      <img className='student-avatar' src={avatar} alt='' />
                      <div className='student-detail'>
                        <span>eric.kodzi@amalitech.org</span>
                        <span>(invited)</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='student-table-item'>
                      <img className='student-avatar' src={avatar} alt='' />
                      <div className='student-detail'>
                        <span>eric.kodzi@amalitech.org</span>
                        <span>(invited)</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='student-table-item'>
                      <img className='student-avatar' src={avatar} alt='' />
                      <div className='student-detail'>
                        <span>eric.kodzi@amalitech.org</span>
                        <span>(invited)</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='student-table-item'>
                      <img className='student-avatar' src={avatar} alt='' />
                      <div className='student-detail'>
                        <span>eric.kodzi@amalitech.org</span>
                        <span>(invited)</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='student-table-item'>
                      <img className='student-avatar' src={avatar} alt='' />
                      <div className='student-detail'>
                        <span>eric.kodzi@amalitech.org</span>
                        <span>(invited)</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='student-table-item'>
                      <img className='student-avatar' src={avatar} alt='' />
                      <div className='student-detail'>
                        <span>eric.kodzi@amalitech.org</span>
                        <span>(invited)</span>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <span className='link-to-all-students'>see all students</span>
          </div>
        </div>
      </div>
    </div>
  );
};
