import { css, Theme } from '@emotion/react';

export const ProductSummayContainer = css`
	width: 96rem;
`;

export const productInfoLayoutStyle = css`
	width: 96rem;
	height: 26rem;
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
	align-items: center;
	margin-bottom: 2.4rem;
`;

export const productImgLayoutStyle = (theme: Theme) => css`
	width: 96rem;
	height: 111.3rem;
	border-top: 1px solid ${theme.colors.gray3};
	border-bottom: 1px solid ${theme.colors.gray3};
	padding: 2.4rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2.4rem;
`;

export const titleStyle = (theme: Theme) => css`
	width: 100%;
	height: 4.6rem;
	align-content: center;

	${theme.fonts.kor.titleBold20}
`;
