import React from 'react';

const Timeline = () => {
  return (
    <section className='timeline' id='timeline'>
      <h1 className='title'>Timeline</h1>
      <div className='timeline__timeline'>
        <ul className='timeline__list'>
          <li className='timeline__item'>
            <div className='timeline__content'>
              <h3 className='timeline__title'>Phan Boi Chau Secondary School</h3>
              <p className='timeline__decription'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis nunc dapibus, semper arcu malesuada, porttitor nisl.
              </p>
              <div className='timeline__time'>08/2009 - 06/2013</div>
            </div>
          </li>
          <li className='timeline__item'>
            <div className='timeline__content'>
              <h3 className='timeline__title'>Tu Ky High School</h3>
              <p className='timeline__decription'>
                Duis at sollicitudin lectus. Suspendisse massa augue, tincidunt eu lectus sed, posuere accumsan felis.
              </p>
              <div className='timeline__time'>08/2013 - 06/2016</div>
            </div>
          </li>
          <li className='timeline__item'>
            <div className='timeline__content'>
              <h3 className='timeline__title'>VNU University of Science</h3>
              <p className='timeline__decription'>
                Integer et scelerisque lectus. Suspendisse feugiat commodo erat a finibus. Aenean sed dictum augue, vitae semper lacus.
              </p>
              <div className='timeline__time'>09/2016 - 07/2020</div>
            </div>
          </li>
          <li className='timeline__item'>
            <div className='timeline__content'>
              <h3 className='timeline__title'>Work with Joy Vietnam</h3>
              <p className='timeline__decription'>
                Nam non justo sollicitudin, mattis libero tincidunt, elementum lorem. Maecenas at turpis iaculis, bibendum velit a, mollis nulla. Cras elementum iaculis ornare.
              </p>
              <div className='timeline__time'>12/2020 - 04/2022</div>
            </div>
          </li>
          <li className='timeline__item'>
            <div className='timeline__content'>
              <h3 className='timeline__title'>Vareal Vietnam</h3>
              <p className='timeline__decription'>
                Fusce imperdiet pretium velit, at volutpat ipsum egestas at. Donec id nulla orci. Nunc dignissim malesuada gravida. Sed pulvinar facilisis magna ac imperdiet.
              </p>
              <div className='timeline__time'>06/2022 - Present</div>
            </div>
          </li>
          <div style={{ clear: 'both' }}></div>
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
