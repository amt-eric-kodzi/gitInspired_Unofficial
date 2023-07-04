import image from '../../assets/admin-dashboardimg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate} from '@fortawesome/free-solid-svg-icons';

export const Dashboard = () => {
  return (
    <div className='admin-dashboard'>
      <div className='admin-dashboard-left'>
        <div className='left-top'>
          <div>
            <h2>Welcome back, Ella</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum
            </p>
          </div>
          <img src={image} alt='' />
        </div>
        <div className='left-middle'>
          <h2>Overview</h2>
          <div>
            <div className='left-middle-items'>
              <div className='icon-div'>
                <FontAwesomeIcon icon={faUserGraduate} />
              </div>
              <div className='users-stats'>
                <span> 178+</span>
                <span> Lecturers</span>
              </div>
            </div>
            <div className='left-middle-items'>
              <div className='icon-div'>
                <FontAwesomeIcon icon={faUserGraduate} />
              </div>
              <div className='users-stats'>
                <span> 178+</span>
                <span> Lecturers</span>
              </div>
            </div>
            <div></div>
            <div className='left-middle-items'>
              <div className='icon-div'>
                <FontAwesomeIcon icon={faUserGraduate} />
              </div>
              <div className='users-stats'>
                <span> 178+</span>
                <span> Lecturers</span>
              </div>
            </div>
            <div></div>
            <div className='left-middle-items'>
              <div className='icon-div'>
                <FontAwesomeIcon icon={faUserGraduate} />
              </div>
              <div className='users-stats'>
                <span> 178+</span>
                <span> Lecturers</span>
              </div>
            </div>
          </div>
        </div>
        <div className='left-bottom center'>Graph</div>
      </div>
      <div className='admin-dashboard-right'>
        <div>Notifications</div>
        <div>Assignment Status</div>
      </div>
    </div>
  );
};
