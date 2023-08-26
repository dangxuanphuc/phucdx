import React from 'react';

const TopContent = () => {
  return (
    <section className='home'>
      <div className='home__infor'>
        <div className='home__decription'>
          <h1 className='decription__text'>
            Hi,
            <br />
            I'm<span> Phuc Dang Xuan</span>
            <br /> Ruby on Rails Developer
          </h1>
        </div>
        <div className='home__social'>
          <a
            href='https://www.linkedin.com/in/wataridori/'
            className='social__link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin social__icon'></i>
          </a>
          <a
            href='https://join.skype.com/invite/VRcIelfuGH2Y'
            className='social__link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-skype social__icon'></i>
          </a>
          <a
            href='https://www.facebook.com/wataridori.natsumi/'
            className='social__link '
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-facebook social__icon'></i>
          </a>
          <a
            href='https://www.instagram.com/phucdx_/'
            className='social__link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-instagram social__icon'></i>
          </a>
        </div>
      </div>
      <div className='home__image'>
        <img
          src={require('../../../../assets/images/main/avatar.jpg')}
          alt='phucdx'
        />
      </div>
    </section>
  );
};

export default TopContent;
