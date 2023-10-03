import React from 'react';

const HomeContact = () => {
  return (
    <section id='contact' className='contact-form-area section-big'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <div className='section-title'>
              <h2>Keep in Touch</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='contact-form-area'>
        <div className='container'>
          <div className='map clearfix'>
            {/* Google Map starts*/}
            <div className='col-md-6'>
              <div className='map-area'>
                <div id='contactgoogleMap' />
              </div>
            </div>
            {/* Google Map ends */}
            <div className='col-md-6'>
              <div className='contact-form clearfix'>
                <form
                  id='ajax-contact'
                  action='assets/mailer.php.html'
                  method='post'
                >
                  <div className='form-group in_name col-md-12'>
                    <input
                      type='email'
                      name='email'
                      className='form-control'
                      id='name'
                      placeholder='Email'
                      required='required'
                    />
                  </div>
                  <div className='form-group in_email col-md-12'>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      id='email'
                      placeholder='Your name'
                      required='required'
                    />
                  </div>
                  <div className='form-group in_name col-md-12'>
                    <input
                      type='text'
                      name='subject'
                      className='form-control'
                      id='subject'
                      placeholder='Subject'
                      required='required'
                    />
                  </div>
                  <div className='form-group in_message col-md-12'>
                    <textarea
                      rows={6}
                      cols={8}
                      name='message'
                      className='form-control'
                      id='message'
                      placeholder='Your message'
                      required='required'
                      defaultValue={''}
                    />
                  </div>
                  <div className='actions clearfix'>
                    <input
                      type='submit'
                      defaultValue='Send Message'
                      name='submit'
                      id='submitButton'
                      className='form-btn blog-gradient'
                      title='Submit Your Message!'
                    />
                  </div>
                </form>
                {/* Submition status */}
                <div id='form-messages' />
              </div>
              {/* Contact form ends*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
