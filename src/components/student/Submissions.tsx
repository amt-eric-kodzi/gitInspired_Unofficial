import { Navigation } from '../student/Navigation';
import SubmissionList from './SubmissionList';
import noDataLogo from '../../assets/noDataLogo.png';
import { useState, SetStateAction } from 'react';

export const Submissions = () => {

  const [filter, setFilter] = useState('');
  const handleFilter = (event: { target: { value: SetStateAction<string> } }) => {
    setFilter(event.target.value);
  };
  const submissions = [
    {
      title: 'React',
      description:
        'Your task is to develop a web application using JavaScript that provides a user-friendly interface for tracking and managing tasks. ',
      deadline: '1st May,2023',
      code: '88898',
      status: 'Submitted',
    },
    {
      title: 'Java',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      deadline: '1st May,2023',
      code: '556678',
      status: 'Submitted',
    },
    {
      title: 'CSS',
      description:
        'Develop a TypeScript program that reads input data from a JSON file and outputs the data to the console. The program should demonstrate an understanding of TypeScript syntax and data types, i',
      deadline: '1st May,2023',
      code: '867849',
      status: 'Submitted',
    },
    {
      title: 'JavaScript',
      description: 'ghgh ghghg ghghgh ert 56',
      deadline: '1st May,2023',
      code: '88898',
      status: 'Submitted',
    },
    {
      title: 'TypeScript',
      description: 'ghgh ghghg ghghgh ',
      deadline: '1st May,2023',
      code: '556678',
      status: 'Submitted',
    },
    {
      title: 'CSS',
      description: 'ghgh ghghg ghghgh ert 56',
      deadline: '1st May,2023',
      code: '867889',
      status: 'Submitted',
    },
  ];
  const isList = true;
  return (
    <div className='student-dashboard'>
      <Navigation />
      <div className='filter-wrapper'>
        <h1>All Submissions</h1>
        {isList && <select className='filter-input' onChange={handleFilter} value={filter}>
          <option value='' disabled selected>
            Sort by deadline
          </option>
          <option value='ascending'>Ascending</option>
          <option value='descending'>Descending</option>
        </select>}
      </div>
      {isList ? (
        <SubmissionList data={submissions} itemsPerPage={5} />
      ) : (
        <div className='no-assignment'>
          <img src={noDataLogo} alt='' />
          <p>No submissions yet.</p>
        </div>
      )}
    </div>
  );
};
