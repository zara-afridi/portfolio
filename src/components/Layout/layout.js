import * as React from 'react';
import { useState, useEffect } from 'react';
import useScrollDirection from '../../hooks/useScrollDirection';
import './layout.css';

const Layout = ({children}) => {
  const [isMounted, setIsMounted] = useState(true);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  // set the scrolledToTop state
  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navState = () => {
    if (scrollDirection === 'down' && !scrolledToTop) {
      return 'nav-down';
    } else if (scrollDirection === 'up' && !scrolledToTop) {
      return 'nav-up';
    }
    return '';
  }; 
  scrollDirection == 'up' ? console.log('HELL YEAH BROTHER') : console.log('down');
  const ariaHidden = navState() === 'nav-down' ? 'false' : 'true';
  console.log('navState', navState());

  return (
    <div className='flex flex-col justify-center mx-8'>
      <nav className='nav-container flex flex-row items-center justify-end p-8' data-nav-state={navState()}>
        <a role='button' href="#main" className='skip-nav'>
          Skip To Content
        </a>
        <a role='button' href='#about' className='mr-4'>
          About
        </a>
        <a role='button' href='#work' className='mr-4'>
          Work
        </a>
        <a role='button' href='#projects' className='mr-32'>
          Projects
        </a>
      </nav>
      <main id='main' className='p-2 md:p-8'>
        {children}
      </main>
    </div>
  )
};

export default Layout;