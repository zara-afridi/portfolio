import * as React from 'react';
import { useState, useEffect } from 'react';
import useScrollDirection from '../../hooks/useScrollDirection';
import Footer from '../Footer/footer';
import Head from '../Head/head';
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

  return (
    <>
    <Head></Head>
      <div className='flex flex-col justify-center mx-8'>
        <nav className='nav-container flex flex-row items-center justify-center sm:justify-end p-8' data-nav-state={navState()}>
          <a role='button' href="#main" className='skip-nav'>
            Skip To Content
          </a>
          <a role='button' href='#about' className='mr-8 p-2'>
            About
          </a>
          <a role='button' href='#work' className='mr-8 p-2'>
            Work
          </a>
          <a role='button' href='#projects' className='mr-8 p-2'>
            Projects
          </a>
          <a href='/resume.pdf' className='sm:mr-16 border-dotted border-2 focus:outline-0 focus:border-pink focus:text-pink hover:border-pink hover:text-pink p-1 sm:p-2 rounded'>
            Resume
          </a>
        </nav>
        <main id='main' className='p-2 md:p-8'>
          {children}
        </main>
        <Footer></Footer>
      </div>
    </>
  )
};

export default Layout;