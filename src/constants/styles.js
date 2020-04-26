import { css, cx } from 'react-emotion';

import { styleHelpers } from '../helpers';

const { flexGrow, fontSize, padding } = styleHelpers;

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
// const medium = `@media only screen and (min-width: ${mediumBreakpoint}px) and (max-width: ${
//     largeBreakpoint - 1
//   }px)`;
const small = `@media only screen and (max-width: ${mediumBreakpoint - 1}px)`;
const desktop = `@media only screen and (min-width: ${largeBreakpoint}px)`;
const mobile = `@media only screen and (max-width: ${largeBreakpoint - 1}px)`;

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

export const hpContent = css`
  ${desktop} {
    background-color: #fff;
    box-shadow: 0px 60px 31px -16px rgba(0, 0, 0, 0.61);
    margin-bottom: 475px;
    position: relative;
    z-index: 10;
  }
`;

export const hpSection = css`
  padding: 40px 45px;
  width: 100%;
`;

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
      &:hover {
        color: #a3a3a3;
      }
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

export const projectImage = css`
  background-position: center;
  background-size: cover;
  cursor: pointer;
  height: 100%;
  position: relative;
  transition: all 0.5s;
  width: 100%;
  &:before {
    content: '';
    background: rgb(2, 0, 36);
    background: linear-gradient(0deg, rgba(2, 0, 36, 1) 0%, rgba(255, 255, 255, 0) 35%);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  &:hover {
    transform: scale(1.2);
  }
`;

export const projectImageContainer = css`
  color: #fff;
  border-radius: 5px;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const projectImageRow = css`
  ${desktop} {
    ${flexRow}
  }
`;

export const projectImagePriceContainer = css`
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 18px;
  font-weight: 600;
  left: 0;
  padding: 10px 15px;
  position: absolute;
  top: 30px;
`;

export const projectImageTextContainer = css`
  bottom: 0;
  left: 0;
  padding: 12px;
  position: absolute;
  p {
    margin: 0;
  }
  .header {
    font-size: 16px;
    font-weight: 600;
  }
  .subhead {
    color: #a3a3a3;
  }
`;

export const projectImageWrapper = css`
  height: 375px;
  width: 100%;
  ${large} {
    ${padding(24, 'right')}
    height: 200px;
    width: 33%;
    &:last-child {
      ${padding(0, 'right')}
    }
  }
  ${xLarge} {
    ${padding(24, 'right')}
    height: 250px;
    width: 33%;
    &:last-child {
      ${padding(0, 'right')}
    }
  }
  ${xxLarge} {
    ${padding(24, 'right')}
    height: 290px;
    max-width: 490px;
    width: 33%;
    &:last-child {
      ${padding(0, 'right')}
    }
  }
  ${desktop} {
  }
  ${mobile} {
    ${padding(12, 'bottom')}
  }
`;

export const siteFooter = cx(
  flexRow,
  css`
    background-color: #000;
    color: #fff;
    height: 475px;
    width: 100%;
    ${desktop} {
      bottom: 0;
      left: 0;
      position: fixed;
      z-index: 1;
    }
  `
);

export const siteFooterQuickLinks = cx(
  unstyledList,
  css`
    margin: 0;
    padding: 0;
    li {
      cursor: pointer;
      font-size: 16px;
      margin-bottom: 4px;
      &:hover {
        text-decoration: underline;
      }
    }
  `
);

export const siteHeader = css`
  width: 100%;
`;
