import { css, Theme } from '@emotion/react';

export const productInfoContainerStyle = css`
	display: flex;
	gap: 1.9rem;
	width: 96rem;
	height: 39.7rem;
	margin-bottom: 0.6rem;
`;

export const proudctImgLayoutStyle = css`
	display: flex;
	width: 43.1rem;
	height: 36.8rem;
`;

export const detailImgBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 1.4rem;
	width: 5rem;
	height: 37rem;
`;

export const productImgStyle = css`
	width: 36.8rem;
	height: 36.8rem;
`;

export const productDetailLayoutStyle = css`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	width: 50.9rem;
	height: 39.7rem;
`;

export const productDetaiWrapperStyle = css`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	height: 11rem;
`;

export const priceBoxStyle = css`
	position: relative;
	display: flex;
	width: 100%;
	height: 5.2rem;
	margin-top: -1.6rem;
`;

export const priceDiscountStyle = (theme: Theme) => css`
	height: 100%;

	${theme.fonts.eng.headBold32};
`;

export const priceOriginalStyle = (theme: Theme) => css`
	display: flex;
	align-items: flex-end;
	height: 100%;
	margin-left: 0.6rem;

	color: ${theme.colors.gray7};
	text-decoration: line-through;
	${theme.fonts.eng.titleBold16};
`;

export const discountPercentStyle = (theme: Theme) => css`
	display: flex;
	align-items: flex-end;
	height: 100%;
	margin-left: 0.9rem;

	color: ${theme.colors.red};

	${theme.fonts.eng.titleBold16};
`;

export const priceDescriptionStyle = (theme: Theme) => css`
	margin-top: 0.4rem;

	color: ${theme.colors.gray6};
	${theme.fonts.kor.captionMedium11}
`;

export const endSaleTiemStyle = (theme: Theme) => css`
	position: absolute;
	right: 0;
	bottom: 0;

	color: ${theme.colors.red};
	${theme.fonts.kor.captionMedium10}
`;

export const productNameStyle = (theme: Theme) => css`
	width: 100%;
	height: 3.2rem;

	${theme.fonts.eng.captionBold12}
`;

export const reviewBoxStyle = (theme: Theme) => css`
	width: 100%;
	height: 2rem;

	${theme.fonts.kor.captionSemibold11}
`;

export const mediumDividerStyle = (theme: Theme) => css`
	width: 50.9rem;
	height: 0.1rem;

	background-color: ${theme.colors.gray3};
`;

export const optionStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionBold12}
`;

export const extraInfoStyle = (theme: Theme) => css`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	width: 9.5rem;
	height: 1.4rem;

	color: ${theme.colors.gray6};
	${theme.fonts.eng.captionMedium11}
`;

export const optionImgStyle = css`
	display: grid;
	grid-gap: 7px;
	grid-template-columns: repeat(9, 1fr);
	width: 100%;
	height: 10.7rem;
	margin-top: -0.6rem;
`;

export const warnLayoutStyle = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	box-sizing: border-box;
	width: 96rem;
	height: 12.2rem;
	padding: 2.4rem 0;

	border-top: 1px solid ${theme.colors.gray3};
	border-bottom: 1px solid ${theme.colors.gray3};
`;

export const warnTitleStyle = (theme: Theme) => css`
	${theme.fonts.kor.titleBold20}
	height: 4.6rem;
`;

export const warnDescriptionStyle = (theme: Theme) => css`
	display: flex;
	gap: 0.6rem;

	${theme.fonts.kor.captionMedium11}
	color: ${theme.colors.gray6};
`;
