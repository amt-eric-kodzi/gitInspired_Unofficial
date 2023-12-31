import upload from '../../assets/upload.png';
import { useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import api from '../../config/axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { fetchLecturers } from '../../redux/slice/lecturersSlice';
import { fetchStudents } from '../../redux/slice/studentsSlice';

const baseStyle = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  cursor: 'pointer',
  opacity: 1,
};

const focusedStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

type Prop = {
  path: string;
  closeModal: Function;
};

export const AddMultipleUsers = (prop: Prop) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  // ------------Drag n Drop------------
  const { acceptedFiles, getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: {
        'text/plain': ['.csv'],
      },
    });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject],
  );

  const [acceptedFileItems, setAcceptedFileItems] = useState('');

  useEffect(() => {
    dispatch(fetchStudents());
    const x = acceptedFiles.map((file) => {
      return `${file.name} - ${file.size} bytes`;
    });

    setAcceptedFileItems(x[0]);
    //setFileErrorMessage(false);
  }, [acceptedFiles]);
  const slug = prop.path;
  //const [isFileErrorMessage, setFileErrorMessage] = useState(false);

  const uploadFile = async () => {
    prop.closeModal();
    if (!acceptedFiles[0]) {
      //setFileErrorMessage(true);
    } else {
      let formData = new FormData();
      formData.append('file', acceptedFiles[0]);

      await toast.promise(
        api.post(`/api/admin/upload-${slug}s-info`, formData, { withCredentials: true }),
        {
          pending: `Uploading ${slug}...`,
          success: `Upload done.`,
          error: 'Upload failed.',
        },
      );

      await dispatch(fetchLecturers())
      await dispatch(fetchStudents())
    }
  };
  return (
    <div className='upload_multiple'>
      {acceptedFiles.length < 1 ? (
        <div>
          <h2>Upload a file</h2>
          <p>Please upload a file to get started</p>
          <div {...getRootProps({ style, className: '' })}>
            <div className='upload_multiple_content'>
              <img src={upload} alt='' />
              <input
                {...getInputProps({
                  type: 'file',
                  name: 'file',
                  id: 'file',
                  // required: true,
                })}
              />
              <button>Upload a file</button>
              <div className='faint'>
                <p>Or drop a file</p>
                <h2>NB: Only CSV file accepted</h2>
                <span>It must have a required columns of emails. firstname and lastname</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {acceptedFileItems}
          <button onClick={uploadFile}>Send this file.</button>
        </div>
      )}
    </div>
  );
};
