import { faCopy, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export const DashboardL = () => {
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
        'Build a web application using React that allows users to browse and search a collection of items.',
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
      title: 'React',
      description: 'ghgh ghghg ghghgh ert 56',
      deadline: '1st May,2023',
      code: '88898',
    },
    {
      title: 'Java',
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

  return (
    <>
      <h1>All Assignments</h1>
      <div className='assignment-list-wrapper'>
        {assignments.map((assignment, index) => (
          <NavLink to='/dashboard/lecturer/submissions'>
          <div key={index} className='assignments-list-item'>
            <div>
              <h2>{assignment.title.toLocaleUpperCase()}</h2>
            </div>
            <div className='container'>
              <div>
                <h2>Description</h2>
                <p>{assignment.description}</p>
              </div>
              <div>
                <span className='r'>{assignment.deadline}</span>
                <FontAwesomeIcon icon={faUserPlus} className='add-user-icon' />
              </div>
              <div>
                <h2>Unique Code</h2>
                <p>
                  {assignment.code} <FontAwesomeIcon icon={faCopy} />
                </p>
              </div>
            </div>
          </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};
