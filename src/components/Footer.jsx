import React from 'react';
import moment from 'moment';

const today = moment().format('YYYY');
const Footer = () => {
  return (
    <footer className='grid grid-cols-1 md:grid-cols-3 gap-1 cfr-border align-center items-center justify-center py-4 md:py-0 px-6 cfr-bg'>
      <div className=' text-center md:text-left'>
        <span>&copy; BrewCode {today}</span>
      </div>
      <div className='text-center flex align-center items-center justify-center'>
        <a href="/" className="cfr-logo cfr-logo--small">
          Beer 101
        </a>
      </div>
      <div className="cfr-creator text-center md:text-right">
        <span>
          crafted with<span className="cfr-creator__credits">🤎</span>by
        </span>
        <a href="https://bgrela.dev/" target='_blank' rel="noreferrer" className="cfr-creator__link text-shadow"> bgrela.dev </a>

      </div>
    </footer>
  );
};

export default Footer;