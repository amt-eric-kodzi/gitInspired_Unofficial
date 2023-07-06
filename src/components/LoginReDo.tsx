import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onLogin } from '../api/authentication';
import { User } from '../models/User';
import { login } from '../redux/slice/authSlice';

const user: User = {
  loginId: '',
  password: '',
};

export const LoginTrial = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    mode: 'all',
  });

  const [loginError, setLoginError] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  
  

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: User) => {
    
    await onLogin(data)
      .then((res) => {
        if (res.status === 200) {
          dispatch(login());
          navigate('/dashboard');
        }
      })
      .catch((err) => {
        return setLoginError(err.response.data.message);
      });
  };


  const passwordValidation = {
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      message:
        'Password must contain at least one lowercase letter, one uppercase letter, and one digit',
    },
  };

  return (
    <div className='home_form'>
      <h1>Welcome back, Log in</h1>
      {loginError && <span className='error'>{loginError}</span>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email / Staff ID</label>
          <div
            className={
              errors.loginId || loginError == 'Email or password incorrect'
                ? 'red-border input-div'
                : 'input-div'
            }
            onClick={() => setLoginError('')}
          >
            <input
              required
              placeholder='Enter your email or Staff ID'
              {...register('loginId', {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter correct email address',
                },
              })}
            />
          </div>
          {errors.loginId && <span className='error'>{errors.loginId.message}</span>}
        </div>

        <div>
          <label>Password</label>
          <div
            className={
              loginError == 'Email or password incorrect' ? 'red-border input-div' : 'input-div'
            }
            onClick={() => setLoginError('')}
          >
            <input
              required
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              placeholder='Enter your password'
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              onClick={handleTogglePassword}
            />
          </div>
        </div>

        <div>
          <button type='submit'>Log in</button>
        </div>
      </form>
    </div>
  );
};
