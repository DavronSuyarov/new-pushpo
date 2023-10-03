import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='footer-widget-area section-big'>
        <div className='container'>
          <div className='row'>
            {/* Footer Widget */}
            <div className='col-md-3'>
              <div className='footer-widget'>
                <h3>About Pushpo</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris{' '}
                </p>
              </div>
            </div>
            {/* Footer Widget */}
            <div className='col-md-3'>
              <div className='footer-widget'>
                <h3>Some Quick Links</h3>
                <ul>
                  <li>
                    <a href='#'>Help Center</a>
                  </li>
                  <li>
                    <a href='#'>Privacy Policy</a>
                  </li>
                  <li>
                    <a href='#'>Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href='#'>Hot Deals</a>
                  </li>
                  <li>
                    <a href='#'>About Us</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Footer Widget */}
            <div className='col-md-3'>
              <div className='footer-widget'>
                <h3>Company Essentials</h3>
                <ul>
                  <li>
                    <a href='#'>Help Center</a>
                  </li>
                  <li>
                    <a href='#'>Privacy Policy</a>
                  </li>
                  <li>
                    <a href='#'>Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href='#'>Hot Deals</a>
                  </li>
                  <li>
                    <a href='#'>About Us</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Footer Widget */}
            <div className='col-md-3'>
              <div className='footer-widget'>
                <h3>About Pushpo</h3>
                <div className='address'>
                  <div className='address-box clearfix'>
                    <span className='lnr lnr-home' />
                    <p>1502 N Elm St, Fairmont, MN 56031 United States</p>
                  </div>
                  <div className='address-box clearfix'>
                    <span className='lnr lnr-phone' />
                    <p>
                      <a href='tel:015110022'>+00 123-456-789</a>
                      <br />
                      <a href='tel:015110022'>+00 123-456-789</a>
                    </p>
                  </div>
                  <div className='address-box clearfix'>
                    <span className='lnr lnr-envelope' />
                    <p>
                      <a href='mailto:email@yourdomain.com'>
                        email@yourdomain.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='clearfix' />
      {/* Footer Bottom area */}
      <div className='footer-bottom-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <p>
                Copyright © 2018. All rights reserved to{' '}
                <a href='#'>CodersPoint</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
