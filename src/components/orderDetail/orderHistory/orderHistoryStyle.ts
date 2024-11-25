import { Theme, css } from '@emotion/react';

export const orderHistoryContainerStyle = css`
	display: flex;
	flex-direction: column;
	width: 91.1rem;
	height: 29.4rem;
	padding: 2.4rem 2.1rem;
`;

export const headerContainerStyle = (theme: Theme) => css`
	${theme.fonts.kor.titleBold20};
`;

export const storeNameStyle = (theme: Theme) => css`
	${theme.fonts.eng.bodyBold14};
	display: flex;
	align-items: center;
	height: 2.4rem;
	margin-top: 1rem;
	margin-bottom: 1.3rem;
`;

export const productContentStyle = css`
	display: flex;
	min-width: 55.4rem;
	margin-bottom: 2.4rem;
`;

export const buttonsStyle = css`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
`;

export const productFirstTotalCostStyle = (theme: Theme) => css`
	display: flex;
	justify-content: space-between;

	color: ${theme.colors.gray7};
`;

export const productSecondTotalCostStyle = css`
	display: flex;
	justify-content: space-between;
`;

export const productTitleStyle = (theme: Theme) => css`
	${theme.fonts.kor.bodyBold13}
`;

export const productPriceStyle = css`
	display: flex;
	gap: 1.1rem;
`;

export const imageContentStyle = css`
	position: relative;
	display: flex;
	flex-direction: column;
	margin-right: 1.4rem;
`;

export const iconStyle = css`
	position: absolute;
	right: 0;
	bottom: 0;
	z-index: 1;
`;

export const productInfoContainerStyle = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin-right: 4.3rem;
	${theme.fonts.eng.bodyBold14}
`;

export const productInfoStyle = css`
	display: flex;
	flex-direction: column;
	gap: 0.9rem;
`;

export const blueInfoContentStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionMedium12};
	color: ${theme.colors.blue};
`;

export const productCostStyle = css`
	display: flex;
	flex-direction: column;
	gap: 0.9rem;
	padding-left: 41.7rem;
`;

export const productCostKorStyle = (theme: Theme) => css`
	${theme.fonts.kor.bodySemibold13};
`;

export const totalCostStyle = css`
	display: flex;
	gap: 0.9rem;
	align-items: center;
`;

export const totalCostEngStyle = (theme: Theme) => css`
	${theme.fonts.eng.bodyMedium13};
	color: ${theme.colors.gray7};
`;

export const totalCostEngStyle2 = (theme: Theme) => css`
	${theme.fonts.eng.bodyBold13};
	padding-right: 2rem;
`;
