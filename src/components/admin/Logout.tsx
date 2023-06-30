

type LogoutProps = {
  signout: () => void;
  cancel: () => void;
};

const Logout: React.FC<LogoutProps> = ({ signout, cancel }) => {
  return (
    <div className='admin_logout'>
      <h2>Confirm Logout</h2>
      <p>
        Are you sure you want to logout from <span>Assign IT Dashboard?</span>
      </p>
      <div>
        <button onClick={cancel}>Cancel</button>
        <button onClick={signout}>Logout</button>
      </div>
    </div>
  );
};

export default Logout;
