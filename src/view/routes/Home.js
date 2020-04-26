import React from 'react';

import { HeroImage, HPSection } from '../components';

const Home = () => {
  return (
    <div data-testid="hp-wrapper">
      <HPSection fullWidth>
        <HeroImage
          alt="Haven Development HP Hero"
          header="Haven Development"
          imgPath="images/hp-hero.jpeg"
          subhead="Welcome Home"
          text="We bring together a combined 45 years of development experience within multiple facets of the home building industry in the Northen California market."
        />
      </HPSection>
      <HPSection>
        <h2>Our Projects</h2>
      </HPSection>
    </div>
  );
};

export default Home;
