import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <div className='nav__logo'>
          <a href='/' className='logo__link'>
            Phuc Dang Xuan
          </a>
        </div>
        <div className='nav__menu'>
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
            <li className='nav__item' id='link__timeline'>
              <a href='#timeline' className='nav__link'>
                Timeline
              </a>
            </li>
          </ul>
        </div>
        <div className='nav__menu-toogle'>
          <i className='fas fa-bars'></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
