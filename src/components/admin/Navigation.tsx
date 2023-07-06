import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logoIT from '../../assets/logoIT.png';
import avatar from '../../assets/user 2.png';
import { logout } from '../../redux/slice/authSlice';
import { RootState } from '../../redux/store';
import Modal from '../Modal';
import ModalRoot from '../ModalRoot';
import Logout from './Logout';

export const Navigation = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user);
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
    <div className='admin_header'>
        <div className='center'>
          <img src={logoIT} alt='' className='admi_logo' />
          <button>
            <NavLink to='/dashboard' end>Dashboard</NavLink>
          </button>
          <button>
            <NavLink to='/dashboard/student'>Student</NavLink>
          </button>
          <button>
            <NavLink to='/dashboard/lecturer'>Lecturer</NavLink>
          </button>
        </div>
        <div className='avatar_con'>
          <button onClick={openLogoutModal}>Logout</button>
          <span>{user?.email}</span>
          <img src={avatar} alt='' />
        </div>
        
      <ModalRoot>
        <Modal isOpen={logoutModal} onClose={closeLogoutModal}>
          <Logout signout={userLogout} cancel={closeLogoutModal}/>
        </Modal>
      </ModalRoot>
      </div>
  )
}
