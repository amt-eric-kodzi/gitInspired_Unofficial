import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
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
    <div className='admin_header'>
    <div className='center'>
      <img src={logoIT} alt='' className='admi_logo' />
      <button>
        <NavLink to='dashboard' className='active'>Dashboard</NavLink>
      </button>
      <button>
        <Link to='/dashboard/student/submissions'>Submissions</Link>
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
  );
};
