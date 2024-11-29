import { css, Theme } from '@emotion/react';

export const recommandedBoxContainer = (theme: Theme) => css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	width: 127.7rem;
	height: 6.2rem;
	padding: 1rem 1.8rem;

	background-color: ${theme.colors.brandBg};
	border-radius: 8px;
`;

export const contentLayout = css`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
	width: 29.9rem;
	height: 4.2rem;
`;

export const titleTextStyle = (theme: Theme) => css`
	${theme.fonts.eng.titleBold18}
	color: ${theme.colors.gray9};
`;

export const subTextBoxStyle = css`
	display: flex;
	gap: 0.8rem;
	align-items: center;
`;

export const subTextStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionBold11}
	color: ${theme.colors.gray9};
`;

export const lineStyle = (theme: Theme) => css`
	width: 0.1rem;
	height: 1rem;

	background-color: ${theme.colors.gray6};
`;

export const flexBoxStyle = css`
	display: flex;
	gap: 0.8rem;
	width: 32rem;
`;
