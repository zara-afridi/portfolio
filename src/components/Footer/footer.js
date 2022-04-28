import * as React from 'react';
import Social from '../Social/social';

const Footer = () => {
  return (
    <div>
      <Social></Social>
      <div className='text-center pb-8'>
        <a href='https://github.com/afridiz1/portfolio' target='_blank' className='highlight transition duration-200 border-b border-transparent hover:border-pink'>
          Built & Designed By Zara Afridi
        </a>
      </div>
    </div>
  )
}

export default Footer;