import { css, Theme } from '@emotion/react';

export const ProductSummayContainer = css`
	width: 96rem;
`;

export const productInfoLayoutStyle = css`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
	align-items: center;
	width: 96rem;
	height: 27rem;
`;

export const productImgLayoutStyle = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
	align-items: center;
	width: 96rem;
	height: 111.3rem;
	margin-bottom: 2.4rem;
	padding: 2.4rem 0;

	border-top: 1px solid ${theme.colors.gray3};
	border-bottom: 1px solid ${theme.colors.gray3};
`;

export const titleStyle = (theme: Theme) => css`
	display: flex;
	align-items: center;
	width: 100%;
	height: 4.6rem;
	margin-bottom: 0.8rem;

	${theme.fonts.kor.titleBold20}
`;

export const purchaseInquiryLayoutStyle = (theme: Theme) => css`
	width: 96rem;
	height: 13.4rem;
	margin-bottom: 2.4rem;

	border-bottom: 1px solid ${theme.colors.gray3};
`;

export const agencyServiceInfoLayoutStyle = (theme: Theme) => css`
	width: 96rem;
	height: 9.8rem;
	margin-bottom: 2.4rem;

	border-bottom: 1px solid ${theme.colors.gray3};
`;

export const textBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
`;

export const textStyle = (theme: Theme) => css`
	display: flex;
	gap: 0.8rem;
	align-items: center;
	height: 2rem;

	${theme.fonts.eng.captionBold11}
`;
