import React from 'react';

const Services = () => {
  return (
    <div className='section px-3 px-lg-4 pt-5' id='services'>
      <div className='container-narrow'>
        <div className='text-center mb-5'>
          <h2 className='marker marker-center'>My Services</h2>
        </div>
        <div className='text-center'>
          <p className='mx-auto mb-3' style={{ maxWidth: '600px' }}>
            {' '}
            I offer services fit for any website or app. I can quickly maximize
            timely deliverables for real-time schemas.
          </p>
        </div>
        <div className='row py-3'>
          <div
            className='col-md-3 text-center'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            <img
              className='mb-2'
              src='images/services/web-design.svg'
              width='96'
              height='96'
              alt='web design'
            />
            <div className='h5'>Web Design</div>
          </div>
          <div
            className='col-md-3 text-center'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <img
              className='mb-2'
              src='images/services/graphic-design.svg'
              width='96'
              height='96'
              alt='graphic design'
            />
            <div className='h5'>Graphic Design</div>
          </div>
          <div
            className='col-md-3 text-center'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <img
              className='mb-2'
              src='images/services/ui-ux.svg'
              width='96'
              height='96'
              alt='ui-ux'
            />
            <div className='h5'>UI/UX</div>
          </div>
          <div
            className='col-md-3 text-center'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            <img
              className='mb-2'
              src='images/services/app-development.svg'
              width='96'
              height='96'
              alt='app development'
            />
            <div className='h5'>App Development</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
