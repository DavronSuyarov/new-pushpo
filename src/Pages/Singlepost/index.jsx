import React from 'react';

const Singlepost = () => {
  return (
    <div>
      <section className='page-title section-big text-center blog-gradient'>
        <div className='container'>
          <h2>Blog Details</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
      {/*Page title area ends */}
      <div className='text-center bredcrumb-area'>
        <div className='bredcrumb-box'>
          <a href='#slider'>Home</a>
          <span className='lnr lnr-arrow-right' />
          <a href='#blog-home'>Blog</a>
          <span className='lnr lnr-arrow-right' />
          <a href='#blog-home'>Blog details</a>
        </div>
      </div>
      {/*Blog full width area start */}
      <section className='container blog-full-width'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='blog-content'>
              <img src='assets/img/blog/full1.jpg' alt='' />
              <h2>Renovated Appartment</h2>
              <span className='lnr lnr-user' />
              <span>Mark James</span>
              <span className='lnr lnr-calendar-full' />
              <span>10 August,2018</span>
              <p className='blog-text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut li labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation. ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.Ut enim minim
                veniam, quis nostrud exercitation.Ullamco laboris nisi ut
                aliquip ex ea commodo consequat quis nostrud exercitation.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt uto labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation. ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim minim
                veniam, quis nostrud exercitation.
              </p>
              <img
                src='assets/img/blog/full3.jpg'
                alt=''
                className='blog-img'
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut li labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation. ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.Ut enim minim
                veniam, quis nostrud exercitation.Ullamco laboris nisi ut
                aliquip ex ea commodo consequat quis nostrud exercitation.
              </p>
            </div>
            {/*Blog full width area ends */}
            {/*Blog details pagination */}
            <div className='details-pagination text-center'>
              <a href='#'>
                <span className='lnr lnr-arrow-left' /> Prev Post
              </a>
              <a href='#'>
                Next Post <span className='lnr lnr-arrow-right' />
              </a>
            </div>
            {/* Comments --*/}
            <div className='comments'>
              <h3 className='text-center'>03 Comments</h3>
              <ul className='comments-tree'>
                <li>
                  <div className='comment-box'>
                    <div className='comment-content clearfix'>
                      <img src='assets/img/blog/comment1.jpg' alt='' />
                      <h4>Melvin Louis</h4>
                      <span>
                        About an hour ago - <strong>Reply</strong>
                      </span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation. ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </p>
                  </div>
                  <ul className='depth'>
                    <li>
                      <div className='comment-box'>
                        <div className='comment-content clearfix'>
                          <img src='assets/img/blog/comment2.jpg' alt='' />
                          <h4>Melvin Louis</h4>
                          <span>
                            About an hour ago - <strong>Reply</strong>
                          </span>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className='comment-box'>
                    <div className='comment-content clearfix'>
                      <img src='assets/img/blog/comment3.jpg' alt='' />
                      <h4>Melvin Louis</h4>
                      <span>
                        About an hour ago - <strong>Reply</strong>
                      </span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation. ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </p>
                  </div>
                </li>
              </ul>
              <form className='comment-form'>
                <h3 className='text-center'>Post a Comments</h3>
                <div className='row'>
                  <div className='col-md-6 form-group'>
                    <input
                      type='text'
                      className='form-control'
                      name='neme'
                      placeholder='Your name'
                    />
                  </div>
                  <div className='col-md-6 form-group'>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      placeholder='Email address'
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12 form-group'>
                    <input
                      type='text'
                      className='form-control'
                      name='subject'
                      placeholder='Subject'
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12 form-group'>
                    <textarea
                      cols={10}
                      rows={7}
                      className='form-control'
                      placeholder='Your message'
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12 text-center'>
                    <button className='form-btn blog-gradient'>
                      Submit Comment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='col-md-4'>
            {/* widget-search */}
            <div className='widget widget-search'>
              <form name='search' method='get' action='#'>
                <input type='search' name='search' placeholder='Search blog' />
                <button className='blog-gradient'>
                  <i className='fa fa-search' />
                </button>
              </form>
            </div>
            {/* widget-box */}
            <div className='widget widget-box'>
              <img src='assets/img/blog/box.jpg' alt='' />
              <h3>Renovated Appartment</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
              {/* Blog social*/}
              <div className='blog-social'>
                <ul>
                  <li>
                    <a href='#' className='fa fa-facebook' title='Facebook' />
                  </li>
                  <li>
                    <a href='#' className='fa fa-twitter' title='Twitter' />
                  </li>
                  <li>
                    <a href='#' className='fa fa-pinterest' title='Pinterest' />
                  </li>
                  <li>
                    <a href='#' className='fa fa-linkedin' title='Linkedin' />
                  </li>
                </ul>
              </div>
            </div>
            {/* widget recent post */}
            <div className='widget widget-recent-post'>
              <h3>Recent Post</h3>
              <div className='recent-post clearfix'>
                <img src='assets/img/blog/recent1.jpg' alt='' />
                <a href='#'>
                  <h4>Renovated Appartment</h4>
                </a>
                <span className='lnr lnr-user' />
                <span>Mark James</span>
                <span className='lnr lnr-calendar-full' />
                <span>05 hours ago</span>
              </div>
              <div className='recent-post clearfix'>
                <img src='assets/img/blog/recent2.jpg' alt='' />
                <a href='#'>
                  <h4>Renovated Appartment</h4>
                </a>
                <span className='lnr lnr-user' />
                <span>Mark James</span>
                <span className='lnr lnr-calendar-full' />
                <span>05 hours ago</span>
              </div>
              <div className='recent-post clearfix'>
                <img src='assets/img/blog/recent3.jpg' alt='' />
                <a href='#'>
                  <h4>Renovated Appartment</h4>
                </a>
                <span className='lnr lnr-user' />
                <span>Mark James</span>
                <span className='lnr lnr-calendar-full' />
                <span>05 hours ago</span>
              </div>
              <div className='recent-post clearfix'>
                <img src='assets/img/blog/recent4.jpg' alt='' />
                <a href='#'>
                  <h4>Renovated Appartment</h4>
                </a>
                <span className='lnr lnr-user' />
                <span>Mark James</span>
                <span className='lnr lnr-calendar-full' />
                <span>05 hours ago</span>
              </div>
            </div>
            {/* widget image box */}
            <div className='widget widget-img-box'>
              <img src='assets/img/blog/ad.jpg' alt='' />
            </div>
            {/* widget post categories */}
            <div className='widget widget-post-categories'>
              <h3>Post Categories</h3>
              <ul className='post-categorie'>
                <li>
                  <a href='#'>Art &amp; Culture(25)</a>
                </li>
                <li>
                  <a href='#'>Beauty &amp; Fashion(36)</a>
                </li>
                <li>
                  <a href='#'>Sports(22)</a>
                </li>
                <li>
                  <a href='#'>Lifestyle(20)</a>
                </li>
                <li>
                  <a href='#'>Technology(50)</a>
                </li>
                <li>
                  <a href='#'>Economics(33)</a>
                </li>
              </ul>
            </div>
            {/* widget post tags */}
            <div className='widget widget-tags'>
              <h3>Post Tags</h3>
              <ul className='post-tags'>
                <li>
                  <a href='#'>Art &amp; Culture</a>
                </li>
                <li>
                  <a href='#'>Beauty &amp; Fashion</a>
                </li>
                <li>
                  <a href='#'>Sports</a>
                </li>
                <li>
                  <a href='#'>Lifestyle</a>
                </li>
                <li>
                  <a href='#'>Technology</a>
                </li>
                <li>
                  <a href='#'>Art &amp; Culture</a>
                </li>
                <li>
                  <a href='#'>Beauty &amp; Fashion</a>
                </li>
                <li>
                  <a href='#'>Sports</a>
                </li>
                <li>
                  <a href='#'>Lifestyle</a>
                </li>
                <li>
                  <a href='#'>Technology</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Singlepost;
