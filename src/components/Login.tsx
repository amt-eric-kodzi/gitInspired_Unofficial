import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThunkDispatch } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { User } from '../models/User';
import { login } from '../redux/slice/authSlice';

export const Login: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  const user: User = {
    loginId: '',
    password: '',
  };
  const [userPayload, setUserPayload] = useState(user);
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPayload({
      ...userPayload,
      loginId: event.target.value,
    });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPayload({
      ...userPayload,
      password: event.target.value,
    });
  };

  const clearErrors = () => {
    setIsEmailError(false);
    setLoginError('');
  };
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!emailPattern.test(userPayload.loginId)) {
      setIsEmailError(true);
      return;
    }

    console.log(userPayload)

    try {
      await dispatch(login(userPayload));
    } catch (error: any) {
      return setLoginError(error.response.data.message);
    }
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
              value={userPayload.loginId}
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
              value={userPayload.password}
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
