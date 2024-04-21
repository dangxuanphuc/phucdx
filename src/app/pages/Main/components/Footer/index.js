import React from 'react';

const Footer = () => {
  return (
    <footer className='pt-4 pb-4 text-center bg-light'>
      <div className='container'>
        <div className='my-3'>
          <div className='h4'>Phuc Dang Xuan</div>
          <p>Ruby on Rails Developer</p>
          <div className='social-nav'>
            <nav role='navigation'>
              <ul className='nav justify-content-center'>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    href='https://www.linkedin.com/in/wataridori/'
                    title='LinkedIn'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-linkedin'></i>
                    <span className='menu-title sr-only'>LinkedIn</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    href='https://join.skype.com/invite/VRcIelfuGH2Y'
                    title='Skype'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-skype'></i>
                    <span className='menu-title sr-only'>Skype</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    href='https://www.instagram.com/phucdx_/'
                    title='Facebook'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-facebook'></i>
                    <span className='menu-title sr-only'>Facebook</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    href='https://www.facebook.com/wataridori.natsumi/'
                    title='Instagram'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-instagram'></i>
                    <span className='menu-title sr-only'>Instagram</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='text-small text-secondary'>
          <div className='mb-1'>
            Copyright by Phuc Dang Xuan. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
