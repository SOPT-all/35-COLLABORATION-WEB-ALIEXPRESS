import { Theme, css } from '@emotion/react';

export const productContainer = (theme: Theme) => css`

    position: relative;
    width: 20.2rem;
    height: fit-content;
    
    background-color: ${theme.colors.white};
    border-radius: 12px;

    &:hover {
        z-index: 1;

        box-shadow: 0 6px 12px 0 rgb(0 0 0 / 12%), 0 4px 8px 0 rgb(0 0 0 / 8%), 0 0 4px 0 rgb(0 0 0 / 8%);
        transform: scale(1.13, 1.065);
        transform-origin: top center; /* 상단의 시작 지점을 고정 */
        border-radius: 16px;
    }
    
    &:hover > * {
        transform: scale(0.87, 0.935); /* 내부 요소 축소 */
    }
`;

export const productWrapper = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    width: 20.2rem;
    
    background-color: ${theme.colors.white};
    border-radius: 12px;
`;

export const imageContainer = css`
    position: relative;
    width: 20.2rem;
    height: 20.2rem;
    overflow: hidden;

    border-radius: 12px;
`;

export const imageStyle = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const productInfoContainer = css`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const productInfoWrapper = css`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const productNameStyle = (theme: Theme) => css`
    ${theme.fonts.eng.bodyMedium13};
    color: ${theme.colors.gray9};
`;

export const priceContainer = css`
    display: flex;
`;

export const productWonStyle = (theme: Theme) => css`
    ${theme.fonts.eng.captionBold10};
    display: flex;
    align-items: end;

    color: ${theme.colors.gray9};
`;

export const productPriceStyle = (theme: Theme) => css`
    ${theme.fonts.eng.titleBold18};
    color: ${theme.colors.gray9};
`;

export const productDiscountStyle = (theme: Theme) => css`
    ${theme.fonts.eng.titleBold18};
    margin-left: 0.5rem;

    color: ${theme.colors.brandPrimary};
`;

export const tagContainer = css`
    display: flex;
    gap: 10px;
`;

export const couponBtnStyle = (theme: Theme) => css`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 2.9rem;
    padding: 0.8rem 1.2rem;


    color: ${theme.colors.gray9};
    ${theme.fonts.kor.captionBold11};


    background-color: ${theme.colors.gray2};
    border: 0;
    border-radius: 12px;
`