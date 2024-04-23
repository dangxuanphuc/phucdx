import React from 'react';
import ContentHeader from '../ContentHeader'
import AboutMe from '../AboutMe';
// import Services from '../Services'
import Skill from '../Skill';
// import Portfolio from '../Portfolio'
import Timeline from '../Timeline';
// import Experience from '../Experience'
import Contact from '../Contact';
import Footer from '../Footer';

const Content = () => {
  return (
    <div>
      <div className='page-content'>
        <div id='content'>
          <ContentHeader />
          <AboutMe />
          {/* <Services /> */}
          <Skill />
          {/* <Portfolio /> */}
          <Timeline />
          {/* <Experience /> */}
          <Contact />
          <Footer />
        </div>
      </div>
      <div id='scrolltop'>
        <a className='btn btn-secondary' href='#top'>
          <span className='icon'>
            <i className='fas fa-angle-up fa-x'></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Content;
