const Logout = ({signout, cancel}) => {
  return (
    <div className="admin_logout">
      <h2>Confirm Logout</h2>
      <p>Are you sure you want to logout from Assign IT Dasboard?</p>
      <button onClick={cancel}>Cancel</button>
      <button onClick={signout}>Logout</button>
    </div>
  );
};

export default Logout;
