import React from 'react';

const Blog = () => {
  return (
    <section id='blog' className='news-area section-big'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <div className='section-title'>
              <h2>Latest Blog News</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt labore dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 col-sm-6'>
            <div className='news-box clearfix'>
              <img src='assets/img/news/news-1.png' alt='' />
              <h3>Renovated Appartment</h3>
              <span className='lnr lnr-user' />
              <span>Mark James</span>
              <span className='lnr lnr-calendar-full' />
              <span>10 Aug, 2018</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
          <div className='col-md-6 col-sm-6'>
            <div className='news-box clearfix'>
              <img src='assets/img/news/news-2.png' alt='' />
              <h3>Renovated Appartment</h3>
              <span className='lnr lnr-user' />
              <span>Mark James</span>
              <span className='lnr lnr-calendar-full' />
              <span>10 Aug, 2018</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
