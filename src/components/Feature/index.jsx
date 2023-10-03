import React from 'react';

const Feature = () => {
  return (
    <section id='feature' className='feature-area grey section-big'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-sm-6'>
            <div className='feture-img'>
              <img src='assets/img/feature/ft-1.png' alt='' />
            </div>
          </div>
          <div className='col-md-6 col-sm-6'>
            <div className='feature-content-one'>
              <h2>
                Special Features <br /> Core App Features
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
