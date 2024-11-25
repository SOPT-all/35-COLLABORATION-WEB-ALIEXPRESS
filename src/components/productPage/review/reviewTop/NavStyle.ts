import { Theme, css } from '@emotion/react';

export const NavContainer = css`
	display: flex;
	gap: 1.6rem;
	align-items: center;
	height: 4.8rem;
`;

export const fontLayout = css`
	display: flex;
	gap: 0.2rem;
	align-items: center;
`;

export const fontKoStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionBold12}
`;

export const fontEnStyle = (theme: Theme) => css`
	${theme.fonts.eng.captionBold12}
`;

export const fontStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionRegular12}
`;
