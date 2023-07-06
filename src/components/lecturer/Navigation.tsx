import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/slice/authSlice';
import logoIT from '../../assets/logoIT.png';
import avatar from '../../assets/user 2.png';
import { RootState } from '../../redux/store';
import Modal from '../Modal';
import ModalRoot from '../ModalRoot';
import Logout from '../admin/Logout';
import { useState } from 'react';

export const Navigation = () => {
    const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const [logoutModal, setLogout] = useState(false);
    const openLogoutModal = () => {
      setLogout(true);
    };
  
    const closeLogoutModal = () => {
      setLogout(false);
    };
  
    

  const userLogout = () => {
    dispatch(logout());
  };


  return (
      <div className='nav-panel'>
        <div className='nav-NavLinks'>
          <div className='lecturer-logo'>
            <img src={logoIT} alt='' />
          </div>
          <button>
            <NavLink to='/' end>Dashboard</NavLink>
          </button>
          <button>
            <NavLink to='/dashboard/lecturer/students'>Students</NavLink>
          </button>
          <button>
            <NavLink to='/dashboard/lecturer/submissions'>Submissions</NavLink>
          </button>
          <button>
            <NavLink to='/dashboard/lecturer/drafts'>Draft</NavLink>
          </button>
        </div>
        <div>
          <div className='avatar-wrapper'>
            <img src={avatar} alt='' />
            <span>{`${user?.firstName} ${user?.lastName}`}</span>
          </div>
          <button onClick={openLogoutModal}>Logout</button>
        </div>
        <ModalRoot>
        <Modal isOpen={logoutModal} onClose={closeLogoutModal}>
          <Logout signout={userLogout} cancel={closeLogoutModal}/>
        </Modal>
      </ModalRoot>
      </div>
  );
};
