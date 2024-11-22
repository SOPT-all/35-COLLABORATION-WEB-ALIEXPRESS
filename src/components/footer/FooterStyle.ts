import { Theme, css } from '@emotion/react';

export const grayLayout = (theme: Theme) => css`
	display: grid;
	grid-gap: 2.4rem 3rem;
	grid-template-columns: 1fr 1fr;
	width: 100%;
	height: 18.5rem;
	padding: 2.5rem 7.2rem 3.2rem 4.4rem;

	background-color: ${theme.colors.gray2};
`;

export const footerStyle = (theme: Theme) => css`
	display: flex;
	align-items: center;
	width: 100%;
	height: 4.2rem;
	padding: 0 7.2rem 0 4.4rem;

	color: ${theme.colors.white};
	${theme.fonts.kor.captionBold11}

	background-color: ${theme.colors.black};
`;

export const subtitleStyle = (theme: Theme) => css`
	${theme.fonts.kor.bodyBold13}
`;

export const desc = (theme: Theme) => css`
	${theme.fonts.kor.captionMedium11};
`;
