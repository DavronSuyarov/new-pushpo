import React from 'react';

const Action = () => {
  return (
    <section id='action' className='action-area section-big'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-5 col-sm-5'>
            <div className='action-img'>
              <img src='assets/img/cta/cta.png' alt='' />
            </div>
          </div>
          <div className='col-lg-6 col-md-7 col-sm-7'>
            <div className='content-box'>
              <h2>
                Get the App from your <br /> phone's platform
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt labore dolore magna aliqua.
              </p>
              <div className='btn-set'>
                <a href className='btn btn-black'>
                  <i className='fa fa-android' />
                  <div className='btn-text'>
                    <h3>Download</h3>
                    <p>it from Playstore</p>
                  </div>
                </a>
                <a href className='btn btn-white'>
                  <i className='fa fa-apple' />
                  <div className='btn-text'>
                    <h3>Download</h3>
                    <p>it from Appstore</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Action;
