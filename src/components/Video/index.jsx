import React from 'react';

const Video = () => {
  return (
    <div id='video' className='video-area section-big'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='video-content'>
              <a
                className='popup-youtube'
                href='http://www.youtube.com/watch?v=xtZE3sMv6lg'
              >
                <span className='lnr lnr-camera-video video-area' />
              </a>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='video-text'>
              <h2>
                Special Features <br /> Core App Features
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
