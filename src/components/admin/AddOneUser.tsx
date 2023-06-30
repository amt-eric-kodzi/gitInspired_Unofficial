import { useForm, SubmitHandler } from 'react-hook-form';
import axios from '../../config/axios';
import api from '../../config/axios';

type Prop = {
  path: string;
};

export const AddOneUser = (prop: Prop) => {
 // console.log(prop.path);
  const slug = prop.path;
  type FormData = {
    email: string;
    lastName: string;
    firstName: string;
  };

 
  const form = useForm<FormData>();

  const { register, handleSubmit } = form;

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post(`/api/admin/upload-${slug}`, data);
      console.log(data);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='add_one_user'>
      <h2>
        Tell us a bit about the {slug} <br />
        you are adding
      </h2>
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
