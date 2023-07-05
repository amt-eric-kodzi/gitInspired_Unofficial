import { Link, Outlet } from 'react-router-dom';
import logoIT from '../assets/logoIT.png';
import user from '../assets/user 2.png';
import { faCross, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../components/Modal';
import ModalRoot from '../components/ModalRoot';
import { useState } from 'react';
import { CreateAssignment } from '../components/lecturer/CreateAssignment';

export const LecturerDashboard = () => {
  const [isCreateAssignment, setIsCreateAssignemnt] = useState(false);

  const openModal = () => {
    setIsCreateAssignemnt(true);
  };

  const closeModal = () => {
    setIsCreateAssignemnt(false);
  };
  return (
    <div className='lecturer-home'>
      <div className='nav-panel'>
        <div className='nav-links'>
          <div className='lecturer-logo'>
            <img src={logoIT} alt='' />
          </div>
          <button>
            <Link to='/lecturerdashboard'>Dashboard</Link>
          </button>
          <button>
            <Link to='lecturerstudent'>Students</Link>
          </button>
          <button>
            <Link to='lecturersubmission'>Submissions</Link>
          </button>
          <button>
            <Link to='lecturerdraft'>Draft</Link>
          </button>
        </div>
        <div>
          <div className='avatar-wrapper'>
            <img src={user} alt='' />
            <span>Lecturer's name</span>
          </div>
          <button>Logout</button>
        </div>
      </div>
      <div>
        <div className='search-panel'>
          <div className='search-wrapper'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type='text' placeholder='Search' />
          </div>
          <div className='sort-wrapper'>
            <input type='text' placeholder='Sort by' />
            <button onClick={openModal}>
              Assignment <span className='add-icon'>+</span>
            </button>
          </div>
        </div>
        <div className='outlet'>
          <Outlet />
        </div>
      </div>
      <ModalRoot>
        <Modal isOpen={isCreateAssignment} onClose={closeModal}>
          <CreateAssignment  />
        </Modal>
      </ModalRoot>
    </div>
  );
};
