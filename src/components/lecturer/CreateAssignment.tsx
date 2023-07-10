import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { Student } from '../../models/Student';
import { addAssignment } from '../../redux/slice/assignmentsSlice';
import { RootState } from '../../redux/store';

type props = {
  closeModal: Function;
};

export const CreateAssignment = ({ closeModal }: props) => {
  const studentsList = useSelector((state: RootState) => state.students.students);
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [students, setstudents] = useState<string[]>([]);
  const [studentSearch, setStudentSearch] = useState('');

  const handleDescription = (value: string) => {
    setDescription(value);
  };

  const handleTitle = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedDate = formatDate(event.target.value);
    setDeadline(formattedDate);
  };

  const handleStudentSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStudentSearch(event.target.value);
  };

  const handleInvite = (event: React.ChangeEvent<HTMLInputElement>, item: string) => {
    if (event.target.checked) {
      setstudents([...students, item]);
    } else {
      const updatedItems = students.filter((checkedItem) => checkedItem !== item);
      setstudents(updatedItems);
    }
  };

  const formatDate = (date: string): string => {
    const parts = date.split('-');
    const formattedDate = `${parts[0]}-${parts[1].padStart(2, '0')}-${parts[2].padStart(2, '0')}`;
    return formattedDate;
  };

  const createAssignment = async (status: string) => {
    let data = { description, title, deadline, students, status };
    closeModal();
    await dispatch(addAssignment(data));
  };

  const backgroundColor = ['#FFA9A9', '#A9EAFF', '#E9A9FF'];
  const filteredStudentList = studentsList.filter(
    (student) =>
      student.firstName.toLowerCase().includes(studentSearch.toLowerCase()) ||
      student.lastName.toLowerCase().includes(studentSearch.toLowerCase()) ||
      student.email.toLowerCase().includes(studentSearch.toLowerCase()) ||
      student.studentId.toLowerCase().includes(studentSearch.toLowerCase()),
  );

  return (
    <div className='create-assignment'>
      <div>
        <h2>Create New Assignment</h2>
        <div className='assignment-input-wrapper'>
          <label htmlFor='title'>Title</label>
          <select id='title' value={title} onChange={handleTitle}>
            <option value=''>e.g Javascript</option>
            <option value='javascript'>JavaScript</option>
            <option value='react'>React</option>
            <option value='typescript'>TypeScript</option>
            <option value='pyhton'>Python</option>
            <option value='Java'>Java</option>
          </select>
        </div>
        <div className='assignment-input-wrapper'>
          <label htmlFor='deadline'>Deadline</label>
          <input type='date' id='deadline' value={deadline} onChange={handleDateChange} />
        </div>
        <div className='assignment-input-wrapper react-quil'>
          <label className='mark-down-label'>Assignment Description</label>
          <ReactQuill value={description} onChange={handleDescription} />
        </div>
        <div className='publish-draft'>
          <button onClick={() => createAssignment('PUBLISHED')}>Save and Publish</button>
          <button onClick={() => createAssignment('DRAFT')}>Save as Draft</button>
        </div>
      </div>
      <div className='invite-student'>
        <h2>Invite Student</h2>
        <div className='invite-students-search'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type='text'
            placeholder='Search'
            onChange={handleStudentSearch}
            value={studentSearch}
          />
          <div className='select-email-wrapper'>
            {filteredStudentList.map((student: Student, index: number) => (
              <div className='select-email-item' key={student.id}>
                <div
                  className='email-avatar'
                  style={{ backgroundColor: backgroundColor[index % 3] }}
                >
                  {student.firstName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p>{student.firstName + ' ' + student.lastName}</p>
                  <p>{student.email}</p>
                </div>
                <div className='check-box-container'>
                  <input
                    type='checkbox'
                    value={student.id}
                    checked={students.includes(student.id)}
                    onChange={(event) => handleInvite(event, student.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
