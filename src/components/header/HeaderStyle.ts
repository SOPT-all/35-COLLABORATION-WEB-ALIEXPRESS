import { Theme, css } from '@emotion/react';

export const defaultStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const headerStyle = (theme: Theme) => css`
	gap: 1.6rem;
	width: 100%;
	height: 5.4rem;
	padding: 0.5rem 5.6rem 0.5rem 2.6rem;

	/* background-color: green; */

	background-color: ${theme.colors.gray10};
`;

export const logoOverlapStyle = css`
	position: relative;
`;

export const logoDescStyle = css`
	position: absolute;
	top: 40px;
	z-index: 50;
	gap: 0.2rem;
`;

export const fontEnStyle = (theme: Theme) => css`
	color: ${theme.colors.white};
	${theme.fonts.eng.captionMedium11};
`;

export const fontKoStyle = (theme: Theme) => css`
	color: ${theme.colors.white};
	${theme.fonts.kor.captionMedium09};
`;
