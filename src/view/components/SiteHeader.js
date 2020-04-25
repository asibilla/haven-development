import React from 'react';

import { styles } from '../../constants';

const { navItemsWrapper, navList, navWrapper, siteHeader } = styles;

const SiteHeader = () => {
  return (
    <header className={siteHeader}>
      <div className={navWrapper}>
        <div>
          <img src="images/haven-logo.jpg" alt="Haven Development Logo" />
        </div>

        <div className={navItemsWrapper}>
          <nav>
            <ul className={navList}>
              <li>About</li>
              <li>Our Projects</li>
              <li>Reviews</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
