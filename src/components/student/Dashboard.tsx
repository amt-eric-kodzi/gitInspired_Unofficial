import { SetStateAction, useState } from 'react';
import noDataLogo from '../../assets/noDataLogo.png';
import AssignmentList from './AssignmentList';

const Dashboard = () => {
  const [filter, setFilter] = useState('');
  const handleFilter = (event: { target: { value: SetStateAction<string> } }) => {
    setFilter(event.target.value);
  };
  const assignments = [
    {
      title: 'React',
      description:
        'Your task is to develop a web application using JavaScript that provides a user-friendly interface for tracking and managing tasks. ',
      deadline: '1st May,2023',
      code: '88898',
    },
    {
      title: 'Java',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      deadline: '1st May,2023',
      code: '556678',
    },
    {
      title: 'CSS',
      description:
        'Develop a TypeScript program that reads input data from a JSON file and outputs the data to the console. The program should demonstrate an understanding of TypeScript syntax and data types, i',
      deadline: '1st May,2023',
      code: '867849',
    },
    {
      title: 'JavaScript',
      description: 'ghgh ghghg ghghgh ert 56',
      deadline: '1st May,2023',
      code: '88898',
    },
    {
      title: 'TypeScript',
      description: 'ghgh ghghg ghghgh ',
      deadline: '1st May,2023',
      code: '556678',
    },
    {
      title: 'CSS',
      description: 'ghgh ghghg ghghgh ert 56',
      deadline: '1st May,2023',
      code: '867889',
    },
  ];
  const isList = true;
  console.log(filter)

  return (
    <div className='student-dashboard'>
      <div className='filter-wrapper'>
        <h1>All Assignments</h1>
        {isList && <select className='filter-input' onChange={handleFilter} value={filter}>
          <option value='' disabled selected>
            Sort by deadline
          </option>
          <option value='ascending'>Ascending</option>
          <option value='descending'>Descending</option>
        </select>}
      </div>

      {isList ? (
        <AssignmentList data={assignments} itemsPerPage={5} />
      ) : (
        <div className='no-assignment'>
          <img src={noDataLogo} alt='' />
          <p>No assignment yet. Kindly contact your lecturer</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
