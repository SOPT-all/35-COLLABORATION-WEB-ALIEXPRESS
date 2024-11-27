import { Theme, css } from '@emotion/react';

export const relatedProductsContainer = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 2.4rem;
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
	gap: 2.4rem 1.3rem;
	width: 127.7rem;
	margin-bottom: 2.4rem;
`;
