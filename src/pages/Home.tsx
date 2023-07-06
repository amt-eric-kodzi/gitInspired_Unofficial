import laptop from '../assets/laptop.png';
import { Login } from '../components/Login';

export const Home = () => {

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
        </div>
      </div>
      <div className='home_form_con'>
        <Login/>
      </div>
    </div>
  );
};
