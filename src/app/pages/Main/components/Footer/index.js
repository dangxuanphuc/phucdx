import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__social'>
        <a
          href='https://www.linkedin.com/in/wataridori/'
          className='social__link social__link--footer'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-linkedin social__icon'></i>
        </a>
        <a
          href='https://join.skype.com/invite/VRcIelfuGH2Y'
          className='social__link social__link--footer'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-skype social__icon'></i>
        </a>
        <a
          href='https://www.facebook.com/wataridori.natsumi/'
          className='social__link social__link--footer '
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-facebook social__icon'></i>
        </a>
        <a
          href='https://www.instagram.com/phucdx_/'
          className='social__link social__link--footer'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-instagram social__icon'></i>
        </a>
      </div>
      <p className='footer__copyright'>Copyright &copy; 2023 by Phuc Dang Xuan. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
