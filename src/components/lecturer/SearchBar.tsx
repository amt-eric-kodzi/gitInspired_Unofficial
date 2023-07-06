import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Modal from '../Modal';
import ModalRoot from '../ModalRoot';
import { CreateAssignment } from './CreateAssignment';
import React from 'react'

export const SearchBar = () => {
  const [isCreateAssignment, setIsCreateAssignemnt] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [searchText, setSearchText] = useState('');




  const sortByHandler = (event: React.ChangeEvent<HTMLSelectElement> )=>{
    setSortBy(event.target.value)
  }

  const openModal = () => {
    setIsCreateAssignemnt(true);
  };

  const closeModal = () => {
    setIsCreateAssignemnt(false);
  };

  console.log(searchText)
  return (
    <div>
      <div className='search-panel'>
        <div className='search-wrapper'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type='text' placeholder='Search' onChange={(e)=>{setSearchText(e.target.value)}} value={searchText}/>
        </div>
        <div className='sort-wrapper'>
          <select onChange={sortByHandler} value={sortBy}>
            <option value=''>Sort By</option>
            <option value='title'>Title</option>
            <option value='deadline'>Deadline</option>
            <option value='date'>Date</option>
          </select>
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
