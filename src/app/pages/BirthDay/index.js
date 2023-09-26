import React, { useEffect } from 'react';
import './index.scss';

const BirthDay = () => {
  useEffect(() => {
    document.title = 'Happy Birthday Hoang Hien';
  });

  return (
    <iframe
      src='https://tanjoubi-omedetou.netlify.app/'
      title="Hoang Hien's Birthday"
      className='birthday-frame'
      frameBorder='0'
    ></iframe>
  );
};

export default BirthDay;
