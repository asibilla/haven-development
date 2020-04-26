import { string } from 'prop-types';
import React from 'react';
import { css, cx } from 'react-emotion';

import { styles } from '../../constants';

const { heroH1, heroH3, heroP, heroImage, heroOverlay, heroTextWrapper, heroWrapper } = styles;

const HeroImage = ({ alt, header, imgPath, subhead, text }) => {
    const bgiStyle = css`
        background-image: url(${imgPath});
    `;

  return (
    <div className={cx(heroWrapper, bgiStyle)}>
      {header && <div className={heroOverlay} />}
      {header && (
        <div className={heroTextWrapper}>
          {subhead && <h3 className={heroH3}>{subhead}</h3>}
          <h1 className={heroH1}>{header}</h1>
          {text && <p className={heroP}>{text}</p>}
        </div>
      )}
    </div>
  );
};

HeroImage.defaultProps = {
  header: '',
  subhead: '',
  text: '',
};

HeroImage.propTypes = {
  alt: string.isRequired,
  header: string,
  imgPath: string.isRequired,
  subhead: string,
  text: string,
};

export default HeroImage;
