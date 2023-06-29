
export const ResetPassword = () => {
  return (
    <div>
      <h1>Reset Password</h1>
      <form>
        <div>
          <label htmlFor='email'>Email:</label><br/>
          <input type='email' id='email' name='email' />
        </div>
        <div>
          <label htmlFor='password'>Password:</label><br/>
          <input type='password' id='password' name='password' />
        </div>
        <div>
          <button type='submit'>Reset Password</button>
        </div>
      </form>
    </div>
  );
};
