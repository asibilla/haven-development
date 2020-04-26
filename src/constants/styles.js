import { css, cx } from 'react-emotion';

const xxLargeBreakpoint = 1480;
const xLargeBreakpoint = 1200;
const largeBreakpoint = 1024;
const mediumBreakpoint = 768;

const xxLarge = `@media only screen and (min-width: ${xxLargeBreakpoint}px)`;
const xLarge = `@media only screen and (min-width: ${xLargeBreakpoint}px) and (max-width: ${
  xxLargeBreakpoint - 1
}px)`;
const large = `@media only screen and (min-width: ${largeBreakpoint}px) and (max-width: ${
    xLargeBreakpoint - 1
  }px)`;
const medium = `@media only screen and (min-width: ${mediumBreakpoint}px) and (max-width: ${
    largeBreakpoint - 1
  }px)`;
const small = `@media only screen and (max-width: ${mediumBreakpoint - 1}px)`;


const flexGrow = (num) => css`
  flex-grow: ${num};
`;

const fontSize = (num) => css`
  font-size: ${num}px;
`;

const positonRelative = css`
  position: relative;
`;

const scalableImage = css`
  max-width: 100%;
  width: 100%;import { styles } from '../../constants';

`;

const unstyledList = css`
  list-style: none;
`;

const flexRow = css`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
`;

export const heroH1 = css`
  text-transform: uppercase;
`;

export const heroH3 = css`
  margin-bottom: 4px;
  text-transform: uppercase;
`;

export const heroP = css`
  font-size: 16px;
  ${xLarge} {
    ${fontSize(18)}
  }
  ${xxLarge} {
    ${fontSize(20)}
  }
`;

export const heroImage = cx(scalableImage);

export const heroOverlay = css`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export const heroTextWrapper = css`
  bottom: 0px;
  color: #fff;
  padding: 45px;
  position: absolute;
  width: 60%;
  z-index: 2;
  ${small} {
      width: 90%;
  }
`;

export const heroWrapper = cx(
  positonRelative,
  css`
    background-position: center;
    background-size: cover;
    height: 416px;
    width: 100%;
    ${large} {
        height: 495px;
    }
    ${xLarge} {
        height: 625px;
    }
    ${xxLarge} {
        height: 645px;
    }
  `
);

export const navItemsWrapper = cx('nav-items', flexGrow(1));

export const navList = cx(
  flexRow,
  unstyledList,
  css`
    justify-content: flex-start;
    height: 94px;
    li {
      cursor: pointer;
      font-weight: 600;
      margin: 0 24px;
    }
  `
);

export const navWrapper = cx(
  'navigation',
  flexRow,
  css`
    padding: 15px 45px;
  `
);

export const siteHeader = css`
  width: 100%;
`;
