import React, { useEffect } from 'react';

const Header = () => {
  const fixedHeader = () => {
    const navbar = document.getElementById('header-nav');
    var body = document.getElementsByTagName('body')[0];
    const scrollTop = document.getElementById('scrolltop');
    window.onscroll = () => {
      if (window.scrollY > 0) {
        navbar.classList.add('fixed-top', 'shadow-sm');
        body.style.paddingTop = navbar.offsetHeight + 'px';
        scrollTop.style.visibility = 'visible';
        scrollTop.style.opacity = 1;
      } else {
        navbar.classList.remove('fixed-top', 'shadow-sm');
        body.style.paddingTop = '0px';
        scrollTop.style.visibility = 'hidden';
        scrollTop.style.opacity = 0;
      }
    };
  };

  useEffect(() => {
    fixedHeader();
  });

  return (
    <header className='bg-light'>
      <nav
        className='navbar navbar-expand-lg navbar-light bg-light'
        id='header-nav'
        role='navigation'
      >
        <div className='container'>
          <a className='link-dark navbar-brand site-title mb-0' href='/'>
            Phuc Dang Xuan
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto me-2'>
              <li className='nav-item'>
                <a className='nav-link' href='#about'>
                  About
                </a>
              </li>
              {/* <!-- <li className="nav-item"><a className="nav-link" href="#services">Services</a></li> --> */}
              <li className='nav-item'>
                <a className='nav-link' href='#skills'>
                  Skills
                </a>
              </li>
              {/* <!-- <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li> --> */}
              <li className='nav-item'>
                <a className='nav-link' href='#timeline'>
                  Timeline
                </a>
              </li>
              {/* <!-- <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li> --> */}
              <li className='nav-item'>
                <a className='nav-link' href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
