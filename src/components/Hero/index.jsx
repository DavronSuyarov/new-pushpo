import React from 'react';

const Hero = () => {
  return (
    <section className='hero-box-area section-big'>
      <div className='container'>
        <div className='row'>
          {/* Hero box */}
          <div className='col-md-4 col-sm-6'>
            <div className='hero-box'>
              <span className='lnr lnr-lock' />
              <h3>Instant Setup</h3>
              <p>
                Lorem ipsum dolor sit amet, consect eturys adipisicing elit, sed
                do eiusmod tempor et dolore magna aliqua. nisiut aliquip nisiut
                aliquip exea comodo aliquip.
              </p>
            </div>
          </div>
          {/* Hero box */}
          <div className='col-md-4 col-sm-6'>
            <div className='hero-box'>
              <span className='lnr lnr-flag' />
              <h3>Fast Loading</h3>
              <p>
                Lorem ipsum dolor sit amet, consect eturys adipisicing elit, sed
                do eiusmod tempor et dolore magna aliqua. nisiut aliquip nisiut
                aliquip exea comodo aliquip.
              </p>
            </div>
          </div>
          {/* Hero box */}
          <div className='col-md-4 col-sm-6'>
            <div className='hero-box'>
              <span className='lnr lnr-screen' />
              <h3>Great Support</h3>
              <p>
                Lorem ipsum dolor sit amet, consect eturys adipisicing elit, sed
                do eiusmod tempor et dolore magna aliqua. nisiut aliquip nisiut
                aliquip exea comodo aliquip.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
