import { faCloudArrowUp, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AnyAction } from 'redux';
import logolearn from '../../assets/logolearn.png';
import { fetchStudents } from '../../redux/slice/studentsSlice';
import { RootState } from '../../redux/store';
import Modal from '../Modal';
import ModalRoot from '../ModalRoot';
import { AddMultipleUsers } from './AddMultipleUsers';
import { AddOneUser } from './AddOneUser';
import { Navigation } from './Navigation';
import UsersTable from './UsersTable';

export const AdminLecturers = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const { lecturers } = useSelector((state: RootState) => state.lecturers);

  const location = useLocation();
  const { pathname } = location;
  const slug = pathname.substring(pathname.lastIndexOf('/') + 1);

  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const handleOpenModal1 = () => {
    setModal1Open(true);
  };

  const handleCloseModal1 = () => {
    setModal1Open(false);
  };

  const handleOpenModal2 = () => {
    setModal2Open(true);
  };

  const handleCloseModal2 = () => {
    setModal2Open(false);
  };

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return (
    <div className=''>
      <Navigation />
      <div className='allusers_con'>
        <div className='add_users'>
          <h2>{lecturers && slug.charAt(0).toUpperCase() + slug.slice(1) + 's'}</h2>
          <div>
            <button className='add_users_bn' onClick={handleOpenModal1}>
              Add new {slug}
              <FontAwesomeIcon icon={faUserGraduate} className='icons' />
            </button>
            <button onClick={handleOpenModal2}>
              Upload
              <FontAwesomeIcon icon={faCloudArrowUp} className='icons' />
            </button>
          </div>
        </div>
        {lecturers ? (
          <UsersTable data={lecturers} itemsPerPage={10} />
        ) : (
          <div className='users_list'>
            <img src={logolearn} alt='' />
            <span>
              Oops, no {slug} created or uploaded yet. Click on any of the buttons above to get
              started
            </span>
          </div>
        )}
        <ModalRoot>
          <Modal isOpen={modal1Open} onClose={handleCloseModal1}>
            <AddOneUser path={slug} closeModal={handleCloseModal1} />
          </Modal>
          <Modal isOpen={modal2Open} onClose={handleCloseModal2}>
            <AddMultipleUsers path={slug} />
          </Modal>
        </ModalRoot>
      </div>

      <ToastContainer autoClose={2000} />
    </div>
  );
};
