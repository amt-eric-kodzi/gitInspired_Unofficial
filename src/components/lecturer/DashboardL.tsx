import { faCopy, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AnyAction } from 'redux';
import { fetchLecturerAssignments } from '../../redux/slice/assignmentsSlice';
import { RootState } from '../../redux/store';

interface MyComponentProps {
  sortBy: string;
  searchText: string;
}

export const DashboardL: React.FC<MyComponentProps> = ({ sortBy, searchText }) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  useEffect(() => {
    dispatch(fetchLecturerAssignments());
  }, []);
  const { assignments } = useSelector((state: RootState) => state.assignments);

  const toBeSorted = [...assignments]

  const sortedAssignments =
    sortBy == 'title'
      ? toBeSorted.sort()
      : sortBy == 'date'
      ? toBeSorted.sort(
          (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        )
      : sortBy == 'deadline'
      ? toBeSorted.sort(
          (a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
        )
      : toBeSorted;

  const searchedAssignments = sortedAssignments.filter((assignment) =>
    assignment.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <>
      <h1>All Assignments</h1>
      <div className='assignment-list-wrapper'>
        {searchedAssignments.map((assignment) => (
          <NavLink key={assignment.id} to='/dashboard/lecturer/submissions'>
            <div className='assignments-list-item'>
              <div>
                <h2>{assignment.title.toLocaleUpperCase()}</h2>
              </div>
              <div className='container'>
                <div className='container'>
                  <div>
                    <h2>Description</h2>
                    <p>{assignment.description}</p>
                  </div>
                  <div>
                    <span className='r'>{assignment.deadline.toString()}</span>
                    <FontAwesomeIcon icon={faUserPlus} className='add-user-icon' />
                  </div>
                  <div>
                    <h2>Unique Code</h2>
                    <p>
                      {assignment.uniqueCode} <FontAwesomeIcon icon={faCopy} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};
