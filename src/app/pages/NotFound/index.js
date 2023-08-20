import React from 'react';
import './index.scss';

const NotFound = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='error-404'>
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className='error-details'>
              Sorry, an error has occured, requested page not found!
            </div>
            <div className='mt-3'>
              <a href='/' className='btn back-to-home'>
                <span className='fa fa-home'>Back to Homepage</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
