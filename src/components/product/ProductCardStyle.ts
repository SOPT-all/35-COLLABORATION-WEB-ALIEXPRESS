import { Theme, css } from '@emotion/react';

export const productContainer = (theme: Theme, width: string, hoverLarge: boolean) => css`
	position: relative;
	width: ${width};
	height: fit-content;

	background-color: ${theme.colors.white};
	border-radius: ${hoverLarge ? '12px' : '16px'};

	&:hover {
		z-index: 1;

		box-shadow:
			0 6px 12px 0 rgb(0 0 0 / 12%),
			0 4px 8px 0 rgb(0 0 0 / 8%),
			0 0 4px 0 rgb(0 0 0 / 8%);
		${hoverLarge
			? `
            transform: scale(1.13, 1.065);
            transform-origin: top center; /* 상단의 시작 지점을 고정 */
            border-radius: 16px;
            `
			: `
            padding-bottom: 1.6rem;
        `}
	}

	&:hover > * {
		${hoverLarge
			? `
            transform: scale(0.87, 0.935); /* 내부 요소 축소 */
            `
			: ''}
	}
`;

export const productWrapper = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	align-items: center;

	/* width: ; */

	background-color: ${theme.colors.white};
	border-radius: 12px;
`;

export const imageContainer = (width: string) => css`
	position: relative;
	width: ${width};
	height: ${width};
	overflow: hidden;

	border-radius: 12px;
`;

export const imageStyle = css`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const productInfoContainer = (width: string, hoverLarge: boolean) => css`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	${!hoverLarge && `padding: 0 1.6rem;`}
	width: ${width};
`;

export const productInfoWrapper = css`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
`;

export const productNameStyle = (theme: Theme) => css`
	overflow: hidden;

	${theme.fonts.eng.bodyMedium13};
	color: ${theme.colors.gray9};
	white-space: nowrap;
	text-overflow: ellipsis;
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
	gap: 1rem;
`;

export const couponBtnStyle = (theme: Theme, hoverLarge: boolean) => css`
	button {
		display: flex;
		gap: 0.8rem;
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
	}
	width: 100%;
	${!hoverLarge && `padding: 0 1.6rem;`}
`;
