import { string } from 'prop-types';
import React from 'react';
import { css, cx } from 'react-emotion';

import { styles } from '../../constants';

const {
  projectImage,
  projectImageContainer,
  projectImagePriceContainer,
  projectImageTextContainer,
  projectImageWrapper,
} = styles;

const ProjectImage = ({ header, imgPath, price, subhead, text }) => {
  const imageStyle = cx(
    projectImage,
    css`
      background-image: url(${imgPath});
    `
  );
  return (
    <div className={projectImageWrapper}>
      <div className={projectImageContainer}>
        <div className={imageStyle} />
        <div className={projectImageTextContainer}>
          <p className="header">{header}</p>
          {subhead && <p className="subhead">{subhead}</p>}
          {text && <p>{text}</p>}
        </div>
        {price && <div className={projectImagePriceContainer}>{price}</div>}
      </div>
    </div>
  );
};

ProjectImage.defaultProps = {
  header: '',
  price: '',
  subhead: '',
  text: '',
};

ProjectImage.propTypes = {
  header: string,
  imgPath: string.isRequired,
  price: string,
  subhead: string,
  text: string,
};

export default ProjectImage;
