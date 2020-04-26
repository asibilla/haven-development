import { bool, node } from 'prop-types';
import React from 'react';
import { cx, css } from 'react-emotion';

import { styles } from '../../constants';
import { styleHelpers } from '../../helpers';

const { hpSection } = styles;
const { padding } = styleHelpers;

const HPSection = ({ children, fullWidth }) => {
  const sectionPadding = fullWidth
    ? css`
        ${padding(0)}
      `
    : '';

  return <section className={cx(hpSection, sectionPadding)}>{children}</section>;
};

HPSection.defaultProps = {
  fullWidth: false,
};

HPSection.propTypes = {
  children: node.isRequired,
  fullWidth: bool,
};

export default HPSection;
