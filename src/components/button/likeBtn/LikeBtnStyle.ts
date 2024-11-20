import { Theme, css } from '@emotion/react';

export const defaultStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const buttonStyle = (theme: Theme) => css`
	width: 10rem;
	height: 3.6rem;
	padding: 0.6rem 2.45rem;

	background: none;
	background-color: ${theme.colors.gray2};
	border: none;
	border-radius: 18.5px;

	&:hover {
		background-color: ${theme.colors.gray4};
	}
`;

export const contentContainer = css`
	gap: 0.5rem;
`;

export const fontStyle = (theme: Theme) => css`
	${theme.fonts.eng.captionBold12};
`;
