import React from 'react';

import { styles } from '../../constants';

const { heroImage } = styles;

const Home = () => {
  return (
    <div data-testid="hp-wrapper">
      <img className={heroImage} src="images/hp-hero.jpeg" alt="Haven Development HP Hero" />
    </div>
  );
};

export default Home;
