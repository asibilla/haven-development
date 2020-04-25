import { css, cx } from 'react-emotion';

const flexRow = css`
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    width: 100%;
`;

const flexGrow = (num) => css`
    flex-grow: ${num};
`;

const scalableImage = css`
    max-width: 100%;
    width: 100%;
`;

const unstyledList = css`
    list-style: none;
`;


export const globalStyles = css`
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol; 
    font-size: 14px;
`;

export const heroImage = cx(
    scalableImage
);

export const navItemsWrapper = cx(
    'nav-items',
    flexGrow(1),
);

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
