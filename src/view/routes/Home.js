import React from 'react';


import { styles } from '../../constants';

const { heroImage } = styles;


const Home = () => {
  return (
    <div>
      <img className={heroImage} src="images/hp-hero.jpeg" />
    </div>
  );
};

export default Home;
