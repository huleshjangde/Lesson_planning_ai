import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-200 py-5 text-center text-slate-900 font-semibold'>
      <div className='flex justify-center items-center gap-4'>
        <a
          href='https://www.linkedin.com/in/hulesh-jangde-108310189/'
          target='_blank'
          rel='noopener noreferrer'
          className=' hover:text-blue-500 transition-colors duration-300'
        >
          Linkedin
        </a>
        <a
          href='https://twitter.com/HjThekingoffb'
          target='_blank'
          rel='noopener noreferrer'
          className=' hover:text-blue-500 transition-colors duration-300'
        >
          Twitter
        </a>
        <a
          href='https://www.instagram.com/huleshjangde1'
          target='_blank'
          rel='noopener noreferrer'
          className=' hover:text-blue-500 transition-colors duration-300'
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
