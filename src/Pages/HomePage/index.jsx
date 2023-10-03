import React from 'react';
import Slider from '../../components/Slider';
import Hero from '../../components/Hero';
import Feature from '../../components/Feature';
import FeatureAre from '../../components/FeatuteAre';
import Video from '../../components/Video';
import Screenshot from '../../components/Screenshot';
import Testimonial from '../../components/Testimonial';
import Price from '../../components/Price';
import Action from '../../components/Action';
import Blog from '../../components/Blog';
import Subscribe from '../../components/Subscribe';
import HomeContact from '../../components/HomeContact';

const HomePage = () => {
  return (
    <>
      {/* Preloader starts*/}
      {/* <div id='preloader' /> */}
      {/* Preloader ends */}
      {/* Navigation area starts */}

      {/* Navigation area ends */}
      {/* Slider area starts */}
      <Slider />
      {/* Slider area ends */}
      {/* Hero boxes starts */}
      <Hero />
      {/* Hero boxes ends */}
      {/* Feature area starts */}
      <Feature />
      {/* Feature area ends */}
      {/* Feature area starts */}
      <FeatureAre />
      {/* Feature area ends */}
      {/* video area starts */}
      <Video />
      {/* video area ends */}
      {/* screenshot area starts */}
      <Screenshot />
      {/* screenshot area ends */}
      {/* Testimonial area starts */}
      <Testimonial />
      {/* Testimonial area ends */}
      {/* Price area starts */}
      <Price />
      {/* Price area ends */}
      {/* Action starts */}
      <Action />
      {/* Action area ends */}
      {/* Blog News area start */}
      <Blog />
      {/* News area ends */}
      {/* Subscribe area starts */}
      <Subscribe />
      {/* Subscribe area ends */}
      {/* Contact form area start */}
      <HomeContact />
      {/* Contact form area ends */}

      {/* Footer area starts */}
      {/* <Footer /> */}
      {/* Footer area ends */}
      {/* Latest jQuery */}
      {/* Plugin js */}
      {/* GOOGLE MAP JS */}
      {/* Main js*/}
    </>
  );
};

export default HomePage;
