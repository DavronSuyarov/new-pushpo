import React from 'react';

const Notfound = () => {
  return (
    <div>
      <section className='page-title section-big text-center blog-gradient'>
        <div className='container'>
          <h2>404</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
      <section className='error-page section-big'>
        <div className='container'>
          <div className='row d-flex'>
            <div className='col-md-6 col-sm-12'>
              <div className='error-img'>
                <img src='assets/img/404_Error.png' alt='' />
              </div>
            </div>
            <div className='col-md-6 col-sm-12'>
              <div className='error-text'>
                <h2>
                  Ooops !<br />
                  The page you are looking for
                  <br />
                  not found
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                  do eiusmod lorem ipsum adipisicing elit sed do eiusmod lorem
                  ipsum dolor sit amet.
                </p>
                <button className='btn blog-gradient'>Back to Home</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notfound;
