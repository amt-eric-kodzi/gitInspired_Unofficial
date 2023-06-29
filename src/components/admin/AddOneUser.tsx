import { useForm, SubmitHandler } from 'react-hook-form';

export const AddOneUser = () => {

  type FormData = {
    email: string;
    lastName: string;
    firstName: string;
  };


  const form = useForm<FormData>();

  const {
    register,
    handleSubmit,
  } = form;

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    
    console.log(data)
  };

  return (
    <div className='add_one_user'>
      <h2>Tell us a bit about the ........... <br/>you are adding</h2>
      <span>Please fill the following details toget started</span>
      <form className="input_con" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type='email' placeholder='Email' required {...register('email', { required: true })} />
        </div>
        <div>
          <input type='text' placeholder='Firstname' required  {...register('firstName', { required: true })}/>
        </div>
        <div>
          <input type='text' placeholder='Lastname' required  {...register('lastName', { required: true })}/>
        </div>
        <button>Create</button>
      </form>
      
    </div>
  );
};
