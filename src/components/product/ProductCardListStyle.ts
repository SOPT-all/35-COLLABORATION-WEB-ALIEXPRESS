import { Theme, css } from '@emotion/react';

export const relatedProductsContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 136.6rem;
`;

export const relatedProductsHeaderStyle = css`
    display: flex;
    align-items: center;
    width: 127.7rem;
    height: 4.6rem;
`;

export const relatedProductsStyle = (theme: Theme) => css`
    ${theme.fonts.kor.titleBold20};
`;

export const productListContainer = css`
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
    width: 127.7rem;
`;