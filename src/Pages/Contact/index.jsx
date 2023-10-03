import React from 'react';

const Contact = () => {
  return (
    <div>
      <section className='page-title section-big text-center blog-gradient'>
        <div className='container'>
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
      {/*Page title area ends */}
      <div className='text-center bredcrumb-area'>
        <div className='bredcrumb-box'>
          <a href='#'>Home</a>
          <span className='lnr lnr-arrow-right' />
          <a href='#'>Contact</a>
        </div>
      </div>
      `
      <div className='container contact'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='section-title text-center'>
              <h2>Keep in Touch</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='contact-box'>
              <span className='fa fa-home' />
              <p>1502 N Elm St, Fainmont, MN,</p>
              <p>56031, United States</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='contact-box'>
              <span className='fa fa-headphones' />
              <p>+00 123-456-789</p>
              <p>+00 123-456-789</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='contact-box'>
              <span className='fa fa-envelope-o' />
              <p>
                <a href='mailto:email@yourdomain.com'>email@yourdomain.com</a>
              </p>
              <p>
                <a href='http://www.yourdomain.com'>support@yourdomain.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='contact-form-area sec-bot-pad'>
        <div className='container'>
          <div className='map clearfix'>
            {/* Google Map starts*/}
            <div className='col-md-6'>
              <div id='contactgoogleMap' />
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
    </div>
  );
};

export default Contact;
