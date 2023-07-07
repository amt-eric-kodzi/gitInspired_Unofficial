import { faCopy, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AnyAction } from 'redux';
import { fetchLecturerAssignments } from '../../redux/slice/assignmentsSlice';
import { RootState } from '../../redux/store';

export const DashboardL = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  useEffect(() => {
    dispatch(fetchLecturerAssignments())
  },[])
  const {assignments} = useSelector((state: RootState) =>state.assignments)

  return (
    <>
      <h1>All Assignments</h1>
      <div className='assignment-list-wrapper'>
        {assignments.map((assignment) => (
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
                  <span className='r'>{(assignment.deadline).toString()}</span>
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
