import React, { useState } from 'react';

export const useSearchBar = () => {
  const [isCreateAssignment, setIsCreateAssignemnt] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [searchText, setSearchText] = useState('');

  const sortByHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const openModal = () => {
    setIsCreateAssignemnt(true);
  };

  const closeModal = () => {
    setIsCreateAssignemnt(false);
  };
  return {
    isCreateAssignment,
    setIsCreateAssignemnt,
    sortBy,
    setSortBy,
    searchText,
    setSearchText,
    sortByHandler,
    openModal,
    closeModal
  };
};
