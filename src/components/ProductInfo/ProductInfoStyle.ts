import { css, Theme } from '@emotion/react';

export const productInfoContainerStyle = css`
	display: flex;
	gap: 1.9rem;
	width: 96rem;
	height: 39.7rem;
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
	width: 100%;
	height: 5.2rem;
`;

export const priceDescriptionStyle = (theme: Theme) => css`
	${theme.fonts.captionMedium11}
	color: ${theme.colors.gray6};
`;

export const productNameStyle = (theme: Theme) => css`
	width: 100%;
	height: 3.2rem;

	${theme.fonts.captionBold12}
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
