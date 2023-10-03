import React from 'react';

const Price = () => {
  return (
    <section id='price' className='pricing-area section-big'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <div className='section-title'>
              <h2>Choose Your Pricing Plan</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          {/* Pricing Table */}
          <div className='col-md-4 col-sm-6'>
            <div className='price-item' data-connectors={1}>
              <div className='info'>
                <h3>Personal</h3>
                <p className='price'>$19.00</p>
              </div>
              <div className='features'>
                <p>For Individual Uses</p>
                <ul>
                  <li>15 Users</li>
                  <li>10 Projects</li>
                  <li>30 GB of Storage</li>
                  <li>6 Workspeace</li>
                  <li>Enhanced Security</li>
                </ul>
              </div>
              <a className='btn' href='#'>
                Start Trial
              </a>
            </div>
          </div>
          {/* Pricing Table */}
          <div className='col-md-4 col-sm-6'>
            <div className='price-item featured' data-connectors={1}>
              <div className='info'>
                <h3>Professional</h3>
                <p className='price'>$49.00</p>
              </div>
              <div className='features'>
                <p>For Individual Uses</p>
                <ul>
                  <li>15 Users</li>
                  <li>10 Projects</li>
                  <li>30 GB of Storage</li>
                  <li>6 Workspeace</li>
                  <li>Enhanced Security</li>
                </ul>
              </div>
              <a className='btn' href='#'>
                Start Trial
              </a>
            </div>
          </div>
          {/* Pricing Table */}
          <div className='col-md-4 col-sm-6'>
            <div className='price-item' data-connectors={1}>
              <div className='info'>
                <h3>Enterprise</h3>
                <p className='price'>$99.00</p>
              </div>
              <div className='features'>
                <p>For Individual Uses</p>
                <ul>
                  <li>15 Users</li>
                  <li>10 Projects</li>
                  <li>30 GB of Storage</li>
                  <li>6 Workspeace</li>
                  <li>Enhanced Security</li>
                </ul>
              </div>
              <a className='btn' href='#'>
                Start Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
