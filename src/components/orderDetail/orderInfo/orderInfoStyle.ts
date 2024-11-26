import { Theme, css } from '@emotion/react';

export const orderInfoComponentStyle = css`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	width: 91.1rem;
	height: 17.6rem;
`;

export const headerComponentStyle = (theme: Theme) => css`
	display: flex;
	align-items: center;
	width: 91.1rem;
	min-height: 5.2rem;
	padding-left: 2.1rem;
	${theme.fonts.kor.titleBold20}

	background-color: ${theme.colors.white};
`;

export const contentComponentStyle = (theme: Theme) => css`
	display: flex;
	gap: 1.5rem;
	width: 100%;

	background-color: ${theme.colors.white};
`;
