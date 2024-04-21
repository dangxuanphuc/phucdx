import React from 'react';

const Contact = () => {
  return (
    <div className='section px-2 px-lg-4 pb-4 pt-5 mb-5' id='contact'>
      <div className='container-narrow'>
        <div className='text-center mb-5'>
          <h2 className='marker marker-center'>Contact Me</h2>
        </div>
        <div className='row'>
          <div className='col-md-6' data-aos='zoom-in' data-aos-delay='100'>
            <div className='bg-light my-2 p-3 pt-2'>
              <form action='https://formspree.io/f/xzbnyggv' method='POST'>
                <div className='form-group my-2'>
                  <label htmlFor='name' className='form-label fw-bolder'>
                    Name
                  </label>
                  <input
                    className='form-control'
                    type='text'
                    id='name'
                    name='name'
                    required
                  />
                </div>
                <div className='form-group my-2'>
                  <label htmlFor='email' className='form-label fw-bolder'>
                    Email
                  </label>
                  <input
                    className='form-control'
                    type='email'
                    id='email'
                    name='_replyto'
                    required
                  />
                </div>
                <div className='form-group my-2'>
                  <label htmlFor='message' className='form-label fw-bolder'>
                    Message
                  </label>
                  <textarea
                    className='form-control'
                    style={{ resize: 'none' }}
                    id='message'
                    name='message'
                    rows='4'
                    required
                  ></textarea>
                </div>
                <button className='btn btn-primary mt-2' type='submit'>
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-6' data-aos='fade-left' data-aos-delay='300'>
            <div className='mt-3 px-1'>
              <div className='h5'>Let’s talk how I can help you!</div>
              <p>Get in touch through my skype or linkedin account.</p>
              <p>See you!</p>
            </div>
            {/* <div className="mt-53 px-1">
              <div className="row">
                <div className="col-sm-2">
                  <div className="pb-1">Email:</div>
                </div>
                <div className="col-sm-10">
                  <div className="pb-1 fw-bolder">phucdx@gmail.com</div>
                </div>
                <div className="col-sm-2">
                  <div className="pb-1">Skype:</div>
                </div>
                <div className="col-sm-10">
                  <div className="pb-1 fw-bolder">username@skype.com</div>
                </div>
                <div className="col-sm-2">
                  <div className="pb-1">Phone:</div>
                </div>
                <div className="col-sm-10">
                  <div className="pb-1 fw-bolder">+849123456789</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
