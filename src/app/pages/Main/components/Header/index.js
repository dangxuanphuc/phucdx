import React from 'react';
import { useState } from 'react';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = (event) => {
    setIsActive((current) => !current);
  };

  const closeMenu = (event) => {
    setIsActive(false);
  };

  return (
    <header className='header'>
      <nav className='nav'>
        <div className='nav__logo'>
          <a href='/' className='logo__link'>
            Phuc Dang Xuan
          </a>
        </div>
        <div className={isActive ? 'nav__menu nav__menu--active' : 'nav__menu'}>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href='/' className='nav__link'>
                Home
              </a>
            </li>
            {/* <li className='nav__item' id='link__skills'>
              <a href='#skills' className='nav__link'>
                Skills
              </a>
            </li> */}
            <li className='nav__item' id='link__timeline' onClick={closeMenu}>
              <a href='#timeline' className='nav__link'>
                Timeline
              </a>
            </li>
          </ul>
        </div>
        <div className='nav__menu-toogle' onClick={toggleMenu}>
          <i className='fas fa-bars'></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
