import { Theme, css } from '@emotion/react';

export const orderInfoComponentStyle = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	height: 80rem;

	background-color: ${theme.colors.black};
`;

export const headerComponentStyle = (theme: Theme) => css`
	display: flex;
	align-items: center;
	width: 91.1rem;
	height: 5.2rem;
	padding-left: 2.1rem;
	${theme.fonts.kor.titleBold20}

	background-color: ${theme.colors.gray2};
`;

export const contentComponentStyle = css`
	display: flex;
	gap: 1.5rem;
`;
