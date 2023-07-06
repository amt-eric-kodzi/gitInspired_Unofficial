import { SubmitHandler, useForm } from 'react-hook-form';
import { NewStudent } from '../../models/Student';
import { useDispatch } from 'react-redux';
import { addStudent } from '../../redux/slice/studentsSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';

type Prop = {
  path: string;
};

export const AddOneUser = (prop: Prop) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const slug = prop.path;

  const form = useForm<NewStudent>();

  const { register, handleSubmit } = form;

  const onSubmit: SubmitHandler<NewStudent> = async (data) => {
    try {
      slug === 'student' && dispatch(addStudent(data));
      slug === 'lecturer' && dispatch(addStudent(data));// change to addlec...
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className='add_one_user'>
      <h2>Tell us a bit about the {slug} you are adding</h2>
      <span>Please fill the following details to get started</span>
      <form className='input_con' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type='email'
            placeholder='Email'
            required
            {...register('email', { required: true })}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Firstname'
            required
            {...register('firstName', { required: true })}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Lastname'
            required
            {...register('lastName', { required: true })}
          />
        </div>
        <button>Create</button>
      </form>
    </div>
  );
};
