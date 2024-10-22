import React from 'react';
import WeAreOurSafety from '../WeAreOurSafety/WeAreOurSafety';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import OurClint from '../OurClint/OurClint';
import KeppInTouce from '../KeppInTouce/KeppInTouce';
import MainSlider from '../MainSlider/MainSlider';
import GoogleMaps from '../GoogleMap/GoogleMap';

const Home = () => {
  return (
    <div>
      <div id="Home">
        <MainSlider/>
      </div>
      <div >
        <WeAreOurSafety />
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="services">
        <Services />
      </div>
      <div>
        <OurClint />
      </div>
      <div>
        <KeppInTouce />
      </div>
      <div>
        <GoogleMaps/>
      </div>
    </div>
  );
}

export default Home;
