import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import image from '../../assets/admin-dashboardimg.png';
import { RootState } from '../../redux/store';
import { fetchLecturers } from '../../redux/slice/lecturersSlice';
import { fetchAssignments } from '../../redux/slice/assignmentsSlice';
import { fetchStudents } from '../../redux/slice/studentsSlice';

export const Home = () => {
  const { lecturers } = useSelector((state: RootState) => state.lecturers);
  const { students } = useSelector((state: RootState) => state.students);
  const { assignments } = useSelector((state: RootState) => state.assignments);
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  useEffect(() => {
    dispatch(fetchLecturers());
    dispatch(fetchAssignments());
    dispatch(fetchStudents());
  }, []);

  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className='admin-dashboard'>
      <div className='admin-dashboard-left'>
        <div className='left-top'>
          <div>
            <h2>Welcome back, {user?.firstName ? `${user?.firstName}` : 'Admin'}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum
            </p>
          </div>
          <img src={image} alt='' />
        </div>
        <div className='left-middle'>
          <h2>Overview</h2>
          <div>
            <div className='left-middle-items'>
              <div className='icon-div'>
                <FontAwesomeIcon icon={faUserGraduate} />
              </div>
              <div className='users-stats'>
                <span> {lecturers.length}</span>
                <span> Lecturers</span>
              </div>
            </div>
            <div className='left-middle-items'>
              <div className='icon-div'>
                <FontAwesomeIcon icon={faUserGraduate} />
              </div>
              <div className='users-stats'>
                <span> {students.length}</span>
                <span> Students</span>
              </div>
            </div>
            <div></div>
            <div className='left-middle-items'>
              <div className='icon-div'>
                <FontAwesomeIcon icon={faUserGraduate} />
              </div>
              <div className='users-stats'>
                <span> {assignments.length}</span>
                <span> Assignments Created</span>
              </div>
            </div>
            <div></div>
            <div className='left-middle-items'>
              <div className='icon-div'>
                <FontAwesomeIcon icon={faUserGraduate} />
              </div>
              <div className='users-stats'>
                <span> 0</span>
                <span> Submissions Made</span>
              </div>
            </div>
          </div>
        </div>
        <div className='left-bottom center'>Graph</div>
      </div>
      <div className='admin-dashboard-right'>
        <div>Notifications</div>
        <div>Assignment Status</div>
      </div>
    </div>
  );
};
