import React from 'react';

const Subscribe = () => {
  return (
    <section id='subscribe' className='subscribe-area section-big'>
      <div className='container'>
        <div className='subscribe-box'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='subscribe-text'>
                <h2>Subscribe Newsletter</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                  do eiusmod lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className='col-md-6'>
              <form id='mc-form' className='mc-form'>
                <div className='newsletter-form'>
                  <input
                    type='email'
                    autoComplete='off'
                    id='mc-email'
                    placeholder='Enter email address'
                    className='form-control'
                    name='EMAIL'
                  />
                  <button className='btn mc-submit' type='submit'>
                    Subscribe
                  </button>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
                    do eiusmod
                  </p>
                  <div className='clearfix' />
                  {/* mailchimp-alerts Start */}
                  <div className='mailchimp-alerts'>
                    <div className='mailchimp-submitting' />
                    {/* mailchimp-submitting end */}
                    <div className='mailchimp-success' />
                    {/* mailchimp-success end */}
                    <div className='mailchimp-error' />
                    {/* mailchimp-error end */}
                  </div>
                  {/* mailchimp-alerts end */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
