import React from 'react';
import { css, cx } from 'react-emotion';

import { styles } from '../../constants';

const { projectImage, projectImageContainer, projectImageWrapper } = styles;

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
      </div>
    </div>
  );
};

export default ProjectImage;
