import React from 'react';

import { HeroImage } from '../components';

const Home = () => {
  return (
    <div data-testid="hp-wrapper">
      <HeroImage
        alt="Haven Development HP Hero"
        header="Haven Development"
        imgPath="images/hp-hero.jpeg"
        subhead="Welcome Home"
        text="We bring together a combined 45 years of development experience within multiple facets of the home building industry in the Northen California market."
      />
    </div>
  );
};

export default Home;
