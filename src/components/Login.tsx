import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { onLogin } from '../api/authentication';
import { User } from '../models/User';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slice/authSlice';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user: User = {
    loginId: '',
    password: '',
  };
  const [data, setdata] = useState(user);

  useEffect(() => {}, []);

  const form = useForm<User>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<User> = async (data) => {
    setdata(data);
    await onLogin(data).then(() => {
      dispatch(login());
    }).catch((err)=>{
      console.log(err)
    });

    navigate('/dashboard');
  };

  return (
    <div className='home_form'>
      <h1 className=''>Welcome Back, Log in</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='email'>Email / Staff ID:</label>
          <br />
          <input
            type='email'
            id='email'
            placeholder='Enter your email or Staff ID'
            {...register('loginId', { required: true })}
          />
          {errors.loginId && <span>Email or Staff ID is required</span>}
        </div>

        <div>
          <label htmlFor='password'>Password:</label>
          <br />
          <input
            type='password'
            id='password'
            placeholder='Enter your password'
            {...register('password', { required: true })}
          />
        </div>
        <div>
          <button type='submit'>Log in</button>
        </div>
      </form>
    </div>
  );
};
