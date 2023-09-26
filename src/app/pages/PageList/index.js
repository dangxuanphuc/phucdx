import React from 'react';
import './index.scss';

const PageList = () => {
  return (
    <div className='page-list'>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>Page Title</th>
            <th style={{ textAlign: 'center' }}>URL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Home Page</td>
            <td>
              <a href='/' target='_blank'>
                https://dangxuanphuc.io.vn/
              </a>
            </td>
          </tr>
          <tr>
            <td>Happy New Year 2024</td>
            <td>
              <a href='/happy-new-year' target='_blank'>
                https://dangxuanphuc.io.vn/happy-new-year
              </a>
            </td>
          </tr>
          <tr>
            <td>Happy Birthday Hiền</td>
            <td>
              <a href='/happy-birthday' target='_blank'>
                https://dangxuanphuc.io.vn/happy-birthday
              </a>
            </td>
          </tr>
          <tr>
            <td>Happy International Womens Day</td>
            <td>
              <a href='/happy-international-womens-day' target='_blank'>
                https://dangxuanphuc.io.vn/happy-international-womens-day
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PageList;
