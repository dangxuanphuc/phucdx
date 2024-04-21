import React, { useEffect, useState } from 'react';

const AboutMe = () => {
  const [age, setAge] = useState(null);

  const countAge = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    setAge(currentYear - 1998);
  };

  useEffect(() => {
    countAge();
  });

  return (
    <div className='section pt-4 px-3 px-lg-4' id='about'>
      <div className='container-narrow'>
        <div className='row'>
          <div className='col-md-6'>
            <h2 className='h4 my-2'>Hello! I’m Phuc Dang Xuan</h2>
            <p>
              I am a Ruby on Rails developer. I'm a quick learner and a team
              worker that gets the job done. I can easily capitalize on low
              hanging fruits and quickly maximize timely deliverables for
              real-time schemas.
            </p>
            <div className='row mt-3'>
              <div className='col-sm-2'>
                <div className='pb-1'>Age:</div>
              </div>
              <div className='col-sm-10'>
                <div className='pb-1 fw-bolder'>
                  <div id='age'>{age}</div>
                </div>
              </div>
              <div className='col-sm-2'>
                <div className='pb-1'>Email:</div>
              </div>
              <div className='col-sm-10'>
                <div className='pb-1 fw-bolder'>phucdx@gmail.com</div>
              </div>
              <div className='col-sm-2'>
                <div className='pb-1'>Phone:</div>
              </div>
              <div className='col-sm-10'>
                <div className='pb-1 fw-bolder'>+849123456789</div>
              </div>
              <div className='col-sm-2'>
                <div className='pb-1'>Address:</div>
              </div>
              <div className='col-sm-10'>
                <div className='pb-1 fw-bolder'>Hanoi, Vietnam</div>
              </div>
            </div>
          </div>
          <div
            className='col-md-5 offset-md-1'
            data-aos='fade-left'
            data-aos-delay='100'
          >
            <img
              className='avatar img-fluid mt-2'
              src='images/avatar.jpg'
              width='400'
              height='400'
              alt='Phuc Dang Xuan'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
