import { css } from 'react-emotion';

export const flexGrow = (num) => css`
  flex-grow: ${num};
`;

export const fontSize = (num) => css`
  font-size: ${num}px;
`;

export const margin = (num, direction) => {
  if (!direction) {
    return `margin: ${num}px;`;
  }
  return `margin-${direction}: ${num}px;`;
};

export const padding = (num, direction) => {
  if (!direction) {
    return `padding: ${num}px;`;
  }
  return `padding-${direction}: ${num}px;`;
};
