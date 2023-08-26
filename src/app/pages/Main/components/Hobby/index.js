import React from 'react';

const Hobby = () => {
  return (
    <section class='hobbies'>
      <div class='infor'>
        <div class='infor__box'>
          <h1 class='infor__title'>Career Goals</h1>
          <ul class='infor__list'>
            <li class='infor__item'>
              <p>Trở thành 1 Web Developers</p>
            </li>
            <li class='infor__item'>
              <p>Làm việc cho Google</p>
            </li>
            <li class='infor__item'>
              <p>Học hỏi hoàn thiện bản thân</p>
            </li>
          </ul>
        </div>
        <div class='infor__box'>
          <h1 class='infor__title'>Hobbies</h1>
          <ul class='infor__list'>
            <li class='infor__item'><p>Đọc sách</p></li>
            <li class='infor__item'><p>Xem phim</p></li>
            <li class='infor__item'><p>Chụp ảnh</p></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hobby;
