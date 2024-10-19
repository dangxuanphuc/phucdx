import React from 'react';
import './styles/index.scss';
import './styles/animate.min.css';

const Vwd = () => {
  return (
    <>
      <div className="vwd-screen full-container">
        <div className="main">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12">
                <img src={require("./icon.png")} className="logo slow-spin" alt='logo' />
                <h1 className="logo-title animated infinite pulse slow">Vietnam</h1>
                <h2 className="logo-title animated infinite pulse slow"><b>Women's</b> Day</h2>
                <br />
                <p className="logo-desc animated bounceInUp">"Where there is a Woman, there is Magic"</p>
                <br /><hr />
                <h3 className='footer-title'>Made with <a href="https://dangxuanphuc.io.vn/" target="_blank" rel="noopener noreferrer">Phuc Dang Xuan</a> 2024</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-vwd">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
              <path id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="#ae90d5" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="#bba3dc" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="#ae8fd6" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#936ac8 " />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Vwd;
