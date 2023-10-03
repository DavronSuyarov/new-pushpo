import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
const Navbar = () => {
  return (
    <div className='menu-area navbar-fixed-top'>
      <div className='container'>
        <div className='row'>
          {/* Navigation starts */}
          <div className='col-md-12'>
            <div className='mainmenu'>
              <div className='navbar navbar-nobg'>
                <div className='navbar-header'>
                  <a className='navbar-brand' href='index.html'>
                    <img src='assets/img/logo.png' alt='' />
                  </a>
                  <button
                    type='button'
                    className='navbar-toggle'
                    data-toggle='collapse'
                    data-target='.navbar-collapse'
                  >
                    <span className='sr-only'>Toggle navigation</span>
                    <span className='icon-bar' />
                    <span className='icon-bar' />
                    <span className='icon-bar' />
                  </button>
                </div>
                <div className='navbar-collapse collapse'>
                  <nav>
                    <ul className='nav navbar-nav navbar-right'>
                      <li>
                        <Link className='smooth_scroll' to='/'>
                          HOME
                        </Link>
                      </li>
                      <li>
                        <Link className='smooth_scroll' to='/#feature'>
                          FEATURES
                        </Link>
                      </li>
                      <li>
                        <Link className='smooth_scroll' to='/#screenshot'>
                          SCREENSHOTS
                        </Link>
                      </li>
                      <li>
                        <Link className='smooth_scroll' to='/#price'>
                          PRICE
                        </Link>
                      </li>
                      <li className='dropdown'>
                        <a
                          href='#'
                          className='dropdown-toggle'
                          data-toggle='dropdown'
                        >
                          BLOG <b className='caret' />
                        </a>
                        <ul className='dropdown-menu'>
                          <li>
                            <Link to='/blogdefault'>BLOG DEFAULT</Link>
                          </li>
                          <li>
                            <Link to='/bloggrid'>BLOG GRID VIEW</Link>
                          </li>
                          <li>
                            <Link to='/blogfull'>BLOG FULL WIDTH</Link>
                          </li>
                          <li>
                            <Link to='/singlepost'>SINGLE POST</Link>
                          </li>
                          <li>
                            <Link to='/notfound'>404 PAGE</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to='/contact'>CONTACT</Link>
                      </li>
                      <li>
                        <Link
                          className='btn hidden-xs hidden-sm'
                          to='/singlepost'
                        >
                          Download Now
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation ends */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
