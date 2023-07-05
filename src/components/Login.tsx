import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onLogin } from '../api/authentication';
import { login } from '../redux/slice/authSlice';

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginId, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [loginError, setLoginError] = useState('');
  //const [user, setUser] = useState(null)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const clearErrors = () => {
    setIsEmailError(false);
    setLoginError('');
  };
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!emailPattern.test(loginId)) {
      setIsEmailError(true);
      return;
    }

    await onLogin({ loginId, password })
      .then((res) => {
        if (res.status === 200) {
          //setUser(res.user)
          dispatch(login());
          navigate('/dashboard');
        }
      })
      .catch((err) => {
        return setLoginError(err.response.data.message);
      });
  };

  return (
    <div className='home_form'>
      <h1>Welcome back, Log in</h1>
      {loginError && <span className='error'>{loginError}</span>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Email / Staff ID</label>
          <div className={isEmailError || loginError ? 'red-border input-div' : 'input-div'}>
            <input
              type='text'
              id='username'
              value={loginId}
              onChange={handleUsernameChange}
              onFocus={clearErrors}
              required
            />
          </div>
        </div>
        {isEmailError && <span className='error'>Please enter a correct email address</span>}
        <div>
          <label htmlFor='password'>Password:</label>
          <div className={loginError ? 'red-border input-div' : 'input-div'}>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              value={password}
              onChange={handlePasswordChange}
              onFocus={clearErrors}
              required
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              onClick={handleTogglePassword}
            />
          </div>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};
