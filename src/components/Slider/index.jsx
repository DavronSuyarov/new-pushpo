import React from 'react';

const Slider = () => {
  return (
    <div>
      <section id='slider' className='slider-area'>
        <div className='container'>
          <div className='row d-flex'>
            {/* slider text */}
            <div className='col-md-6 col-sm-12 col-xs-12'>
              <div className='slider-text clearfix'>
                <h1>
                  One Simple App <br /> You Can Find Anything
                </h1>
                <p>
                  Serenity has taken posse ssion of mine entire soul posse ssion
                  of my entire soul which I enjoy with my whole heart. Serenity
                  has taken posse ssion of mine has taken possession of mine
                  entire soul possession entire soul heart.
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
            {/* slider image */}
            <div className='col-md-6 col-sm-12 col-xs-12 slider-img'>
              <img src='assets/img/slider/1.png' alt='' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
