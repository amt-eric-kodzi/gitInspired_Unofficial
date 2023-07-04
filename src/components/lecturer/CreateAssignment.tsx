import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const CreateAssignment = () => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);

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

  const handleInvite = (event: React.ChangeEvent<HTMLInputElement>, item:string) => {
    if (event.target.checked) {
      setSelectedEmails([...selectedEmails, item]);
    } else {
      const updatedItems = selectedEmails.filter((checkedItem) => checkedItem !== item);
      setSelectedEmails(updatedItems);
    }
  };

  const formatDate = (date: string): string => {
    const parts = date.split('-');
    const formattedDate = `${parts[0]}-${parts[1].padStart(2, '0')}-${parts[2].padStart(2, '0')}`;
    return formattedDate;
  };

  const showdata = () => {
    console.log({ description, title, deadline });
    console.log(selectedEmails)
  };

  const students: any[] = [];
  for (var i = 1; i <= 10; i++) {
    var user = {
      staffId: 'STF-' + i,
      name: 'User ' + i,
      email: 'user' + i + '@example.com',
    };
    students.push(user);
  }

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
        <label htmlFor="">Assignment Description</label>
        <ReactQuill value={description} onChange={handleDescription} />
        <div className='publish-draft'>
          <button onClick={showdata}>Save and Publish</button>
          <button>Save as Draft</button>
        </div>
      </div>
      <div className='invite-student'>
        <h2>Invite Student</h2>
        <div className='invite-students-search'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type='text' placeholder='Search' />
          <div className='select-email-wrapper'>
            {students.map((student, index) => (
              <div className='select-email-item'>
                <div className='email-avatar'>{student.name.charAt(0)}</div>
                <div key={index}>
                  <p>{student.name}</p>
                  <p>{student.email}</p>
                </div>
                <div>
                  <input
                    type='checkbox'
                    value={student.email}
                    checked={selectedEmails.includes(student.email)}
                    onChange={(event) => handleInvite(event, student.email)}
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
