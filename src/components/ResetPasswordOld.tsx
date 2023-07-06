import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  password: string;
  confirm: string;
};


export const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'all', // Enable all validation modes
  });


  const password = watch('password'); 

  const passwordValidation = {
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      message:
        'Password must contain at least one lowercase letter, one uppercase letter, and one digit',
    },
    
  };

  const confirmPassword = (value: string) => {
    if (value !== password) {
      return 'Passwords do not match';
    }
    return true;
  };


  const onReset = async (data: FormData) => {
    console.log(data);
  };

  return (
    <div className='home_form'>
      <h1>Reset Password</h1>
     {errors.confirm && <span className='error'>Passwords do not match</span>}
      <form onSubmit={handleSubmit(onReset)}>
        <div>
          <label>New Password</label>
          <div className={errors.confirm? 'red-border input-div' : 'input-div'}>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              {...register('password', passwordValidation)}
              placeholder='Enter your password'
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              onClick={handleTogglePassword}
            />
          </div>
          {errors.password && <span className='error'>{errors.password.message}</span>}
        </div>

        <div>
          <label>Confirm Password</label>
          <div className={errors.confirm? 'red-border input-div' : 'input-div'}>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              {...register('confirm',{validate:confirmPassword})}
              placeholder='Confirm your password'
          
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              onClick={handleTogglePassword}
            />
          </div>
        </div>
        <div>
          <button type='submit'>Reset Password</button>
        </div>
      </form>
    </div>
  );
};


