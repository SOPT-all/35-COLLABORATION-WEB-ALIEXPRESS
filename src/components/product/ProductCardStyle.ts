import { Theme, css } from '@emotion/react';

export const ProductContainer = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 20.2rem;

    background-color: ${theme.colors.white};
    border-radius: 12px;
`;

export const ImageContainer = css`
    width: 20.2rem;
    height: 20.2rem;
    overflow: hidden;

    border-radius: 12px;
`;

export const ProductInfoContainer = css`
    display: flex;
    flex-direction: column;
`;

export const ProductNameStyle = (theme: Theme) => css`
    ${theme.fonts.kor.bodySemibold13}
    color: ${theme.colors.gray9}
`;

export const PriceContainer = css`
    display: flex;
`;

export const ProductPriceStyle = (theme: Theme) => css`
    ${theme.fonts.eng.titleBold18}
    color: ${theme.colors.gray9}
`;

export const ProductDiscountStyle = (theme: Theme) => css`
    ${theme.fonts.eng.titleBold18}
    color: ${theme.colors.brandPrimary}
`;