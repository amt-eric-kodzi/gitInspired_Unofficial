import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Modal from '../Modal';
import ModalRoot from '../ModalRoot';
import { CreateAssignment } from './CreateAssignment';

export const SearchBar = () => {
  const [isCreateAssignment, setIsCreateAssignemnt] = useState(false);

  const openModal = () => {
    setIsCreateAssignemnt(true);
  };

  const closeModal = () => {
    setIsCreateAssignemnt(false);
  };
  return (
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

      <ModalRoot>
        <Modal isOpen={isCreateAssignment} onClose={closeModal}>
          <CreateAssignment />
        </Modal>
      </ModalRoot>
    </div>
  );
};
