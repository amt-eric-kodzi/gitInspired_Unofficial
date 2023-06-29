import { useLocation } from 'react-router-dom';
import logolearn from '../../assets/logolearn.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal';
import ModalRoot from '../ModalRoot';
import { useState } from 'react';
import { AddOneUser } from './AddOneUser';
import { AddMultipleUsers } from './AddMultipleUsers';

export const AllUsers = () => {

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

  return (
    <div className='allusers_con'>
      <div className='add_users'>
        <h2>{slug}</h2>
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
      <div className='users_list'>
        <img src={logolearn} alt='' />
        <span>
          Oops, no {slug} created or uploaded yet. Click on any of the buttons above to get started
        </span>
      </div>
      <ModalRoot>
        <Modal isOpen={modal1Open} onClose={handleCloseModal1}>
          <AddOneUser/>
        </Modal>

        <Modal isOpen={modal2Open} onClose={handleCloseModal2}>
          <AddMultipleUsers/>
        </Modal>
      </ModalRoot>
    </div>
  );
};
