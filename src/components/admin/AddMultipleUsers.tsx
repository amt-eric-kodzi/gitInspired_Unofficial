import upload from '../../assets/upload.png';
export const AddMultipleUsers = () => {
  return (
    <div className='upload_multiple'>
      <h2>Upload a file</h2>
      <p>Please upload a file to get started</p>
      <div className='upload_multiple_content'>
        <img src={upload} alt='' />
        <button>Upload a file</button>
        <div className='faint'>
          <p>Or drop a file</p>
          <h2>NB: Only CSV file accepted</h2>
          <span>It must have a required columns of emails. firstname and lastname</span>
        </div>
      </div>
    </div>
  );
};
