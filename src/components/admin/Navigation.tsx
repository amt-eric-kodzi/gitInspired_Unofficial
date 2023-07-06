import { Link } from 'react-router-dom'
import avatar from '../../assets/user 2.png';
import logoIT from '../../assets/logoIT.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Modal from '../Modal';
import ModalRoot from '../ModalRoot';
import Logout from './Logout';
import { logout } from '../../redux/slice/authSlice';

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
            <Link to='dashboard'>Dashboard</Link>
          </button>
          <button>
            <Link to='/dashboard/student'>Student</Link>
          </button>
          <button>
            <Link to='/dashboard/lecturer'>Lecturer</Link>
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
