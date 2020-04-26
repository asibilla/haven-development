import React from 'react';

import { styles } from '../../constants';

const { siteFooter, siteFooterQuickLinks } = styles;

const SiteFooter = () => {
  return (
    <footer className={siteFooter}>
      <div>
        <h3>Quick Links</h3>
        <ul className={siteFooterQuickLinks}>
          <li>Home</li>
          <li>Our Projects</li>
          <li>About</li>
          <li>Reviews</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
};

export default SiteFooter;
