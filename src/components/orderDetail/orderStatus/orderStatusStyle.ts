import { Theme, css } from '@emotion/react';

export const orderStatusComponentStyle = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	align-items: flex-start;
	width: 91.1rem;
	height: 47.1rem;
	padding: 2.4rem;

	background-color: ${theme.colors.white};
`;

export const headerComponentStyle = css`
	display: flex;
	flex-direction: column;
	gap: 1.3rem;
`;

export const componentsStyle = css`
	display: flex;
	gap: 2.1rem;
	width: 86.3rem;
`;

export const headerStringStyle = (theme: Theme) => css`
	${theme.fonts.kor.titleBold20};
`;

export const contentStringStyle = (theme: Theme) => css`
	${theme.fonts.kor.bodyMedium14};
`;
