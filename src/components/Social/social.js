import * as React from 'react';
import {FaGithub} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {FiLinkedin} from 'react-icons/fi';
import './social.css';

const Social = () => {
  return (
    <div className='social-container'>
      <ul className='social-list'>
        <li className>
          <a href='https://github.com/afridiz1' target='_blank' className='spin'>
            <FaGithub className='icon'></FaGithub>
          </a>
        </li>
        <li>
          <a href='mailto:zara.afridi15@gmail.com' className='spin'>
            <HiOutlineMail className='icon'></HiOutlineMail>
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/zara-afridi-b79014177' target='_blank' className='spin'>
            <FiLinkedin className='icon'></FiLinkedin>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;