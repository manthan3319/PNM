import React from 'react';
import WeAreOurSafety from '../WeAreOurSafety/WeAreOurSafety';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import OurClint from '../OurClint/OurClint';
import KeppInTouce from '../KeppInTouce/KeppInTouce';

const Home = () => {
  return (
    <div>
      <div id="Home">
        <WeAreOurSafety />
      </div>
      <div id="about-us"> {/* About Section ID */}
        <AboutUs />
      </div>
      <div id="services"> {/* Services Section ID */}
        <Services />
      </div>
      <div>
        <OurClint />
      </div>
      <div>
        <KeppInTouce />
      </div>
    </div>
  );
}

export default Home;
