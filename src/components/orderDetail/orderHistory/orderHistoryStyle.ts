import { Theme, css } from '@emotion/react';

const flexCenter = css`
	display: flex;
	align-items: center;
`;

export const orderHistoryContainerStyle = css`
	display: flex;
	flex-direction: column;
	width: 91.1rem;
	height: 29.4rem;
	padding: 2.4rem 2.1rem;
`;

export const headerStyle = (theme: Theme) => css`
	${theme.fonts.kor.titleBold20};
`;

export const storeNameContainerStyle = css`
	${flexCenter};
	height: 2.4rem;
	margin: 1rem 0 1.3rem;
`;

export const storeNameStyle = (theme: Theme) => css`
	${theme.fonts.eng.bodyBold14};
`;

export const productContentStyle = css`
	display: flex;
	min-width: 55.4rem;
	margin-bottom: 2.4rem;
`;

export const productImageStyle = css`
	position: relative;
	margin-right: 1.4rem;

	svg {
		position: absolute;
		right: 0;
		bottom: 0;
		z-index: 1;
	}
`;

export const productInfoContainerStyle = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin-right: 4.3rem;
	${theme.fonts.eng.bodyBold14};
`;

export const productInfoStyle = css`
	display: flex;
	flex-direction: column;
	gap: 0.9rem;
	width: 56rem;
`;

export const productTitleStyle = (theme: Theme) => css`
	${theme.fonts.kor.bodyBold13};
	width: 56rem;
	overflow: hidden;

	white-space: nowrap;
	text-overflow: ellipsis;
`;

export const productPriceStyle = css`
	${flexCenter};
	gap: 1.1rem;
`;

export const blueInfoStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionMedium12};
	color: ${theme.colors.blue};
`;

export const buttonContainerStyle = css`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
`;

export const productCostStyle = css`
	display: flex;
	flex-direction: column;
	gap: 0.9rem;
	padding-left: 41.7rem;
`;

export const costRowStyle = css`
	${flexCenter};
	justify-content: space-between;
`;

export const costGrayLabelStyle = (theme: Theme) => css`
	${theme.fonts.kor.bodySemibold13};
	color: ${theme.colors.gray7};
`;

export const costLabelStyle = (theme: Theme) => css`
	${theme.fonts.kor.bodySemibold13};
`;

export const costBoldLabelStyle = (theme: Theme) => css`
	${theme.fonts.eng.bodyBold13};
	padding-right: 2rem;
`;

export const costValueStyle = (theme: Theme) => css`
	display: flex;
	gap: 0.9rem;
	align-items: center;

	${theme.fonts.eng.bodyMedium13};
	color: ${theme.colors.gray7};
`;
