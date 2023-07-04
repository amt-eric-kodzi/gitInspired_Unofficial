import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { onLogout } from '../api/authentication';
import logoIT from '../assets/logoIT.png';
import user from '../assets/user 2.png';
import Modal from '../components/Modal';
import ModalRoot from '../components/ModalRoot';
import Logout from '../components/admin/Logout';
import { logout } from '../redux/slice/authSlice';

export const AdminDashboard = () => {
  const dispatch = useDispatch();
  const [logoutModal, setLogout] = useState(false);
  const openLogoutModal = () => {
    setLogout(true);
  };

  const closeLogoutModal = () => {
    setLogout(false);
  };

  const userLogout = () => {
    const x = onLogout();
    console.log(x);

    dispatch(logout());
  };

  

  return (
    <div className='db_admin'>
      <div className='admin_header'>
        <div className='center'>
          <img src={logoIT} alt='' className='admi_logo' />
          <button>
            <Link to='dashboard'>Dashboard</Link>
          </button>
          <button>
            <Link to='student'>Student</Link>
          </button>
          <button>
            <Link to='lecturer'>Lecturer</Link>
          </button>
        </div>
        <div className='avatar_con'>
          <button onClick={openLogoutModal}>Logout</button>
          <span>admin@amalitech.org</span>
          <img src={user} alt='' />
        </div>
      </div>
      <Outlet />
      <ModalRoot>
        <Modal isOpen={logoutModal} onClose={closeLogoutModal}>
          <Logout signout={userLogout} cancel={closeLogoutModal}/>
        </Modal>
      </ModalRoot>
    </div>
  );
};
