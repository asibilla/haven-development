import React from 'react';

import { styles } from '../../constants';
import { HeroImage, HPSection, ProjectImage } from '../components';

const { hpContent, projectImageRow } = styles;

const Home = () => {
  return (
    <div data-testid="hp-wrapper">
      <div className={hpContent}>
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
          <div className={projectImageRow}>
            <ProjectImage imgPath="images/larkey-plan-1.jpg" />
            <ProjectImage imgPath="images/larkey-plan-2.jpg" />
            <ProjectImage imgPath="images/larkey-plan-3.jpg" />
          </div>
        </HPSection>
      </div>
    </div>
  );
};

export default Home;
