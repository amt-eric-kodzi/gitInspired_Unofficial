import { faCheck, faEye, faEyeSlash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import laptop from '../assets/laptop.png';
import laptoplock from '../assets/laptoplock.png';

export const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState(false);
  const [isMinLength, setIsMinLength] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onReset = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (password !== confirmPass) {
      setError(true);
      return;
    }
    try {
      console.log({ newpassword: password });
      const response = await axios.post(`/api/auth/reset-password`, { newPassword: password });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const noValidationError = isLowerCase && isMinLength && isNumber && isUpperCase;
  const validationHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const lowercase = /[a-z]/;
    const uppercase = /[A-Z]/;
    const digit = /[0-9]/;
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (e.target.value.length >= 8) {
      setIsMinLength(true);
    } else {
      setIsMinLength(false);
    }

    if (lowercase.test(e.target.value)) {
      setIsLowerCase(true);
    } else {
      setIsLowerCase(false);
    }

    if (uppercase.test(e.target.value)) {
      setIsUpperCase(true);
    } else {
      setIsUpperCase(false);
    }

    if (digit.test(e.target.value)) {
      setIsNumber(true);
    } else {
      setIsNumber(false);
    }

    if(symbolRegex.test(e.target.value)){
      setIsSymbol(true);
    } else {
      setIsSymbol(false);
    }

    setPassword(e.target.value);
  };

  return (
    <div className='home'>
      <div className='home_bg'>
        <div>
          <h2 className='home_heading'>
            A Git-Inspired Assignment
            <br /> submission system
          </h2>

          <p className='home_des'>
            A Git- Inspired Assignment submission system Vorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
        <div className='home_img_con'>
          <img src={laptop} alt='' />
          <img src={laptoplock} alt='' className='lock' />
        </div>
      </div>
      <div className='home_form_con'>
        <div className='home_form'>
          <h1>Reset Password</h1>
          <form>
            <div>
              <label>New Password</label>
              <div className={error ? 'red-border input-div' : 'input-div'}>
                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={validationHandler}
                  onFocus={() => {
                    setError(false);
                  }}
                  placeholder='Enter your password'
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  onClick={handleTogglePassword}
                />
              </div>
              {error && <span className='error'>Passwords do not match</span>}
            </div>

            <div>
              <label>Confirm Password</label>
              <div className={error ? 'red-border input-div' : 'input-div'}>
                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                  onFocus={() => {
                    setError(false);
                  }}
                  placeholder='Confirm your password'
                />
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </div>
            </div>
            <div className='submit-wrapper'>
              {!noValidationError && (
                <div className='password-validation'>
                  <h3>Your password must contain</h3>
                  <span>
                    {
                      <FontAwesomeIcon
                        icon={isMinLength ? faCheck : faXmark}
                        className={isMinLength ? 'g' : 'r'}
                      />
                    }{' '}
                    At least 8 Characters
                  </span>
                  <span>
                    {
                      <FontAwesomeIcon
                        icon={isLowerCase ? faCheck : faXmark}
                        className={isLowerCase ? 'g' : 'r'}
                      />
                    }{' '}
                    Lower case letters (a-z)
                  </span>
                  <span>
                    {
                      <FontAwesomeIcon
                        icon={isUpperCase ? faCheck : faXmark}
                        className={isUpperCase ? 'g' : 'r'}
                      />
                    }{' '}
                    Upper case letters (A-Z)
                  </span>
                  <span>
                    {
                      <FontAwesomeIcon
                        icon={isNumber ? faCheck : faXmark}
                        className={isNumber ? 'g' : 'r'}
                      />
                    }{' '}
                    Numbers (0-9)
                  </span>
                  <span>
                    {
                      <FontAwesomeIcon
                        icon={isSymbol ? faCheck : faXmark}
                        className={isSymbol ? 'g' : 'r'}
                      />
                    }{' '}
                    Symbols
                  </span>
                </div>
              )}
              <button type='submit' disabled={error} onClick={onReset}>
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
